const express=require('express');
const app=express();
app.use(express.json())//blob sedning data is in this form 
app.use(express.urlencoded({extended:true}))
app.use(function(req,res,next){
   console.log('hello im  middleware')
    next()
})
app.use(function(req,res,next){
 
    console.log('hello im  middleware 2');
       next()
})
app.get('/',function(res,req){
    res.send('hello rosu')
})
app.get('/Rosu',function(req,res,next){
    return next(new Error('something problem'))
})
app.use(function(errr,req,res,resnext){
     res.status(300).send('something went wrong')// this is midileware 
})
app.listen(3000)