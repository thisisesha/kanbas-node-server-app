import express from 'express';
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import cors from "cors";
import ModuleRoutes from './Kanbas/modules/routes.js';
import AssignmentRoutesApp from './Kanbas/assignments/routes.js';
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express()
app.use(cors());
app.use(express.json());
UserRoutes(app);
Hello(app)
Lab5(app)
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutesApp(app);
app.listen(process.env.PORT || 4000);