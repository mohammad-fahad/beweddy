import fs from 'fs';
import asyncHandler from 'express-async-handler';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
});

const removeTemp = path => {
  fs.unlink(path, err => {
    console.log(err);
  });
};

// Upload Image
export const uploadImage = asyncHandler(async (req, res) => {
  const file = req.files.image;
  const folder = req.body.folder;
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder,
  });

  const { public_id, height, width, secure_url, url } = result;

  if (result) {
    removeTemp(file.tempFilePath);
    res.json({ public_id, height, width, secure_url, url });
  } else {
    res.status(400);
    throw new Error('Something went wrong');
  }
});

// Delete Image
export const removeImage = asyncHandler(async (req, res) => {
  const { public_id } = req.body;

  const result = await cloudinary.uploader.destroy(public_id);

  if (result) {
    res.json({ message: 'Image removed' });
  } else {
    res.status(400);
    throw new Error('Something went wrong');
  }
});