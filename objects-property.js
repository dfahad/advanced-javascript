const students = [
    {id: 21, name: 'Omar Sany'},
    {id: 31, name: 'Mannaaaa'},
    {id: 41, name: 'Moyuri'},
    {id: 71, name: 'Deepjol'},
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>40)
const biggerOne = students.find( s => s.id>40)


console.log(names) // [ 'Omar Sany', 'Mannaaaa', 'Moyuri', 'Deepjol' ]
console.log(ids) // [ 21, 31, 41, 71 ]
console.log(names, ids) // [ 'Omar Sany', 'Mannaaaa', 'Moyuri', 'Deepjol' ] [ 21, 31, 41, 71 ] 
console.log(bigger); // [ { id: 41, name: 'Moyuri' }, { id: 71, name: 'Deepjol' } ]
console.log(biggerOne); // { id: 41, name: 'Moyuri' }