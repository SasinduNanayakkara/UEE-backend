const mongoose = require("mongoose");

const InventorSchema = new mongoose.Schema({

    username : {
        require : true,
        type : String
    },
    email : {
        require : true,
        type : String
    },
    // password : {
    //     require : true,
    //     type : String
    // },
    NIC : {
        require : true,
        type : String
    },
    // NICImage : {
    //     require : true,
    //     type : String
    // },
    name : {
        require : true,
        type : String
    }

});

module.exports = mongoose.model("inventor", InventorSchema);