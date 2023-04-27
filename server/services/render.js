const axios=require('axios')

exports.homeroutes=(req,res)=>{
    // Make a get request to api/users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.adduser=(req,res)=>{
    res.render('add_user');
}

exports.updateuser=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('update_user',{user:userdata.data})
    })
    .catch(err=>{
        res.send(err);
    })
    
}