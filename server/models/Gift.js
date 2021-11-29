import mongoose from 'mongoose';

//creating user schema for user admin
const giftSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isRecommended: {
      type: Boolean,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gift = mongoose.model('Gift', giftSchema);

export default Gift;
