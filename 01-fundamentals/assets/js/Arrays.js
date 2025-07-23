// Initialize an array of game titles
let games = ['Zelda', 'Mario', 'Cod', 'NeoGame'];

// Log a message showing the number of games (note: "Pokemon" is unrelated here)
console.log('Pokemon', games.length); 

// Access the first and last elements in the array
let first = games[0]; 
let second = games[games.length - 1];

console.log(first, second);

// Loop through the array and log each element with its index and the full array
games.forEach((element, index, arr) => {
    console.log({ element, index, arr });
});

// Add a new game to the end of the array
games.push('Spiderman');
console.log(games);

// Add a new game to the beginning of the array
games.unshift('Batman');
console.log(games);

// Remove the last game from the array
let gameDeleted = games.pop(); // Removed 'Spidermann' argument – `pop()` doesn't take any arguments
console.log('Game deleted: ' + gameDeleted);
console.log(games);

// Remove two games starting from position 1
let pos = 1;
let deleted = games.splice(pos, 2);
console.log("Games deleted: " + deleted);

// Find the index of 'Cod' in the current array
let findGameIndex = games.indexOf('Cod');
console.log({ findGameIndex }); // Will return -1 if 'Cod' was deleted earlier
