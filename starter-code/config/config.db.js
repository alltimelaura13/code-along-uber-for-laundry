const DATABASE_NAME = "uber-laundry";
const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect(`mongodb://localhost/${DATABASE_NAME}`)
    .then((param)=> {
        const info = param.connections[0]
        console.log(`Conected to: http://${info.host}:${info.port   }`)
        
    })
    .catch((err)=> console.log (err));
