const mongoose = require('mongoose');

const linksSchema = new mongoose.Schema(
  {
    url: { type: String, required: [true, 'link is mandatory'] },
    name: { type: String, default: 'unnamed' },
    clicks: { type: Number, default: 0 },
    author: { type: String, required: true },
    hash: { type: String, required: [true, 'Something went wrong'] },
  },
  {
    timestamps: true,
  }
);

const Link = new mongoose.model('Link', linksSchema);

module.exports = Link;
