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
    username: {
      type: String,
      unique: true,
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
      default:
        'We sincerely hope we will have the honor to dine, laugh, and dance with you on our wedding weekend. It would mean the world to us.',
    },
    receptionDetails: {
      type: Array,
      default: [
        {
          time: '5.00 PM',
          details: 'Example of event details',
        },
        {
          time: '5.30 PM',
          details: 'Ceremony',
        },
        {
          time: '6.00 PM',
          details: 'Ceremony ends/cocktails begin',
        },
      ],
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
    todos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
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
    QRCode: {
      type: Object,
      default: {
        avatar: {
          public_id: 'circle-ring_tbmyjw.png',
          format: 'png',
          version: '1631619815',
        },
      },
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
