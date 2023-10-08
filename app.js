require('dotenv').config()
const express=require('express')
const app=express()
let Port=process.env.PORT

app.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})
app.get('/login',(req,res)=>{
    res.send('<div style="font-family: Arial, sans-serif; background-color: #f2f2f2; text-align: center;"><div style="max-width: 400px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);"><h1 style="font-size: 24px; margin-bottom: 20px;">Login</h1><form style="text-align: left;"><label for="username">Username:</label><input type="text" id="username" name="username" style="width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;" required><label for="password">Password:</label><input type="password" id="password" name="password" style="width: 100%; padding: 10px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 4px;" required><button type="submit" style="background-color: #007bff; color: #fff; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">Login</button></form></div>')
})
app.listen(Port,()=>{
    console.log(`Executing in Port ${Port}`)
})