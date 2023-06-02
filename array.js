let users = [
    {firstname:'indra',lastname:'sena',age:20},
    { firstname: 'Destratum', lastname: 'solutions', age: 19 },
    { firstname: 'taminadu', lastname: 'chennai', age: 18 },
    { firstname: 'AndhraPrdesh', lastname: 'AMARAVATHI', age: 18 }
]



console.log(users.filter(x => x.age<20).map((x) => x.firstname+" "+x.lastname));