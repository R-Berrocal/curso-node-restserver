const {response,request}= require("express");

const getUsuarios=(req=request,res=response)=>{
        const {queen,apikey,nombre="No nombre",page=1,limit}= req.query;
        res.json({
            ok: true,
            msg: "get api-controlador",
            queen,
            apikey,
            nombre,
            page,
            limit
        });
}
const postUsuarios= (req, res) =>{

    const body= req.body;
    res.json({
        ok: true,
        msg: "post api-controlador", 
        body
    });
  }
const putUsuarios= (req, res) =>{
    const {usuariosId}=req.params;
    res.json({
        ok: true,
        msg: "put api-controlador",
        usuariosId
    });
  }
const deleteUsuarios= (req, res) =>{
    res.json({
        ok: true,
        msg: "delete api-controlador"
    });
  }
module.exports={
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
}