import moongose from 'mongoose';

const todoSchema = moongose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: moongose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timesstamps: true }
);

export const Todo = moongose.model('Todo', todoSchema);
