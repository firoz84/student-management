
const {readFileSync}= require('fs');

const path= require('path');



const showHomePage= (req, res)=>{
    const slider =  readFileSync(path.join(__dirname, '../db/slider.json'));
    const itembox =  readFileSync(path.join(__dirname, '../db/item-box.json'));
    
    res.render('index',{
        slider: JSON.parse(slider.toString()),
        itembox:JSON.parse(itembox.toString())
    });

   
}
const showGallerypage= (req, res)=>{
    res.render('gallery');
}

const showArchivePage=(req, res)=>{
    const blog =  readFileSync(path.join(__dirname, '../db/blog.json'));
    res.render('archive',{
        blog:JSON.parse(blog.toString())

    });
}

const showsinglePage=(req,res)=>{

    const blog =  readFileSync(path.join(__dirname, '../db/blog.json'));
    const single_blog = JSON.parse(blog);
    const single_post = single_blog.find( data=> data.id == req.params.id)

  
    res.render('single',{
        item:single_post

    })

}

const showLocationPage= function(req, res){
    res.render('location');

}

const showMenuPage= (req, res)=>{
    res.render('menu')
}
const showNewsPage= function(req, res){

    res.render('news');
}
const showStaffPage= (req, res)=>{
    res.render('staff');
}




module.exports={
    showHomePage,
    showGallerypage,
    showArchivePage,
    showLocationPage,
    showMenuPage,
    showNewsPage,
    showStaffPage,
    showsinglePage
}