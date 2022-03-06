const express=require("express")
const app=express()



app.get("/home", function(req, res){
    
    res.send("Hello")
})

app.get("/books", function(req, res){
    
    res.json({book1 :"mybook1",book2: "mybook2", book3: "mybook3",book4: "mybook4"})
})


app.listen(5000, ()=>{
    console.log("listenig on port new")
})