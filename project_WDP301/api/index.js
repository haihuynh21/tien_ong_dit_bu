import mongoose from 'mongoose';
import express from 'express';
import authRoutes from './routes/auth.route.js';
const app = express();

const port = 3000;
mongoose
  .connect('mongodb://127.0.0.1:27017/ecommerce')
  .then(() => {
    console.log('MonggoDB is connected')
  })
  .catch((err) => {
    console.log(err)
  });

app.use(express.json());
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message
  })  
})


        


app.listen(port, () => {
  console.log(`server is running on post ${port}`);
});