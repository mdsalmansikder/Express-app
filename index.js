import express from 'express'
const app =express();
const PORT =process.env.PORT|| 5000;

app.get('/',(req,res)=>{(
    res.send('user are coming sooon')
)});

app.get('/users',(req,res)=>{(
    res.send(users)
)});

const users =[
    {id:1,name:'sabbir',email:'sabbir@example.com'},
    {id:2,name:'sabbir',email:'sabbir2@example.com'},
    {id:3,name:'sabbir',email:'sabbir3@example.com'},   
    {id:4,name:'sabbir',email:'sabbir4@example.com'}
]




app.listen(PORT,()=>[(
    console.log(`server is running on port ${PORT}`)
)]);