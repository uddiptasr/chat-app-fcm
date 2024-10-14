import express from "express";
import dotenv from "dotenv";
//const dotenv=require("dotenv");
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import fcmTokenRoutes from "./routes/fcmToken.routes.js"
import notificationRoutes from "./routes/notification.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT=process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/fcmToken",fcmTokenRoutes)
app.use("/api/messages",messageRoutes);
app.use("/api/user",userRoutes);
app.use("/api/notification",notificationRoutes);


server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server Running on port ${PORT}`);
    });