const express = require('express');
const userCtrl = require('../../controllers').user;
const authentificate = require('../../middlewares/authentificate');
const { ctrlWrapper } = require('../../helpers');

const router = express.Router();

module.exports = router;
