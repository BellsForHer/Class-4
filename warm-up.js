findWaldo (['Stacy', 'Waldo', 'John']);
findWaldo(['Waldo', 'Jimmy', 'James', 'Jamie', 'Waldo']);
let newArr = [];

//My warm-up attempt
// function findWaldo (group) {
//     if (group === 'Waldo') {
//         return 'Found Waldo';
//     } else {
//         return 'Not Waldo';
//     }
//     };
//     console.log('Waldo');

//answer
function findWaldo (group) {
    for(let i=0; i < group.length; i++) {
        if (group[i]==='Waldo') {
            newArr.push("I found Waldo!");
        } else {
            newArr.push(group[i]);
        }

    }

    return newArr
}
