import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT || 3001
const app = express();

//ROUTES
import userRouter from './routes/users.js';
import accountRouter from './routes/accounts.js';
import movementRouter from './routes/movements.js';

//MIDDLEWARES
app.use(express.json());
app.use(cors({
  origin: "https://contac-p49x.onrender.com",
  allowedHeaders: ['Content-Type', 'Authorization']
}
));

//ROUTES
app.use("/users", cors(), userRouter);
app.use("/accounts", cors(), accountRouter);
app.use("/movements", cors(), movementRouter);

setInterval(() => {
  const url = `https://con-tac.onrender.com/users/logout/hernan/1`
  fetch(url)
  .then(res => console.log(res))
}, 840000);

app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`));