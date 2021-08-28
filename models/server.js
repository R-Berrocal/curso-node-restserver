const express = require('express')
const cors = require('cors')
class Server{
    constructor(){
        this.app = express();
        this.port= process.env.PORT
        this.usuariosPath= "/api/usuarios";
        //middleWares
        this.middleWares();
        //Rutas de mi aplicacion
        this.routes();
        
        
    } 

    middleWares(){
        //parseo y lectura del body
        this.app.use(express.json());
        //cors
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static("public"));

    }
   
    routes(){
        this.app.use(this.usuariosPath, require("../routes/user"));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("escuchando en el puerto",this.port);
        });
    }   
}

module.exports=Server;