const mongoose = require('mongoose');
const User = require('../models/User');
const {merchantOneConnection} = require('../MerchantDB');

let createUser = async function (req, res) {
  try {
    const db = await merchantOneConnection.useDb(global.dbName);
    const User = await db.model("User");
    new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    }).save((error, result) => {
      if (error) {
        res.status(400).json({
          errCode: 4,
          errMsg: error,
          date: Date(Date.now()).toLocaleString()
        });
      } else if (result) {
        res.status(200).json({
          errCode: -1,
          errMsg: result,
          date: Date(Date.now()).toLocaleString()
        });
      }
    });
  } catch (Exception) {
    res.status(500).json({
      errCode: 450,
      errMsg: 'SERVER INTERNAL ERROR',
      date: Date(Date.now()).toLocaleString()
    });
  }
}

let updateUser = function (req, res) {
  
}

let getUsers = function (req, res) {
  User.find().lean().exec((error, result) => {
    if (error) {
      res.status(400).json({
        errCode: 4,
        errMsg: error,
        date: Date(Date.now()).toLocaleString()
      });
    } else if (result.length > 0) {
      res.status(200).json({
        errCode: -1,
        errMsg: result,
        date: Date(Date.now()).toLocaleString()
      });
    } else {
      res.status(404).json({
        errCode: 1280,
        errMsg: 'No any records are found',
        date: Date(Date.now()).toLocaleString()
      });
    }
  })
}

module.exports.createUser = createUser;
module.exports.updateUser = updateUser;
module.exports.getUsers = getUsers;