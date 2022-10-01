const AuthenticationError = require('../exceptions/AuthenticationError');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

function checkIfLoggedIn(context){
  if(!context.user){
    throw new AuthenticationError('Not logged in');
  }
}


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      checkIfLoggedIn(context);
      const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
      return userData;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }, context) => {
      const user = await User.create({
        username, email, password
      });

      if (!user) {
        throw new Error('Something is wrong!');
      }
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error('Cant find user');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new Error('Wrong password!');
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { bookId, authors, description, title, image, link }, context) => {
      checkIfLoggedIn(context)
      
      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: {
          bookId, authors, description, title, image, link
        } } },
        { new: true, runValidators: true }
      );
      return updatedUser;
      
    },
    removeBook: async (parent, { bookId }, context) => {
      checkIfLoggedIn(context);

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
      if (!updatedUser) {
        throw new Error("Couldn't find user with this id!");
      }
    
      return updatedUser;

    },
  },
};

module.exports = resolvers;
