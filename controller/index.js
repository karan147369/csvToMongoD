const csv = require("csvtojson");
const User = require("../model/User");
const controller = {};

controller.importFile = async (req, res) => {
  const user = [];
  try {
    const response = await csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (let i = 0; i < response.length; i++) {
          user.push({
            firstname: response[i].firstname,
            city: response[i].city,
            phone: response[i].phone,
            policy_number: response[i].policy_number,
            type: response[i].type,
          });
        }
        const result = await User.insertMany(user);
        console.log(result);
        res.send({ status: 200 });
      });
  } catch (e) {}
};

module.exports = controller;
