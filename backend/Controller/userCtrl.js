
const sql=require('../db')
const User=require('../model/usersModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')



exports.createUser=(req,res,next)=>{
    const userObject=JSON.parse(req.body.user)
    const password=userObject.password
    
    try {
        let regex=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
        if(regex){
          bcrypt.hash(password, 10)
          .then(hash => {
            const Users = new User({
              ...userObject,
              password: hash
            });
            console.log(Users.photo)
            sql.query(`INSERT INTO users( email,password,pseudo,nom, prenom,IsAdmin) VALUES ('${Users.email}','${Users.password}','${Users.pseudo }','${Users.nom }','${Users.prenom}',${Users.IsAdmin})`)
            .then((user) =>res.status(200).json({
            message:'utilisateur créer!',
            user:Users,
            token: jwt.sign(
              { userId:Users.userId,
                nom:Users.nom,
                photo:"http://localhost:5000/images/defaultprofile.webp",
                pseudo:Users.pseudo,
                prenom:Users.prenom,
                email:Users.email
              },
              "process.env.TOKEN",
              { expiresIn: '24h' }
            )}))
            .catch(error=>res.status(402).json({error}))
          })
          .catch(error => res.status(500).json({ error }));
          
        }else{
          throw error = new Error('le mot de passe doit contenir au moins 8 caractère , une minuscule ,une majuscule et un chifre ou un caractère spécial');
      } 
        
      } catch (error) {
         res.status(401).json({error:'le mot de passe doit contenir au moins 8 caractère , une minuscule ,une majuscule et un chifre ou un caractère spécial'})
      }
                                
    
}
exports.login=(req,res,next)=>{
    const body=req.body
    console.log(body)
    const email=body.email
    const password=body.password
    sql.query(`SELECT * FROM users WHERE email='${email}'`)
    .then((user) =>{
      
        if (!user) {
            return res.status(401).json({ error });
        }bcrypt.compare(password,user[0][0].password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error:"mot de passe invalide"});
          }
          res.status(200).json({
            userId:user[0][0].idUsers,
            name:user[0][0].nom,
            token: jwt.sign(
              { userId:user[0][0].idUsers,
                nom:user[0][0].nom,
                pseudo:user[0][0].pseudo,
                prenom:user[0][0].prenom,
                photo:user[0][0].photo,
                email:user[0][0].email 
              },
              "process.env.TOKEN",
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error=>res.status(501).json({error:'utilisateur inconnu'}))
      
}
exports.UpdateUser=(req,res,next)=>{
   const userObject=JSON.parse(req.body.user)
    const email=userObject.email
    const file=req.file
    
    console.log(file)
    const users=req.file ?
    {
        ...userObject,
        photo: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }:{ ... userObject };
      if (file) {
        sql.query(`UPDATE users SET nom='${users.nom}',prenom='${users.prenom}',photo='${users.photo}',pseudo='${users.pseudo}' WHERE email='${users.email}'`)
        .then(()=>{
          sql.query(`SELECT * FROM users WHERE email='${email}'`)
         .then((user) =>{
            res.status(200).json({
              userId:user[0][0].idUsers,
              name:user[0][0].nom,
              token: jwt.sign(
                { userId:user[0][0].idUsers,
                  nom:user[0][0].nom,
                  pseudo:user[0][0].pseudo,
                  prenom:user[0][0].prenom,
                  photo:user[0][0].photo,
                  email:user[0][0].email 
                },
                "process.env.TOKEN",
                { expiresIn: '24h' }
              )
            })

          }).catch(error=>res.status(501).json({error:'utilisateur inconnu'}))
        })
        .catch(()=>{
          res.status(400).json({error})
        })
      
      } else {
        console.log(3)
        sql.query(`UPDATE users SET nom='${users.nom}',prenom='${users.prenom}',pseudo='${users.pseudo}' WHERE email='${users.email}'`)
        .then(()=>{
          sql.query(`SELECT * FROM users WHERE email='${email}'`)
         .then((user) =>{
            res.status(200).json({
              userId:user[0][0].idUsers,
              name:user[0][0].nom,
              token: jwt.sign(
                { userId:user[0][0].idUsers,
                  nom:user[0][0].nom,
                  pseudo:user[0][0].pseudo,
                  prenom:user[0][0].prenom,
                  photo:user[0][0].photo,
                  email:user[0][0].email 
                },
                "process.env.TOKEN",
                { expiresIn: '24h' }
              )
            })

          }).catch(error=>res.status(501).json({error:'utilisateur inconnu'}))
        })
        .catch(()=>{
          res.status(400).json({error})
        })
      }
    


   
}

exports.DeleteUser=(req,res,next)=>{
    const email=req.body.email
    sql.query(`SELECT * FROM users WHERE email='${email}'`)
    .then((user)=>{
      const filename = user[0][0].photo.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        sql.query(`DELETE FROM users WHERE email='${email}'`)
        .then(()=>{
          res.status(200).json({user:'utilisateur supprimer'})
        })
        .catch(()=>{
          res.status(400).json({error})
        })
      });
      
    }).catch(error=>res.status(501).json({error:'utilisateur inconnu'}))
   
}