const sql=require('../db')
const Post=require('../model/postModel')
const fs =require('fs')

exports.CreatePost=(req,res,next)=>{
    const postObject=JSON.parse(req.body.post)
    console.log(postObject)
    console.log(req.file)
    const post= new Post({
        ...postObject,
       photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
    console.log(post.titre)
   sql.query(`INSERT INTO Post ( photo,titre,usersid, photo_user,pseudo) VALUES ('${post.photo}','${post.titre}','${post.userid}', '${post.photo_user}','${post.pseudo}')`)
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
       res.status(200).json({post:post[0].reverse()})
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
    const postObject=JSON.parse(req.body.post)
    const post=req.file ?
    {
        ...postObject,
        photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }:{ ...postObject };
   sql.query(`UPDATE Post SET photo='${post.photo}', titre='${post.titre}' WHERE idPost=${id}`)
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
exports.likePost=(req,res,next)=>{
    const id= req.params.id
    const user= req.params.user
    sql.query(`SELECT * FROM likes WHERE idPost=${id} AND idusers=${user}`)
    .then((like)=>{
        if (like[0][0]) {
            
            sql.query(`DELETE FROM likes WHERE idPost=${id} AND idusers=${user}`)
            .then(()=>{
                sql.query(`SELECT * FROM likes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        like:false                 
                    })
                })
                .catch((error)=>{
                res.status(400).json({error})
                })
            })
            .catch(()=>{
             res.status(400).json({error})
            })
        } else {
            sql.query(`INSERT INTO likes ( idusers,idPost) VALUES ('${user}','${id}')`)
        .then(()=>{
            sql.query(`SELECT * FROM likes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        like:true      
                    })
                })
                .catch((error)=>{
                res.status(400).json({error})
                })
        })
        .catch((error)=>{
         res.status(400).json({error})
        })
        }
       
    })
    .catch(()=>{
        res.status(400).json({error})
    })
}
exports.getlikePost=(req,res,next)=>{
    const id= req.params.id
    const user= req.params.user
    sql.query(`SELECT * FROM likes WHERE idPost=${id} AND idusers=${user}`)
    .then((like)=>{
        if (like[0][0]) {
                sql.query(`SELECT * FROM likes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        like:true                
                    })
                })
                .catch((error)=>{
                res.status(400).json({error})
                })
           
        } else {
           
            sql.query(`SELECT * FROM likes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        like:false      
                    })
                })
                .catch((error)=>{
                res.status(400).json({error})
                })
       
        }
       
    })
    .catch(()=>{
        res.status(400).json({error})
    })
}
exports.dislikePost=(req,res,next)=>{
    const id= req.params.id
    const user= req.params.user
    sql.query(`SELECT * FROM dislikes WHERE idPost=${id} AND idusers=${user}`)
    .then((like)=>{
        if (like[0][0]) {
            
            sql.query(`DELETE FROM dislikes WHERE idPost=${id} AND idusers=${user}`)
            .then(()=>{
                sql.query(`SELECT * FROM dislikes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        like:false                 
                    })
                })
                .catch((error)=>{
                res.status(400).json({error})
                })
            })
            .catch(()=>{
             res.status(400).json({error})
            })
        } else {
            sql.query(`INSERT INTO dislikes ( idusers,idPost) VALUES ('${user}','${id}')`)
        .then(()=>{
            sql.query(`SELECT * FROM dislikes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        like:true      
                    })
                })
                .catch((error)=>{
                res.status(401).json({error})
                })
        })
        .catch((error)=>{
         res.status(403).json({error})
        })
        }
       
    })
    .catch(()=>{
        res.status(402).json({error})
    })
}
exports.getdislikePost=(req,res,next)=>{
    const id= req.params.id
    const user= req.params.user
    sql.query(`SELECT * FROM dislikes WHERE idPost=${id} AND idusers=${user}`)
    .then((like)=>{
        if (like[0][0]) {
                sql.query(`SELECT * FROM dislikes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        dislike:true                
                    })
                })
                .catch((error)=>{
                res.status(400).json({error})
                })
           
        } else {
           
            sql.query(`SELECT * FROM dislikes WHERE idPost=${id}`)
                .then((post)=>{
                    res.status(200).json({
                        post:post[0].length,
                        dislike:false      
                    })
                })
                .catch((error)=>{
                res.status(400).json({error})
                })
       
        }
       
    })
    .catch(()=>{
        res.status(400).json({error})
    })
}