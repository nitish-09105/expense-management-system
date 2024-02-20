const transactionModel = require("../models/transactionModel");

const getAllTransaction = async (req, res) => {
  try {
    const transactions = await transactionModel.find({ userid: req.body.userid });
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

const addTransaction = async (req, res) => {
  console.log(req.body);
  try {
    const newtransaction = new transactionModel(req.body);
    await newtransaction.save();
    res.status(200).send("Transaction successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

module.exports = { getAllTransaction, addTransaction };
