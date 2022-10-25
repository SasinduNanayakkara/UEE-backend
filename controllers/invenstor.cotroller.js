const investorModel = require("../models/investor.model");

const addInvestor = async (req, res) => {
    try {
        const {
            name,
            username,
            email,
            password,
            phone,
            address,
            nic,
            nicImage,
            occupation,
            approvalStatus,
            investments,
        } = req.body;

        const encryptedPassword = await bcrypt.hash(password, 10);

        const newInvestor = new investorModel({
            name,
            username,
            email,
            password: encryptedPassword,
            phone,
            address,
            nic,
            nicImage,
            occupation,
            approvalStatus,
            investments,
        });
        const savedInvestor = await newInvestor.save();
        if (savedInvestor) {
            res.status(200).json(savedInvestor);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getInvestors = async (req,res) => {
    try {
        const investors = await investorModel.find();
        if (investors) {
            res.status(200).json(investors);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getOneInvestor = async (req, res) => {
    try {
        const id = req.params.id;
        const investor = await investorModel.findById(id);
        if (investor) {
            res.status(200).json(investor);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}
