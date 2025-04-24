const mongoose = require('mongoose');
const dontEnv = require('dotenv');
const app = require('./app');

dontEnv.config({ path: './config/config.env' });

const db = process.env.DATABASE_URL;
const PORT = process.env.PORT || 5050;

mongoose.connect(db).then(() => {
  console.log('connected to local database');
});

app.listen(PORT, () => {
  console.log(`server up and listining at - ${PORT}`);
});
