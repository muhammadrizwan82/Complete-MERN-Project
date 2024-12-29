import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      camelcase: true,
    },
    Description: {
      type: String,
      required: true,
    },
    category: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    Images: [
      {
        type: String,
        required: true,
      },
    ],

    createdBy: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'User',
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
