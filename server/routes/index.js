const path = require('path')
const router = require('express').Router();

const indexHtmlPath = path.join(__dirname,'../../browser/index.html')
router.get('/*', function (req, res, next) {
	res.sendFile(indexHtmlPath)
})

module.exports = router;