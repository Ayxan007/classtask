let name = "Ayxan";
let firstNameLetter = {};
name = name.toUpperCase();

for (let i = 0; i < name.length; i++) {
    let letter = name[i];
    if (firstNameLetter[letter]) {
        firstNameLetter[letter]++;
    } else {
        firstNameLetter[letter] = 1;
    }
}

for (let letter in firstNameLetter) {
    console.log(`${letter}: ${firstNameLetter[letter]}`);
}
