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
        weddingDate: {
          type: Date,
        },
        tba: {
          type: Boolean,
        },
        firstReception: {
          type: String,
        },
        secondReception: {
          type: String,
        },
      },
      announcement: {
        type: Object,
        // Invitation Card Image
      },
      wayOfInvitation: {
        callingCode: String,
        phone: String,
      },
      couplePictures: [],
    },
    ourStory: {
      type: String,
    },
    receptionDetails: {
      type: Array,
    },
    giftCards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gift',
      },
    ],
    registries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registry',
      },
    ],
    socialAccounts: {
      groom: {
        facebook: String,
        twitter: String,
        instagram: String,
        snapchat: String,
        tiktok: String,
        pinterest: String,
        linkedIn: String,
        youTube: String,
      },
      bride: {
        facebook: String,
        twitter: String,
        instagram: String,
        snapchat: String,
        tiktok: String,
        pinterest: String,
        linkedIn: String,
        youTube: String,
      },
    },
    weddingVideo: {
      title: String,
      video: String,
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
      default:
        'https://res.cloudinary.com/muttakinhasib/image/upload/v1611336104/avatar/user_qcrqny.svg',
    },
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('fullName').get(function () {
  return `${this.questions.firstName} ${this.questions.lastName}`;
});

userSchema.virtual('coupleName').get(function () {
  return `${this.questions.firstName} & ${this.questions.spouseFirstName}`;
});

userSchema.virtual('username').get(function () {
  return `${this.questions.firstName}${this.questions.lastName}_${nanoid(
    4
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
