console.log('JS is working'); 

////// DATATYPES //////
//For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:
// 1. Boolean // 
// 2. String // 
// 3. Array // 
// 4. Array // 
// 5. Object // 
// 6. Object // 

////////// COMMIT #1 ///////////// 


////// TAKE IT EASY ////////

// 1. Make an array that holds all of the colors of the rainbow. // 
const arr1 = ['blue', 'green', 'red', 'yellow', 'orange', 'purple']; 

// 2. Write code that will access "blue" from the rainbow array. // 
arr1[0]; 
console.log(arr1[0]);

// 3. Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

const aboutMe = {
  name: 'Alex Delgado',
  favoritefood: 'middle eastern',
  hobby: 'music production', 
  town: 'Chicago',
  datatype: 'Objects',
}

// 4. Write code that will access your hobby from the object that you just created. //
console.log(aboutMe['hobby']);


///////// COMMIT # 2 /////////// 

/////// CRAZY OBJECT //////////
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

// Use crazy Object to log the following: // 
// 1. 'omg my mouth is burning' // 
console.log(crazyObject['taco'][1]['salsa'][5]); 

// 2. "Pretty pretty prettayyyyy good"
console.log(crazyObject['larry']['quotes'][0]);

// 3. "Swearing at Larry and Jeff" // 
console.log(crazyObject['larry']['characters'][2]['favourtieHobby']); 

// 4. "Chicken Teriyaki Boyyyyyy" // 
console.log(crazyObject['larry']['nicknames'][1]); 

// 5. The object the contains the name 'funkhauser' // 
console.log(crazyObject['larry']['characters'][1]['name']);










