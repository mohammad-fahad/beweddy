import bcrypt from "bcrypt";
import mongoose from "mongoose";

//creating Venue schema for Venue admin
const venueSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    logo: {
      type: Object,
    },
    businessName: {
      type: String,
      required: true,
      trim: true,
      min: 2,
      max: 20,
    },
    notifyAdmin: {
      type: Boolean,
      default: false,
    },
    websiteLink: {
      type: String,
      required: true,
    },
    customWebsite: {
      type: Boolean,
      default: false,
    },
    weddingSchedule: {
      type: Object,
    },
    vendorSchedule: {
      type: Object,
    },
    billingID: String,
    plan: {
      type: String,
      default: "none",
    },
    payment: {
      type: Object,
    },
    hasTrial: { type: Boolean, default: false },
    endDate: {
      type: Date,
      // default: Date.now() + 2592000000,
    },
  },
  {
    timestamps: true,
  }
);

const Venue = mongoose.model("Venue", venueSchema);

export default Venue;
