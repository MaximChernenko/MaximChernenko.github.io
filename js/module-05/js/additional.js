'use strict';

//additional task

                                        
/**
* Получить массив всех скиллов всех пользователей (поле skills), при этом не должно быть
* повторяющихся скиллов и они должны быть отсортированы в алфавитном порядке
*/

const filerDuplicates = (acc, item) => {
  if(!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}

const getAllSkills = arr => {
  return arr.reduce((acc, item) => acc.concat(item.skills), [])
  .reduce(filerDuplicates, [])
  .sort();
};

console.log(getAllSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

                             
/**
* Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
*/

const sortByFriendsCount = (a, b) => {
  return a.friends.length - b.friends.length;
}

const getUserNamesSortedByFriendsCount = arr => {
  return arr.sort(sortByFriendsCount).map(item => item.name);
};

console.log(getUserNamesSortedByFriendsCount(users)); 
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
