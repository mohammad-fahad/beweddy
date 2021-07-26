import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
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
      yourFirstName: {
        type: String,
        required: true,
        trim: true,
        min: 2,
        max: 20,
      },
      yourLastName: {
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
      specialDay: {
        type: Date,
      },
      tba: {
        type: Boolean,
      },
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
    contactNumber: {
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
