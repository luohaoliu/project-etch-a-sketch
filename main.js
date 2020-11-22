
let userInput = 16;

document.documentElement.style.setProperty("--user-choice",`${userInput}`);


const container = document.querySelector("#container");

let gridItem = document.createElement("div");
gridItem.classList.add("grid-item");


let numberOfGrids = 0;


while (numberOfGrids < userInput*userInput) {
    
    container.appendChild(gridItem.cloneNode(true));
    numberOfGrids++;
    
}


container.addEventListener('mouseover', function (event) {
        return event.target.classList.add('my-color-class');
    }
)


function resetOption() {

    let colorClassElements =  document.querySelectorAll(".my-color-class");
    colorClassElements.forEach(function(colorClassElement) {
        colorClassElement.classList.remove("my-color-class");
    }); 

    let gridItemElements =  document.querySelectorAll("div.grid-item");
    gridItemElements.forEach(function(gridItemElement) {
        gridItemElement.remove("div");
    }); 

    
    let newInput = Number(prompt("Hi! Choose a number for the size of sketchpad."));
    
    while (newInput > 100 || newInput == 0) {
        alert("Please choose a number in between 1 and 100.");
        newInput = Number(prompt("Hi! Choose a number for the size of sketchpad."));
    }
    
    document.documentElement.style.setProperty("--user-choice",`${newInput}`); 
   
    const container = document.querySelector("#container");

    let gridItem = document.createElement("div");
    
    gridItem.classList.add("grid-item");
    


    let numberOfGrids = 0;

    while (numberOfGrids < newInput*newInput) {
        
        
        container.appendChild(gridItem.cloneNode(true));
        numberOfGrids++;
        
    }

    return document.documentElement.style.setProperty("--grid-item-background-color",`blue`);

}


function clearColorOption() {
   let items =  document.querySelectorAll("div.grid-item, #container");
   items.forEach(function(item) {
   item.classList.remove("my-color-class");
   });

}

function randomColorOption() {

    let items =  document.querySelectorAll("div.grid-item, #container");
    items.forEach(function(item) {
    item.classList.remove("my-color-class");
    });

    function random_rgb() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    }
    
    let randomColor = random_rgb();
    return document.documentElement.style.setProperty("--grid-item-background-color",`${randomColor}`);

}


