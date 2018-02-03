const User = require('../models/user');
const bcrypt = require('bcrypt');
require('mongoose');



module.exports.signup = ((req, res, next) => {
    let errorMessage = '';
    res.render('auth/signup', {
        errorMessage: errorMessage
    })
})
module.exports.doSignup = ((req, res, next) => {
    const {name, email, password} = req.body;
    if (email) {
        User.findOne({email})
        .then((user)=>{
            if(user){
                res.render('auth/signup', {
                    errorMessage: 'El usuario ya existe',
                });
            }
            if(!name) {
                res.render('auth/signup', {
                    errorMessage: 'Nombre requerido',
                });
            }
            if (!password || password.length < 5) {
                res.render('auth/signup', {
                    errorMessage: 'La contraseña tiene que ser como mínimo de 5 carácteres.',
                });
            }
            
            const newUser = new User({name, email, password})
            newUser.save()
                .then((laura) => {
                    console.log('Entro en result de .save() => ')
                    console.log(laura)
                    res.redirect('/login')
                })
                .catch((error) => {
                    console.log(error)
                });
        })
        .catch((error)=>{
            console.log("Error");
            
        })
    } else {
        res.render('auth/signup', {
            errorMessage: '¿En serio te quieres registrar sin email? Pon un correo anda!!',
        });
    }
})