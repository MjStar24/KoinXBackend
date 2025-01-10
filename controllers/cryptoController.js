import axios from "axios";
import Crypto from "../models/cryptoModel.js";

class StatsController{
    async getStats(req,res){
        try{
           
            const coin=req.query.coin;
            const url = "https://api.coingecko.com/api/v3/coins/markets";
            const params={
                vs_currency:'usd',
                ids:coin
            };

            const response = await axios.get(url,{params});

            if(!response) return res.status(404).json({message: "Coin data not found"});

            const data = response.data[0];

            if(!data) return res.status(404).json({message: "Coin data not found"});

            return res.status(200).json({
                
                    price: data.current_price,
                    marketCap: data.market_cap,
                    "24hChange": data.price_change_percentage_24h
                
            });
            
        }catch(error){
            console.log(error)
            return res.status(500).json({message:"Internal Server Error"});
        }

    }

    async getDeviation(req,res){
        const {coin}=req.query;
        try{
            const details= await Crypto.find({id:coin}).select('coinDetails.current_price').sort({"coinDetails.timestamp":-1}).limit(100);
            if(!details) res.status(404).json({message:"Coins not found"});
            
            const prices=details[0].coinDetails.map(detail=>detail.current_price);

            const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;

            const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;
            const standardDeviation = Math.sqrt(variance);

            res.status(200).json({deviation : standardDeviation.toFixed(2)});
        }catch(error){
            console.log(error);
            res.status(500).json({message:"Internal Server Error"})
        }

    }
}

export default new StatsController();