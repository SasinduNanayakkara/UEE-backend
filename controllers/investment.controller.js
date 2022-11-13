const investmentsModel = require("../models/investments.model");

const addInvestment = async (req,res) => {
    try {
        const {amount, date, paid, inventionId, investorId} = req.body;
        const newInvestment = await new investmentsModel({
            amount, date, paid, inventionId, investorId
        }).save();
        if (newInvestment) {
            res.status(200).json({newInvestment});
        }
    }
    catch(err) {
        res.status(500).json({error: err});
    }
}

const getInvestmentsByInvestor = async (req,res) => {
    try {
        const investorId = req.params.id;
        const investments = await investmentsModel.find({investorId: investorId});
        if (investments) {
            res.status(200).json({investments});
        }
    }
    catch(err) {
        res.status(500).json({error: err});
    }
}

const getOneInvestment = async (req,res) => {
    try {
        const investmentId = req.params.id;
        const investments = await investmentsModel.findOne({_id: investmentId});
        if (investments) {
            res.status(200).json({investments});
        }
    }
    catch(err) {
        res.status(500).json({error: err});
    }
}

const getInvestmentsByInvention = async (req,res) => {
    try {
        const inventionId = req.params.id;
        const investments = await investmentsModel.find({inventionId: inventionId});
        if (investments) {
            res.status(200).json({investments});
        }
    }
    catch(err) {
        res.status(500).json({error: err});
    }
}

const updateInvestment = async (req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const investment = await investmentsModel.findByIdAndUpdate(id, {data});
        if (investment) {
            res.status(200).json({investment});
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
}

const deleteInvestment = async (req,res) => {
    try {
        const id = req.params.id;
        const investment = await investmentsModel.findByIdAndDelete(id);
        if (investment) {
            res.status(200).json({investment});
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
}

module.exports = {
    addInvestment,
    getInvestmentsByInvention,
    getInvestmentsByInvestor,
    getOneInvestment,
    updateInvestment,
    deleteInvestment,
}