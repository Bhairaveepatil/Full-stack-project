const express=require('express')
const mongoose=require('mongoose')
const cors=require("cors")
const sign=require('./routes/signup')


let port=process.env.PORT || 3003

mongoose.connect('mongodb+srv://bhairavee:bhairavee@cluster0.s3xwegf.mongodb.net/?retryWrites=true&w=majority').then(()=> {
    console.log('Database Connected')
}).catch((err)=> {
    console.log(err)
})

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, ()=> {
    console.log(`App Listening at ${port}`)
})


app.use("/", sign)