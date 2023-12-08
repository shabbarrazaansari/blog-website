const express = require('express');
const app = express();
const Sequelize = require('sequelize')

const sequelize = require('./util/database');

const A = require('./models/submit');

const B =require('./models/comment')

const port = 8080;

const cors = require('cors');

const adminRoutes = require('./routes/admin')

var bodyParser = require('body-parser');

app.use(bodyParser.json({extended :true}))
app.use(cors());

app.use(adminRoutes);
A.hasMany(B,{ foreignKey: 'blogId' }); 
B.belongsTo(A,{ foreignKey: 'blogId' });

sequelize
// .sync
//  ({force:true})
  .sync()
.then((result) => {

    
app.listen(port,()=>{
    console.log('running',port)
})
}).catch((err) => {
    console.log("something wrong",err)
    
});


