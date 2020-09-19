const sql=require('../db')
const Post=require('../model/postModel')
const fs =require('fs')

exports.CreatePost=(req,res,next)=>{
    const postObject=req.body
    const post= new Post({
        ...postObject,
       photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
   sql.query(`INSERT INTO Post ( photo,likes,Dislikes, usersid) VALUES ('${post.photo}',0,0, '${post.userid}')`)
   .then(()=>{
       res.status(200).json({post:'Post créer'})
   })
   .catch((error)=>{
    res.status(400).json({error})
   })
}
exports.getAllPost=(req,res,next)=>{
   sql.query(`SELECT * FROM Post`)
   .then((post)=>{
       res.status(200).json({post:post[0]})
   })
   .catch((error)=>{
    res.status(400).json({error})
   })
}
exports.getOnePost=(req,res,next)=>{
    const id= req.params.id
    sql.query(`SELECT * FROM Post WHERE idPost=${id}`)
    .then((post)=>{
        res.status(200).json({post:post[0]})
    })
    .catch((error)=>{
     res.status(400).json({error})
    })
 }
 exports.UpdatePost=(req,res,next)=>{
    const id=req.params.id
    const postObject=req.body
    const post=req.file ?
    {
        ...postObject,
        photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }:{ ...req.body };
   sql.query(`UPDATE Post SET photo='${req.body.photo}',likes=0,Dislikes=0 WHERE idPost=${id}`)
   .then(()=>{
       res.status(200).json({post:'post modifier'})
   })
   .catch((error)=>{
    res.status(400).json({error})
   })
}
exports.DeletePost=(req,res,next)=>{
    const id= req.params.id
    sql.query(`SELECT * FROM Post WHERE idPost=${req.params.id}`)
    .then((post)=>{
        const filename = post[0][0].photo.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            sql.query(`DELETE FROM Post WHERE idPost=${id}`)
            .then(()=>{
                res.status(200).json({post:'Post supprimer'})
            })
            .catch(()=>{
             res.status(400).json({error})
            })
        });
    })
    .catch((error)=>{
     res.status(500).json({error})
    })
}