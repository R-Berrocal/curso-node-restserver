const { response, request, json } = require("express");

const Usuario = require("../models/usuario");
const bcrytpjs = require("bcryptjs");

const getUsuarios = async (req = request, res = response) => {

  const { limit = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).limit(Number(limit)).skip(Number(desde)),
  ]);

  res.json({
    total,
    usuarios
  });
};
const postUsuarios = async (req = request, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //Encriptacion de la contraseña
  const salt = bcrytpjs.genSaltSync();
  usuario.password = bcrytpjs.hashSync(password, salt);

  //Guardar en DB
  await usuario.save();
  res.json({
    usuario,
  });
};
const putUsuarios = async (req, res) => {
  const { usuariosId } = req.params;

  const { _id, password, google, correo, ...resto } = req.body;

  // validar contra base de datos
  if (password) {
    //encriptar base de datos
    const salt = bcrytpjs.genSaltSync();
    resto.password = bcrytpjs.hashSync(password, salt);
  }
  const usuario = await Usuario.findByIdAndUpdate(usuariosId, resto);
  res.json({
    usuario,
  });
};
const deleteUsuarios =async (req, res) => {
  
  const {usuariosId}= req.params;
  // const eliminar = await Usuario.findByIdAndDelete(usuariosId);
  const eliminar = await Usuario.findByIdAndUpdate(usuariosId, {estado: false});
  res.json(eliminar);
};
module.exports = {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
};
