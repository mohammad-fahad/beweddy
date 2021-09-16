import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
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
      type: Object,
      required: true,
    },
    callingCode: {
      type: String,
    },
    wayOfInvitations: {
      text_invite: {
        type: Boolean,
        default: false,
      },
      email_invite: {
        type: Boolean,
        default: true,
      },
      mail_invite: {
        type: Boolean,
        default: false,
      },
      allAbove_invite: {
        type: Boolean,
        default: false,
      },
    },
    rsvp: {
      type: String,
      enum: ['yes', 'maybe', 'no', 'pending'],
      default: 'pending',
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
