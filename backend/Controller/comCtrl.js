const sql=require('../db')
const Comment=require('../model/comModel')

exports.CreateCom=(req,res,next)=>{
    
    const commObject=req.body
   
    const comment=new Comment({
            ...commObject
    })
   sql.query(`INSERT INTO commentaire( Text,postid,userid,pseudo) VALUES ("${comment.text}",${comment.postid},${comment.userid },'${comment.pseudo }')`)
   .then(()=>{
       res.status(200).json({comment:'commentaire créer'})
   })
   .catch((error)=>{
    res.status(400).json({error})
   })
}
exports.getAllCom=(req,res,next)=>{
   sql.query(`SELECT * FROM commentaire WHERE postid=${req.params.id}`)
   .then((com)=>{
       res.status(200).json({comment:com[0]})
   })
   .catch(()=>{
    res.status(400).json({error})
   })
}

 exports.Deletecom=(req,res,next)=>{
    const id=req.params.id
   sql.query(`DELETE FROM commentaire WHERE idcom=${id}`)
   .then(()=>{
       res.status(200).json({comment:'commentaire supprimer'})
   })
   .catch(()=>{
    res.status(400).json({error})
   })
}