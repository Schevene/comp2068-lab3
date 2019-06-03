var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

const persons = [
  {
  route: 'schevene',
  name: 'Schevene Singh',
  age: '25',
  birthPlace:'Mississauga, Ontario',
  birthday: 'February 1st',
  pronoun: 'He',
  city: 'Barrie',
  cohabitants: 'no one',
  hobby: 'play vidoe games',
  relation: 'GREAT!'
},
{
  route: 'lalita',
  name: 'Lalita Singh',
  age: '59',
  birthPlace:'Hauge, Guyana',
  birthday: 'October 31st',
  pronoun: 'She',
  city: 'West Grey',
  cohabitants: 'Satash',
  hobby: 'play Candy Crush',
  relation: `Schevene's Mom`
},
{
  route: 'satash',
  name: 'Satash Singh',
  age: '60',
  birthPlace:'Mahaica, Guyana',
  birthday: 'January 15th',
  pronoun: 'He',
  city: 'West Grey',
  cohabitants: 'Lalita',
  hobby: 'write',
  relation:  `Schevene's Dad`
},
{
  route: 'simi',
  name: 'Simi Singh-Maraj',
  age: '37',
  birthPlace:'Calgary, Alberta',
  birthday: 'May 31st',
  pronoun: 'She',
  city: 'Barrie',
  cohabitants: 'Jitin and Vasana',
  hobby: 'watch movies',
  relation:  `Schevene's Sister`
},
{
  route: 'amit',
  name: 'Amit Somaru',
  age: '39',
  birthPlace:'Georgetown, Guyana',
  birthday: 'September 20th',
  pronoun: 'he',
  city: 'Barrie',
  cohabitants: 'no one',
  hobby: 'watch Netflix',
  relation:  `Schevene's Uncle`
},
{
  route: 'jitin',
  name: 'Jitin Maraj',
  age: '38',
  birthPlace:'Port of Spain, Trinidad',
  birthday: 'October 8th',
  pronoun: 'He',
  city: 'Barrie',
  cohabitants: 'Simi and Vasana',
  hobby: 'play golf',
  relation:  `Schevene's Brother-in-Law`
},
{
  route: 'vasana',
  name: 'Vasana Maraj',
  age: '4',
  birthPlace:'Newmarket, Ontario',
  birthday: 'October 3rd',
  pronoun: 'She',
  city: 'Barrie',
  cohabitants: 'Simi and Jitin',
  hobby: 'be an absolute angel',
  relation: `Schevene's Niece`
}
]

router.get('/:route', (req, res, next) => {
  
  const person = persons.find(per => per.route === req.params.route);

  if (!person) return next(new Error('Cannot find person'));

  return res.render('person', person);
});

module.exports = router;