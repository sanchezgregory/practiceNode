var express = require('express');
var router = express.Router();

let personas = [
  {
    id:1,
    name:"Greg"
  },
  {
    id:2,
    name:"Ale"
  },
  {
    id:3,
    name:"Mari"
  }
]

router.get('/' , (req,res) => {
  res.render('index', {titulo:'hbs', mensaje:'HBS | template', personas})
})

module.exports = router;
