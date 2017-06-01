let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get('/api/ad',(req,res)=>{
    res.send(require('./home/ad'));
});
let list = require('./home/list');
app.get('/api/list',(req,res)=>{
    let {city,page} = req.query;
    let result = JSON.parse(JSON.stringify(list));
    res.send(result);
});
let info = require('./detail/info');
app.get('/api/detail/:id',function(req,res){
    res.send(info);
});
let comment = require('./detail/comment');
app.get('/api/comment/:id/:page',function(req,res){
    res.send(comment);
});
let search = require('./search/list');
app.get('/api/search',function(req,res){
    res.send(search);
});

let orderlist = require('./orderlist/orderlist');
app.get('/api/orderlist/:username',function(req,res){
    res.send(orderlist);
});

app.post('/api/comment',function(req,res){
    let body = req.body;
    console.log(body);
    let index = orderlist.findIndex(order=>order.id == body.id);
    let order = orderlist[index];
    order.commentState = 2;
    orderlist[index] = order;
    console.log(orderlist);
    res.send(order);
});
app.listen(3000);