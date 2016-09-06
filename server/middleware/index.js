const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const path = require('path')

const browserPath = path.join(__dirname, '../../browser/');
const npmPath = path.join(__dirname, '/../../node_modules');
const publicPath = path.join(__dirname, '/../../public')

	console.log(npmPath)
	router.use(express.static(npmPath));
	router.use(express.static(browserPath));
	router.use(express.static(publicPath));

	router.use(bodyParser.urlencoded({extended: true}));
	router.use(bodyParser.json())
	
module.exports = router 