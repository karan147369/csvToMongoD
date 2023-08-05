const csv = require("csvtojson");
const User = require("../model/User");
const Agent = require('../model/Agent')
const Policy = require('../model/Policy')
const LOB = require('../model/LOB')
const Carrier = require('../model/Carrier')
const UserAccount = require('../model/UserAccount')

const controller = {};

controller.importFile = (req, res) => {
    const user = [];
    const agent = [];
    const policy = [];
    const lob = [];
    const carrier = [];
    const userAccount = [];

    try {

        csv()
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
                    agent.push({
                        agent: response[i].agent,
                        producer: response[i].producer,
                        policy_number: response[i].policy_number
                    });
                    policy.push({
                        policy_number: response[i].policy_number,
                        premium_amount: response[i].premium_amount,
                        policy_type: response[i].policy_type,
                        policy_start_date: response[i].policy_start_date,
                        policy_end_date: response[i].policy_end_date,
                        policy_mode: response[i].policy_mode
                    });
                    lob.push({
                        category_name: response[i].category_name,
                        company_name: response[i].company_name,
                        policy_number: response[i].policy_number,
                    });
                    carrier.push({
                        csr: response[i].csr,
                        policy_number: response[i].policy_number
                    });
                    userAccount.push({
                        account_name: response[i].account_name,
                        account_type: response[i].account_type,
                        firstname: response[i].firstname,
                        policy_number: response[i].policy_number,
                    })

                }
                const userResult = await User.insertMany(user);
                // if (result !== null) 
                // res.render

                const policyResult = await Policy.insertMany(policy);
                const agentResult = await Agent.insertMany(agent);
                const lobResult = await LOB.insertMany(lob);
                const userAccountResult = await UserAccount.insertMany(userAccount);
                const carrierResult = await Carrier.insertMany(carrier);

                if (userResult === null || policyResult === null || agentResult === null || lobResult === null || userAccountResult === null || carrierResult === null) {
                    res.render('index.ejs', { message: "Something went wrong" })
                }
                else {
                    res.render('index.ejs', { message: "Data added to Database" });
                }


            })
            .catch(err => console.log(err))
    } catch (e) { }
};

module.exports = controller;
