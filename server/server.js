//write requires
const express = require('express');
const path = require('path');
const PORT = 3000;
const userRouter = require('./routes/userRouter');

// parse json
const app = express();
app.use(express.json());
app.use('/user', userRouter);


//setup routes



//setup error handler

app.use(function (err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  // console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//listen for port
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
})