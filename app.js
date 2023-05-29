require('dotenv').config();

const app = require('./config/app.config');

const port = 2000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));