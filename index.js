require('dotenv').config();

const server = require('./server');
const port = process.env.PORT || 3030 ;

server.listen(port, () => {
  console.log(`server up on port ${port}`);
});
