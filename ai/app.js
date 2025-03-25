import express from 'express';
import morgan from 'morgan';

// import userRoutes from './routes/user.routes.js';
// import projectRoutes from './routes/project.routes.js';
import {connectmq} from './services/rabbit.js';     
import aiRoutes from './routes/ai.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectmq();

// app.use('/users', userRoutes);
// app.use('/projects', projectRoutes);
app.use("/", aiRoutes)





export default app;