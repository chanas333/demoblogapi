   
var express = require('express');
var router = express.Router();
var Blog = require('./model/model')
var Category = require('./model/categoryModel')

//to fetch the blog post
router.get('/blog',async(req,res)=>{
    const iblog = await Blog.find({})
    res.send(iblog)
    
})

//to add the blog post
router.post("/blog",async(req,res)=>{
    const iblog = new Blog({
        author:req.body.author,
        title:req.body.title,
        desc:req.body.desc,
        category : req.body.category

    })

    await iblog.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


//to update blog

router.patch('/blog/:id',async (req,res)=>{
    const iblog = await Blog.findOne({_id:req.params.id})
    iblog.author = req.body.author,
    iblog.title = req.body.title
    iblog.desc = req.body.desc,
    iblog.category = req.body.category
    
    await iblog.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})


// to delete blog post

router.delete("/blog/:id",async(req,res)=>{


    await Blog.deleteOne({_id:req.params.id},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})




/////////////category API////////////////

//to fetch the category
router.get('/category',async(req,res)=>{
    const icategory = await Category.find({})
    res.send(icategory)
    
})


//to add the category
router.post("/category",async(req,res)=>{
    const icategory = new Category({
       
        category : req.body.category

    })

    await icategory.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


//to update blog

router.patch('/category/:id',async (req,res)=>{
    const icategory = await Category.findOne({_id:req.params.id})
    icategory.category = req.body.category
    
    await icategory.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})


// to delete blog post

router.delete("/category/:id",async(req,res)=>{


    await Category.deleteOne({_id:req.params.id},(err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }

    })
})



module.exports = router 