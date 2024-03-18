import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT

const app = express();

//ROUTES
import userRouter from './routes/users/users.js';
import accountRouter from './routes/users/accounts.js';

//MIDDLEWARES
app.use(cors({origin: true}))
app.use(express.json());

//ROUTES
app.use("/users", userRouter);
app.use("/accounts", accountRouter);

app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`));