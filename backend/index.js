import express from "express"
import productRoutes from "./routes/products.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", productRoutes)

app.listen(8800)