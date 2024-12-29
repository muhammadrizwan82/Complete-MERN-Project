import mongoose from 'mongoose';

const orderItem = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItem],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Processing', 'Shipped', 'Deliver', 'Cancelled'],
      default: 'Pending',
    },
    isActive: Boolean,
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
