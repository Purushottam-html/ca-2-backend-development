import express from "express";
// import mongoose from "mongoose";
const app = express()


const users = [
    {username: "alice", age: 25, email: "alice@example.com"},
    {username: "bob", age: 30, email: "alice@example.com"},
    {username: "charlie", age:28, email: "charlie@example.com"}
]

app.get("/user" , (req,res) => {
    res.send("server is running")
})


app.get("/user" , (req,res) => {
    if(!req.query.user) {
        return res.status(404).json({message: "user parameter cannot be empty"})
    }

    const user = users.find(u => {u.username === req.query.user})

    if(user){
        res.json({message: "user found", data: user})
    } else{
        res.status(404).json({message: "user not found"} )
    }


})





app.use(express.json())

app.listen("5000" , () => {
    console.log("successfully listening on port 5000")
})
