const express=require('express')
const app=express()
const path=require('path')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.render('index')
})
app.get('/Profile/:username',function(req,res){
    res.send(req.params.username)
})
app.get('/Profile/:username/:age',function(req,res){
    res.send(`req.params.username`)
})
app.listen(3000,()=>{console.log('serever running')})