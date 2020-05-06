const student = require('../../models/student');

module.exports = function (router) {
    //GET
    router.get('/getStudent',function (req,res){
        res.send("hello.....");
    })

    //POST
    router.post('/postStudent', (req, res)=>{
       
    })

    router.get('/student', function (req, res) {
       
    })

 //PUT  
    
    router.put('/putStudent',(req,res)=>{
        
    })

    router.delete('/deleteStudent/:id',(req,res)=>{
       
    })



} //end