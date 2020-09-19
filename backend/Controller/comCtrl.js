const sql=require('../db')
const Comment=require('../model/comModel')

exports.CreateCom=(req,res,next)=>{
    const commObject=req.body
    const comment=new Comment({
            ...commObject
    })
   sql.query(`INSERT INTO commentaire( text,postid,userid) VALUES ('${comment.text}',${comment.postid},${comment.userid })`)
   .then(()=>{
       res.status(200).json({comment:'commentaire créer'})
   })
   .catch(()=>{
    res.status(400).json({error})
   })
}
exports.getAllCom=(req,res,next)=>{
   sql.query(`SELECT * FROM commentaire`)
   .then((com)=>{
       res.status(200).json({comment:com[0]})
   })
   .catch(()=>{
    res.status(400).json({error})
   })
}
exports.UpdateCom=(req,res,next)=>{
    const id=req.params.id
    const text=req.body.text
    sql.query(`UPDATE commentaire SET text='${text}'WHERE idcom=${id}`)
    .then((com)=>{
        res.status(200).json({comment:"commentaire modifier"})
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