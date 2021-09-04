const {Schema,model}=require("mongoose")

const schemaRole=Schema({
    rol:{
        type: String,
        required: [true,"El rol es obligatorio"]
    }
});

module.exports=model("Role",schemaRole);
