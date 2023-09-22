import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import dbConnection from "./config/database.js";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);
dbConnection();

const port = process.env.PORT || 5000;


app.listen(port, (err) => {
    console.log(`App running on port ${port}`);
  });

const server = http.createServer(app);


 