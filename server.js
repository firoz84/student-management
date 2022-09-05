const express= require('express');
const dotenv= require('dotenv');
const path= require('path');
const pageroute= require('./routes/pageRoute');
const expressLayout= require('express-ejs-layouts');


dotenv.config();
const PORT=process.env.PORT || 4000;

const app= express();

app.use(express.json());
app.use(express.urlencoded({extended : false}));


//set ejs
app.set("view engine", "ejs");
app.use(expressLayout);

app.use(express.static('public'));
app.use(pageroute);
app.set('layout','./layouts/app')


app.listen(PORT, ()=>{

    console.log(`Server is runing on port ${PORT}`);
})


