import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

//creating Venue schema for Venue admin

const venueSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
    },
    businessName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 20,
    },
    websiteLink: {
      type: String,
      required: true,
    },
    billingID: String,
    plan: {
      type: String,
      enum: ['none', 'trial', 'premium'],
      default: 'none',
    },
    payment: {
      type: Object,
    },
    hasTrial: { type: Boolean, default: true },
    endDate: { type: Date, default: Date.now() + 2592000000 },
  },
  {
    timestamps: true,
  }
);

const Venue = mongoose.model('Venue', venueSchema);

export default Venue;
