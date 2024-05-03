import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT || 3000
const app = express();

//ROUTES
import userRouter from './routes/users.js';
import accountRouter from './routes/accounts.js';
import movementRouter from './routes/movements.js';

//MIDDLEWARES
app.use(express.json());
app.use(cors({
  origin: "*",
  allowedHeaders: ['Content-Type']
}
));

//ROUTES
app.use("/users", userRouter);
app.use("/accounts", accountRouter);
app.use("/movements", movementRouter);

setInterval(() => {
  const url = `https://contac-p49x.onrender.com/users/logout/hernan/1`
  fetch(url)
  .then(res => console.log(res))
}, 840000);

app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`));