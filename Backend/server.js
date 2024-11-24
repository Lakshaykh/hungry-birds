import express from "express"
import cors from "cors"


const app = express()
const port = 4000

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log('Server Started on http://localhost:${port}')
})



// mongodb+srv://hungrybird2401:hungry9504@cluster0.5qytn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


