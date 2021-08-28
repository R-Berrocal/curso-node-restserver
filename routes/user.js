const {Router}=require("express");
const router = Router();
const {getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios}=require("../controlers/user");
router.get('/',getUsuarios);
  router.post('/', postUsuarios);
  router.put('/:usuariosId', putUsuarios);
  router.delete('/',deleteUsuarios );

  module.exports=router;