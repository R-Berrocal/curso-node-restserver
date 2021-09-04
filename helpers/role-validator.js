
const Role = require("../models/role");
const Usuario= require("../models/usuario");
const esRolevalido=async(role="")=>{
    const rolExist= await Role.findOne({rol:role});
    if(!rolExist){
      throw new Error(`El rol ${role} no existe en la DB`)
    }
}
const esEmailExiste=async(correo="")=>{
  
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
     throw new Error(`El email ${correo} ya existe en la DB`)
}
}
const idExiste=async(id)=>{
  
  const existeId = await Usuario.findById(id);
  if (!existeId) {
     throw new Error(`El id: ${id} no existe`)
}
}
module.exports={
    esRolevalido,
    esEmailExiste,
    idExiste
}