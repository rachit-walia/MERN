// const express=require('express') ;
import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send('Server is ready');
});

// get a lis tof 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 2,
            title: "Why did the bicycle fall over?",
            content: "Because it was two-tired!"
        },
        {
            id: 3,
            title: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 4,
            title: "Why was the math book sad?",
            content: "Because it had too many problems."
        },
        {
            id: 5,
            title: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        }
    ];

    res.json(jokes);
});

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is ready at port: ${port}`);
})
