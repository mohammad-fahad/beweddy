import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import mongoose from 'mongoose';

//creating user schema for user admin
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    questions: {
      firstName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20,
      },
      spouseFirstName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20,
      },
      spouseLastName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20,
      },
      weddingDay: {
        specialDay: {
          type: Date,
        },
        tba: {
          type: Boolean,
        },
        firstReception: {
          type: Date,
        },
        secondReception: {
          type: Date,
        },
      },
      announcement: {
        type: Object,
        // Invitation Card Image
      },
      invitation: {
        countryCode: String,
        phone: String,
      },
      couplePictures: [],
    },
    role: {
      type: String,
      enum: ['couple', 'venue'],
      default: 'couple',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('fullName').get(function () {
  return `${this.questions.firstName} ${this.questions.lastName}`;
});

userSchema.virtual('username').get(function () {
  return `${this.questions.firstName}${this.questions.lastName}_${nanoid(
    3
  )}`.toLowerCase();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
