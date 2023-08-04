const csv = require('csvtojson');
const User = require('../model/User')
const controller = {};
controller.importFile = async (req, res) => {
    try {
        csv.fromFile(req.file.path).then((response) => {
            console.log(response)
        });
        res.send({ status: 200, message: "imported" })
    }

    catch (e) { }
}

module.exports = controller