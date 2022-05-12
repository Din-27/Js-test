/**
 * Direction:
 * Convert this data of profit per days from object into array of objects
 *
 * Expected Result:
 * [ { date: '12/25/21', profit: 400000 },
 *   { date: '12/26/21', profit: 200000 },
 *   { date: '12/27/21', profit: 450000 },
 *   { date: '12/28/21', profit: 500000 },
 *   { date: '12/29/21', profit: 420000 },
 *   { date: '12/30/21', profit: 420000 },
 *   { date: '12/31/21', profit: 400000 } ]
 */

const reports = { 
  '12/25/21': 400000,
	'12/26/21': 200000,
	'12/27/21': 450000,
	'12/28/21': 500000,
	'12/29/21': 420000,
	'12/30/21': 420000,
	'12/31/21': 700000 
}

function result(reports) {
  // Your Code Here
  return Object.entries(reports).map((e) => ( { [e[0]]: e[1] } ));
}
 
console.log(result(reports));
 