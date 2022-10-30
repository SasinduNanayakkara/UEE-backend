const adminModel = require("../models/admin.model");

const addAdmin = async (req, res) => {
    try {
        const {name, email, password, username} = req.body;
        const admin = new adminModel({
            name, email, password, username
        });

        const result = await admin.save();
        if(result) {
            res.status(200).json({result});
        }
    }
    catch(err) {
        res.status(500).json({error: err});
    }
}

const getOneAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await adminModel.findOne({_id: id});
        if(admin) {
            res.status(200).json({admin});
        }
    }
    catch(err) {
        res.status(500).json({error: err});
    }
}

const updateAdmin = async (req, res) => {
    try {

        const id = req.params.id;
        const data = req.body;
        const result = await adminModel.updateOne({_id: id}, data);
        if(result) {
            res.status(200).json({result});
        }
    }
    catch(err) {
        res.status(500).json({error: err});
    }
}

module.exports = {
    addAdmin,
    getOneAdmin,
    updateAdmin,
}
