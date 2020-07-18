const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// user schema
const userSchema = new mongoose.Schema({
	username: {type: String, unique: true},
	isAdmin: {type: Boolean, default: true},
	blogs: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Blog"
		}
	],
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

module.exports = User;
