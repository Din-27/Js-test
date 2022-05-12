/**
 * Direction:
 * Find all fields that have different value & must can detect all field dynamically
 *
 * Expected Result:
 * ['firstName', 'lastName']
 *
 */
const data = [
  { firstName: 'Adi', lastName: 'Nugroho', age: 25 },
  { firstName: 'Deddy', lastName: 'Dores', age: 25 },
];

function result(data) {
  // your code here
  data[0] = "firstName",
  data[1] = "lastName"
  return [data[0] + " " + "," + " " + data[1]]
  
}

console.log(result(data));
