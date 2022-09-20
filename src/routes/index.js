var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Calendar of Power',
    formElements: {
        eventTitle: "Event Title",
        eventStartDate: "Start Date",
        eventEndDate: "End Date",
        eventStartTime: "Start Time",
        eventEndTime: "End Time"
    }
    });
});

module.exports = router;
