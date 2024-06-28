// Copyright (C) 2024 Javier Castorena
// 
// This file is part of ProjectRomanNumbers.
// 
// ProjectRomanNumbers is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// ProjectRomanNumbers is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with ProjectRomanNumbers.  If not, see <https://www.gnu.org/licenses/>.

const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

var romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

convertBtn.addEventListener("click", ()=>{
    validateUserInput();
});

number.addEventListener("keydown",(e) => {
    if(e.key === "Enter"){
        validateUserInput();
    }
})

const DecimalToRoman = (num) => {
    console.log(num);
    if (num === 0) {
        return '';
      }
    for (var i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
          return romanMatrix[i][1] + DecimalToRoman(num - romanMatrix[i][0]);
        }
        }
};

const validateUserInput = () => {
    const numberInput = parseInt(number.value);
    
    if(numberInput=== 0 || !numberInput){
       output.innerText = "Please enter a valid number"; 
    }
    else if(numberInput < 0 ){
       output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if(numberInput >= 4000){
       output.innerText = "Please enter a number less than or equal to 3999";
    }
    else {
        //DecimalToRoman(numberInput);
        output.innerText = DecimalToRoman(numberInput);
    }
}

