//    1. Сделать собственные примеры методов применяемых для массивов.

var array = ['HTML', 'CSS', 'JavaScript', 'Flex', 'Grid'];
var guns = ['Carabine Rifle','Assault Rifle','Special Rifle','Compact Rifle','SMG','Assault SMG','Micro SMG','Pump shotgun',];

console.log(array.join(', '));
console.log(array.reverse());
var array2 = array.concat(guns);
console.log(array2)
console.log(guns.slice(3, 6))
console.log(guns.slice(2, -2))
console.log(array.splice(3, 1, "Angular", "Bootstrap"))
console.log(guns.sort())
array.push('React')
console.log(array)
array.pop()
array.unshift("SCSS")
guns.shift()
console.log(array)
console.log(guns)



