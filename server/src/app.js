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
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://con-tac.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});
app.use(cors())
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