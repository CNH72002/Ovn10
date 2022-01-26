"use strict";
"use strict";
let result;

//Variables
const input = document.getElementById("myInput");
const button = document.getElementById("subBtn");
const output = document.getElementById("all");

//Event listoner
button.addEventListener('click', getData2, false);

//Convert to full link(url)

function createALink(obj) {

    let linkSection = "https://www.swapi.tech/api/people/";

    return linkSection + "?name=" + obj;
}



function ProcessInfo2() {

    result = createALink(input.value);
    
    return result;

 
    
}







function getData2() {

    let mylink = ProcessInfo2();

    fetch(mylink)
        .then(res => res.json())
        .then(data => {
        
            let myInformation2 = data.result;
           
            let information3 = myInformation2[0].properties;

            let finalResult = "Name: " + information3.name + ", Birth year: " + information3.birth_year + ", Eye color: " + information3.eye_color + ", Height: " + information3.height + ", Mass: " + information3.mass + ", Gender: " + information3.gender + ", Hair color: " + information3.hair_color + ", Skin color: " + information3.skin_color 


            output.innerHTML = finalResult;
            

        } )
        .catch(err => output.innerHTML = err);
    
    
}




/*function getData() {
   

    fetch(url)
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {

            let myInformation = JSON.parse(data);
            let myInformation2 = myInformation["results"];
            for (let i = 0; i < myInformation2.length; i++) {

               // console.log(myInformation2[i].name);
                myArray1.push(myInformation2[i].name);


            }

            myArray1.forEach(element => { console.log(element)
                
            });
           
              
            
        });
    
    
}*/