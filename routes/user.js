const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");
const { esRolevalido, esEmailExiste, idExiste } = require("../helpers/role-validator");
const router = Router();
const {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
} = require("../controlers/user");

router.get("/", getUsuarios);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "EL password es obligatorio").isLength({ min: 6 }),
    check("correo", "EL correo no es valido").isEmail(),
    //check("rol","No es un rol valido").isIn(["ADMIN_ROLE","USER_ROLE"]),
    check("correo").custom(esEmailExiste),
    check("rol").custom((rol) => esRolevalido(rol)),
    validarCampos,
  ],
  postUsuarios
);
router.put("/:usuariosId",[
  check("usuariosId","No es un id valido").isMongoId(),
  check("usuariosId").custom(idExiste),
  check("rol").custom((rol) => esRolevalido(rol)),
  validarCampos

], putUsuarios);
router.delete("/:usuariosId",[
  check("usuariosId","No es un id valido").isMongoId(),
  check("usuariosId").custom(idExiste),
  validarCampos
], deleteUsuarios);

module.exports = router;
