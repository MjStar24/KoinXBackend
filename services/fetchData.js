import axios from "axios";
import Crypto from "../models/cryptoModel.js";

const fetchCryptoData=async () => {
    const url = "https://api.coingecko.com/api/v3/coins/markets";
    const params={
        vs_currency:'usd',
        ids:'bitcoin,ethereum,matic-network'
    };

    try{
        console.log("hii")
        const response=await axios.get(url,{params});
        const data=response.data;
        for(const item of data){
            await Crypto.updateOne(
                {id:item.id},
                {$push:{
                    coinDetails:{
                        current_price:item.current_price,
                        market_cap:item.market_cap,
                        price_change_percentage_24h:item.price_change_percentage_24h,
                    }
                },
                $set: {
                    name: item.name,
                    symbol: item.symbol
                }
            },
                {upsert:true}
            )
        }
    }catch(error){
        console.log(error);
    }
}

export default fetchCryptoData;