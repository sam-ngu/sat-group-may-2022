const express = require('express');
require('./config/connection');
const apiRoutes = require('./routes/api');

console.log('aaaaaaaaaaa', apiRoutes);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
