import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import adminRoutes from "./routes/admin/adminRoutes.js";
import agentRoutes from "./routes/admin/agentRoutes.js";
import userRoutes from "./routes/user/userRoutes.js";
import ticketRoutes from "./routes/ticket/ticketRoutes.js";

dotenv.config();

connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1/agents", agentRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/tickets", ticketRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  5000,
  console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`)
);
