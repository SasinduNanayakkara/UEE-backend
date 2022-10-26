const mongoose = require("mongoose");

const InventorSchema = new mongoose.Schema({

    username:{
        require : true,
        type : String
    },
    username:{
        require : true,
        type : String
    }

});

module.exports = mongoose.model("inventor", InventorSchema);