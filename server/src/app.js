import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT

const app = express();

//ROUTES
import userRouter from './routes/users.js';
import accountRouter from './routes/accounts.js';
import movementRouter from './routes/movements.js';

//MIDDLEWARES
app.use(cors({origin: true}))
app.use(express.json());

//ROUTES
app.use("/users", userRouter);
app.use("/accounts", accountRouter);
app.use("/movements", movementRouter);

app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`));