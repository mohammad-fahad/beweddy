import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      providence: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
    },
    phone: {
      type: String,
      required: true,
    },
    callingCode: {
      type: String,
    },
    provider: {
      type: String,
      enum: [
        'AT&T',
        'T-Mobile&Sprint',
        'Verizon',
        'BoostMobile',
        'CricketWireless',
        'VirginMobile',
        'Other',
      ],
      default: 'AT&T',
      required: true,
    },
    wayOfInvitation: {
      text: {
        type: Boolean,
        
      }
    },
    rsvp: {
      type: Boolean,
      default: false,
    },
    guestEstimate: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const Guest = mongoose.model('Guest', guestSchema);

export default Guest;
