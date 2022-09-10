const { Schema, model, Types } = require('mongoose');


const reactionSchema = new Schema({
  
  body: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },

}, {
  timestamps: true,
})



// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    timestamps: true,
    id: false,
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
