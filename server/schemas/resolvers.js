const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      console.log("context", context.user);
      if (context.user) {
        return await User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log("token", token);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);

      if (!user) {
        throw new UserInputError("Something is wrong!");
      }

      const token = signToken(user);

      return { token, user };
    },

    saveCampground: async (parent, args, context) => {
      console.log("context", context.user);
      console.log("!!!!", args);
      if (context.user) {
        const newCampground = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { favCampgrounds: args.campgroundInput } },
          {
            new: true,
            runValidators: true,
          }
        );
        return newCampground;
      }
    },

    removeCampground: async (parent, args, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { favCampgrounds: { campgroundId: args.campgroundId } } },
          { new: true }
        );
        return updatedUser;
      }
    },
  },
};

module.exports = resolvers;
