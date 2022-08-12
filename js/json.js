// java script object notation-JSON
// JSON 
const user = { id: 11, name: 'gorib', job: 'actor' };
const stringified = JSON.stringify(user)

//console.log(user)
//console.log(stringified); 

const obj = {
    name: 'Json Store',
    address: 'Baily Road',
    product: ['laptop', 'mobile', 'watch'],
    owner: {
        name: 'Json',
        age: 49,
        profession: 'besnissman'
    },
    isExpensive: false
}
const makeString = JSON.stringify(obj);
const makeObj = JSON.parse(makeString);
console.log(makeObj);