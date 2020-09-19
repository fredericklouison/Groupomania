
const sql=require('../db')
const User=require('../model/usersModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')


exports.createUser=(req,res,next)=>{
    const userObject=req.body
    const password=req.body.password
    try {
        let regex=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
        if(regex){
          bcrypt.hash(password, 10)
          .then(hash => {
            const Users = new User({
              ...userObject,
              password: hash
            });
            sql.query(`INSERT INTO users( email,password,nom, prenom,IsAdmin) VALUES ('${Users.email}','${Users.password}','${Users.nom }','${Users.prenom}',${Users.IsAdmin})`)
            .then(() =>res.status(200).json({message:'utilisateur créer!',user:Users}))
            .catch(error=>res.status(400).json({error}))
          })
          .catch(error => res.status(503).json({ error }));
          
        }else{
          throw error = new Error('le mot de passe doit contenir au moins 8 caractère , une minuscule ,une majuscule et un chifre ou un caractère spécial');
      } 
        
      } catch (error) {
         res.status(400).json({error:error})
      }
                                
    
}
exports.login=(req,res,next)=>{
    const email=req.body.email  
    const password = req.body.password   
    sql.query(`SELECT * FROM users WHERE email='${email}'`)
    .then((user) =>{
        if (!user) {
            return res.status(401).json({ error });
        }bcrypt.compare(password,user[0][0].password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error});
          }
          res.status(200).json({
            userId:user[0][0].idUsers,
            token: jwt.sign(
              { userId:user[0][0].idUsers },
              "process.env.TOKEN",
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error=>res.status(500).json({error:error}))
      
}
exports.UpdateUser=(req,res,next)=>{
    const userObject=req.body
    const user=req.file ?
    {
        ...userObject,
        photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }:{ ...req.body };
   sql.query(`UPDATE users SET nom='${user.nom}',prenom='${user.prenom}',photo='${user.photo}' WHERE email='${user.email}'`)
   .then(()=>{
       res.status(200).json({user:'utilisateur modifier'})
   })
   .catch(()=>{
    res.status(400).json({error})
   })
}

exports.DeleteUser=(req,res,next)=>{
    const email=req.body.email
   sql.query(`DELETE FROM users WHERE email='${email}'`)
   .then(()=>{
       res.status(200).json({user:'utilisateur supprimer'})
   })
   .catch(()=>{
    res.status(400).json({error})
   })
}