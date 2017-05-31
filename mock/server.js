let express = require('express');
let app = express();
app.get('/api/ad',(req,res)=>{
    res.send(require('./home/ad'));
});
let list = require('./home/list');
app.get('/api/list',(req,res)=>{
    let {city,page} = req.query;
    let result = JSON.parse(JSON.stringify(list));
    result.data.forEach(item=>{
        item.title = `[${city}][第${page}页]${item.title}`;
    })
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
app.listen(3000);