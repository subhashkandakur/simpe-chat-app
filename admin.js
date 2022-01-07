const fs = require('fs');
const express = require('express');
//const bodyParser = require('body-parser');

//const app= express();


const router = express.Router();
//app.use(bodyParser.urlencoded({extended:false}));


router.get('/login',(req,res, next)=>{
    res.send(
       '<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/sendthemessage" ><label>Enter Username</label><br><input id="username"type="text" name="Username"></input> <button type="submit">Enter</button></form>'
    )
    
});

router.get('/sendthemessage',(req,res,next)=>{
    console.log(req.body);
     res.send('<form action="/"><label>Enter Username</label><br><input type="text" name="message" value="message"></input> <button type="submit ">Send Message</button></form>')
     res.redirect('/');
     

    
    });
   

    
            
    
    

    
    
   



  

module.exports= router;