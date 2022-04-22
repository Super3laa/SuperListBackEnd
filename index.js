const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors=require('cors');
const app = express();
const models = require('./models')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const Op = require('sequelize').Op

app.get('/invoices',async function(req,res){
    console.log(req.query)
    let query = req.query;
    const limit = parseInt(req.query.limit)
    const offset = parseInt(req.query.offset)
    let filters = JSON.parse(query.filter)
    if (filters.client){
        filters.client = {[Op.like]:`%${filters.client}%`}
    }
    let dbObj = {
        where:filters,
        limit,
        offset,
    }
    if(req.query.sort){
        let sort = JSON.parse(query.sort);
        dbObj.order = [sort]
    }
    let {count,rows} = await models.invoices.findAndCountAll(dbObj);
    res.send({count,rows}).status(200);
})


app.listen(5000,()=>console.log("Server is up,Alaa on PORT 5000"))