const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dovenv = require('dotenv').config();

const MONGO_URL = process.env.mongo_url;

mongoose.connect(MONGO_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'crud_practice',
})
  .then(() => console.log('Connected to Mongo DB!'))
  .catch(err => console.log('Something went wrong', err));

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favoriteIceCream: {type: String, required: true},
  favoriteAlgo: {type: String, required: true}
})

module.exports = mongoose.model('User', UserSchema);