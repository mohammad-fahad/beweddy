import mongoose from 'mongoose';

//creating user schema for user admin
const privetRegistrySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PrivetRegistry = mongoose.model('PrivetRegistry', privetRegistrySchema);

export default PrivetRegistry;
