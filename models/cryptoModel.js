import mongoose from "mongoose";

const coinModel=new mongoose.Schema(
    {
        current_price:Number,
        market_cap:Number,
        price_change_percentage_24h:Number,
        timestamp:{type:Date,default:Date.now},
    },
    {_id:false}
)
const cryptoSchema=new mongoose.Schema({
    id:{type:String, required:true, unique:true},
    name:String,
    symbol:String,
    coinDetails:[coinModel]
})

const Crypto=mongoose.model("Crypto",cryptoSchema);
export default Crypto;