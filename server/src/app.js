import express from 'express';
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.PORT

const app = express();

//ROUTES
import userRouter from './routes/users/users.js';

//MIDDLEWARES
app.use(express.json());

app.use("/users", userRouter);

app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`));