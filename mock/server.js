let express = require('express');
let app = express();
app.get('/api/ad',(req,res)=>{
    res.send(require('./home/ad'));
});
app.listen(3000);