import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from './routes/user.routes.js';
// import projectRoutes from './routes/project.routes.js';
// import aiRoutes from './routes/ai.routes.js';
import { connectmq } from './services/rabbit.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
connect();
connectmq();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', userRoutes);
// app.use('/projects', projectRoutes);
// app.use("/ai", aiRoutes)



// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

export default app; 