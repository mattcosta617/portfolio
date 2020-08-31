const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000
const projects = require('./models/projects');
const authors = require("./models/about")


app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res)=>{
    
    res.render('index.ejs', {
        project: projects,
        author: authors
    });
  
});



app.get('/projects/:index', function(req, res){
    res.render('show.ejs', {
        project: projects[req.params.index]
    });
});        






app.listen(PORT, console.log(`Server running on port ${PORT}`));