
import  mongoose  from "mongoose"; 

const connection = async()=>{
    try{
const URL ='mongodb://Pooja:Inshortclonepooja@clone-inshort-shard-00-00.eezze.mongodb.net:27017,clone-inshort-shard-00-01.eezze.mongodb.net:27017,clone-inshort-shard-00-02.eezze.mongodb.net:27017/Clone-Inshort?ssl=true&replicaSet=atlas-x91w0e-shard-0&authSource=admin&retryWrites=true&w=majority'

await mongoose.connect(URL, { useNewUrlParser: true })

console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting from database', error);
    }
}
export default connection;

