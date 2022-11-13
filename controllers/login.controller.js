const investorModel = require("../models/investor.model");
const organizationModel = require("../models/organization.model");
const inventorModel = require("../models/inventor");
const adminModel = require("../models/admin.model");

const login = async (req, res, next) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const role = req.body.role;

        if (role === "investor") {
            const investor = await investorModel.findOne({ username: username });
            if (!investor) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            if (investor.password !== password) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            res.status(200).json({
                message: "Auth successful",
                investor: investor,
            });
        }

        if (role === "organization") {
            const org = await organizationModel.findOne({ username: username });
            if (!org) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            if (org.password !== password) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            res.status(200).json({
                message: "Auth successful",
                org: org,
            });
        }

        if (role === "admin") {
            const admin = await adminModel.findOne({ username: username });
            if (!admin) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            if (admin.password !== password) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            res.status(200).json({
                message: "Auth successful",
                admin: admin,
            });
        }

        if (role === "inventor") {
            const inventor = await inventorModel.findOne({ username: username });
            if (!inventor) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            if (inventor.password !== password) {
                return res.status(401).json({
                    message: "Auth failed",
                });
            }
            res.status(200).json({
                message: "Auth successful",
                inventor: inventor,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    login,
}