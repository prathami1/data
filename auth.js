exports.isPasswordAndUserMatch = (req, res, next) => {
   UserModel.findByEmail(req.body.email)
       .then((user)=>{
           if(!user[0]){
               res.status(404).send({});
           }else{
               let passwordFields = user[0].password.split('$');
               let salt = passwordFields[0];
               let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
               if (hash === passwordFields[1]) {
                   req.body = {
                       userId: user[0]._id,
                       email: user[0].email,
                       permissionLevel: user[0].permissionLevel,
                       provider: 'email',
                       name: user[0].firstName + ' ' + user[0].lastName,
                   };
                   return next();
               } else {
                   return res.status(400).send({errors: ['Invalid email or password']});
               }
           }
       });
};

exports.minimumPermissionLevelRequired = (required_permission_level) => {
   return (req, res, next) => {
       let user_permission_level = parseInt(req.jwt.permission_level);
       let user_id = req.jwt.user_id;
       if (user_permission_level & required_permission_level) {
           return next();
       } else {
           return res.status(403).send();
       }
   };
};
