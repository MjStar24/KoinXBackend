import "dotenv/config"

import express from "express"
import cors from "cors"
import cron from "node-cron"

import DbConnect from "./services/dbConnection.js";
import cryptoRoutes from "./routes/cryptoRoutes.js";
import fetchCryptoData from "./services/fetchData.js";

DbConnect();

const app=express();

app.use(cors());
app.use(express.json());


app.use("/api",cryptoRoutes);


// cron.schedule("0 */2 * * *", async () => {
//     console.log("Running scheduled job...");
//     await fetchCryptoData();
// });

const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})