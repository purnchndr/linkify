const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;
const NODE_ENV = process.env.NODE_ENV;

mongoose
  .connect(DB_URI)
  .then(() => console.log('DB connection sucessfull'))
  .catch(e => console.log('DB connection faield', e.message));

app.listen(PORT, () =>
  console.log(`App is running on port ${PORT} in ${NODE_ENV} environment`)
);
