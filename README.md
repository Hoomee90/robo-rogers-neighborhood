# 

#### By **Samantha Callie**

#### 

## Technologies Used

* HTML
* CSS
* BootStrap
* JS

## Description



## Setup/Installation Requirements

* Clone repository
* Navigate to the top level of the directory
* Open index.html in your browser

## Known Bugs

* 

## License

[GNU GPLv3](https://choosealicense.com/licenses/agpl-3.0/)

Copyright (c) 2023 Samantha Callie

## Pseudocode Tests Used During Development

Describe: rangeConverter()

Test: "It should return null if given an input of zero or a non-integer"
Code:
const num = 0;
rangeConverter(num);
Expected Output: null

Test: "It should return an array of length num with values equal to their indices"
Code:
const num = 0;
rangeConverter(num);
Expected Output: ["0"]

Test: "It should return an array with unique strings for values containing 1, 2 and 3"
Code:
const num = 5;
rangeConverter(num);
Expected Output: [0, "Beep!", "Boop", "Won't you be my neighbor?", 4, 5]

Test: "It should return the strings with the correct order of importance (1 < 2 < 3)"
Code:
const num = 13;
rangeConverter(num);
Expected Output: ['0', 'Beep!', 'Boop!', "Won't you be my neighbor?", '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?"]

Test: "It should return the inputted name at the the end of the neighbor question value replacement"
Code:
const num = 13;
const name = "Samantha"
rangeConverter(num, name);
Expected Output: ['0', 'Beep!', 'Boop!', "Won't you be my neighbor, Samantha?", '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor, Samantha?"]