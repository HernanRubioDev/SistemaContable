import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT || 4000
const app = express();

//ROUTES
import userRouter from './routes/users.js';
import accountRouter from './routes/accounts.js';
import movementRouter from './routes/movements.js';

//MIDDLEWARES
app.use(cors({
  origin: 'https://contac-p49x.onrender.com', // Especifica el origen permitido
  allowedHeaders: ['Content-Type'] // Especifica las cabeceras permitidas
}));
app.use(express.json());

//ROUTES
app.use("/users", cors(), userRouter);
app.use("/accounts", cors(), accountRouter);
app.use("/movements", cors(), movementRouter);
app.use("/health", (req, res) => res.status(200).json({message:"Server up"}))

setInterval(() => {
  const url = `https://con-tac.onrender.com/health`
  fetch(url)
  .then(res => console.log(res))
}, 840000);

app.listen(PORT, ()=>console.log(`Servidor corriendo en el puerto ${PORT}`));