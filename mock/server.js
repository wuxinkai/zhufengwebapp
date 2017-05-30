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
app.listen(3000);