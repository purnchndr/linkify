const Link = require('../models/links');

async function getAllLinks(req, res, next) {
  const data = await Link.find();
  res.status(200).json({ message: 'Request fulfilled ', data });
}

async function getlink(req, res, next) {
  const id = req.params.id;
  if (!id) return res.status(404).json({ message: 'Link not found ' });
  const data = await Link.findOne({ hash: id });
  if (!data)
    res
      .status(404)
      .json({ message: 'URL not found with given id', code: 'wrong_url_id' });
  return res.status(200).json({ message: 'Request fulfilled ', data });
}

async function getlinkAndRedirect(req, res, next) {
  const id = req.params.id;
  if (!id) return res.status(404).json({ message: 'Link not found ' });
  const data = await Link.findOneAndUpdate(
    { hash: id },
    { $inc: { clicks: 1 } }
  );
  if (!data) return res.status(404).json({ message: 'Link not found ' });
  return res.redirect(301, data.url);
}

async function deleteLink(req, res) {
  const id = req.params.id;
  if (!id)
    res
      .status(400)
      .json({ message: 'NO URL id Present in body', code: 'no_url_id_error' });
  const link = await Link.findOneAndDelete({ hash: id });
  if (!link)
    res
      .status(404)
      .json({ message: 'URL not found with given id', code: 'wrong_url_id' });
  res
    .status(200)
    .json({ message: 'Request fulfilled', data: link, code: 'url_deleted' });
}

async function createLink(req, res) {
  const { url, name, author } = req.body;
  if (!url || !author)
    res
      .status(400)
      .json({ message: 'NO URL Present in body', code: 'no_url_error' });
  const hash = Date.now();
  const link = new Link({ url, name, author, hash, $inc: { clicks: 1 } });
  const data = await link.save();
  res
    .status(200)
    .json({ message: 'Request fulfilled', data, code: 'url_created' });
}

module.exports = {
  getAllLinks,
  createLink,
  getlink,
  getlinkAndRedirect,
  deleteLink,
};
