import express from "express";

import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import authRoutes from "./routes/auth.js";

import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000/"],
  methods: ["GET", 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
// app.use(cors());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "supersecretsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use("/", cartRoutes);
app.use("/", productRoutes);
app.use("/", authRoutes);

app.listen(8080);
