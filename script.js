// Character and Worlds 

// Bellow creates the class for Characters

class Character {
    constructor(name, ocupation, age) {
        this.name = name;
        this.ocupation = ocupation;
        this.age = age;
    }
    addCharacter(character) {
        if(character instanceof Character) {
            this.characters.push(character);
        } else {
            throw new Error ('You can only add an instance of Characters. Argument is not a character: ${character}');
        }
    }
    describe() {
        resturn `${this.name} is ${this.age} years old. They ocupation is ${this.ocupation}.`;
    }
}


// Bellow creates the class for Worlds

class Worlds {
    constructor(landscape) {
        this.landscape = landscape;
    }
    addWorld(world) {
        if(world instanceof world) {
            this.world.push(world);
        } else {
            throw new Error ('You can only add an instance of Worlds. Argument is not a world: ${world}');
        }
    }
}

//This class creates the menu that also holds the characters array

class Menu {
    constructor() {
        this.characters = [];
        this.selectedCharacter = null;
        
    }
start() {
    let selection = this.displayMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1' :
                this.createCharacter();
                break;
            case '2' :
                this.viewCharacters();
                break;
            case '3' :
                this.deleteCharacter();
                break;
            case '4' : 
                this.displayCharacters();
                break;
            case '5' :
                this.viewWorlds();
                break;
                    default :
                    selection = 0;
        }
        selection = this.displayMainMenuOptions();
    }
    alert("See you again soon!"); // this alert will print to the console if  selection = 0
}
displayMainMenuOptions() { // this shows the main menu optioons on the app that lead to other menus
    return prompt(`
    0) exit
    1) create new character
    2) view a character
    3) delete a character
    4) display all characters
    5) view all worlds
    `);
}
showCharacterMenuOptions(characterinfo) { // this shows the character menu otions specific to the Character class created above on line 5
    return prompt(`
    0) back
    1) add a new character
    2) delete a character
    ---------------------
    ${characterinfo}
    `);
}
displayCharacters() { // this will display the characters created by the user and that are held by the characters array
    let characterString = '';
    for (let i = 0; i < this.characters.length; i++) {
        characterString += i+ ') ' + this.characters[i].name + '\n';
    }
    alert(characterString);
}
createCharacter() { // this will push the newly created character to the characters array
    let name = prompt('Enter name for new character:');
    this.characters.push(new Character(name));
}
viewCharacters() { // this will allow the user to select a character they have created and view the character's input information from the user.
    let index = prompt('Enter the index of the character you want to view.');
    if (index > -1 && index < this.characters.length) { 
        this.selectedCharacter = this.characters[index];
        let description = 'Character Name: ' + this.selectedCharacter.name + '\n';// this will display the selected character's names
        
        for (let i = 0; i < this.selectedCharacter.length; i++) { // this will display the selected character's information created by the user
            description += i + ') ' + this.selectedCharacter.characters[i].name + ' - ' + this.selectedCharacter.characters[i].age + ' - ' + this.selectedCharacter.characters[i].ocupation + '\n'; 
        }
    }
    let selection1 = this.showCharacterMenuOptions(description); // this will display two character menu options to either create a new character or to delete an existing character
    switch (selection1) { 
        
        case '1' :
            this.createCharacter();
            break;
            case '2' :
                this.deleteCharacter();
    }
}
deleteCharacter() { // this will delete an existing character
    let index;
    if (index > -1 && index < this.selectedCharacter.worlds.length) {
        this.slecetedCharacter.worlds.splice(index,1);
    }
}
viewWorlds() { 
    let index = prompt('Enter the index of the world you want to view.');
    if (index > -1 && index < this.world.length) { // this will display the landscape options for the user to chose which landscape they want their character to live in
        this.selectedWorld = this.worlds[index];
        let description = 'World Type: ' + this.selectedWorld.landscape + '\n';
        
        for (let i = 0; i < this.selectedWorld.length; i++) { // this will show the name of the selected world/landscape
            description += i + ') ' + this.selectedWorld.worlds[i].landscape + '\n'; 
        }
    }
    let selection1 = this.showCharacterMenuOptions(description);
    switch (selection1) {
        
        case '1' :
            this.viewWorlds();
            break;
            case '2' :
                this.Worlds["Dessert", "Tundra", "Mountain",
                "Seaside"];
    }

}
}

let menu = new Menu(); // <-- Instance
menu.start(); // this will start the entier menu app

