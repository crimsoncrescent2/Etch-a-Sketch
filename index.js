const mainBody=document.querySelector("body");


//Creating a container for the button node and attaching it to the BODY
const buttonContainer=document.createElement("div");
mainBody.appendChild(buttonContainer);
buttonContainer.id="buttonContainer";

//Creating input button that asks for user input
const inputButton=document.createElement("button");
buttonContainer.appendChild(inputButton);
inputButton.id="inputButton";
inputButton.textContent="Set Grid Dimensions. 100 is the limit!"

//Creating main container for the ROWS
const container=document.createElement("div")
mainBody.appendChild(container)
container.id=`container`;

//Clicking on the button generates the grid.
inputButton.addEventListener(`click`, () => {
    let answer=prompt("Select a number of squares")

    //Removes previously generated grid.
    const divRows=document.querySelectorAll(".rows")
    divRows.forEach((divRow) => {
        divRow.classList.remove("rows")
    })
    const divSquares=document.querySelectorAll(".squares")
    divSquares.forEach((divSquare) => {
        divSquare.classList.remove("squares")
    })
    //Throw alert message if the user inputs a number higher than 100.
    if (answer>100){
        alert("The dimensions can't exceed 100 grid squares.");
    }

    //Creates a grid.
    else {
        let gridDimension=answer;

        //Set number of rows based on user's input
        for (let index=0; index<gridDimension; index++){
            let newRow=document.createElement("div")
            newRow.classList.add("rows");
            container.appendChild(newRow);

        //Set number of squares in a row based on user's input
        for (let index=0; index<gridDimension; index++){
            let newSquare=document.createElement("div")
            newSquare.classList.add("squares");
            newRow.appendChild(newSquare);
        }
        }

        //Change colour of the grid square when hovering.

        const newSquares=document.querySelectorAll(".squares")
        newSquares.forEach((newSquare) => {
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = `rgba(${randomColour()}, ${randomColour()}, ${randomColour()})`;
        })
        newSquare.addEventListener("mouseout", () => {
            newSquare.style.backgroundColor="";
        })
        
        //Generate a number from 1 to 255 to be used for RGB.
        function randomColour(){
            let randomNumber=Math.floor((Math.random()*255)+1);
            return randomNumber;
        }


        
    })
    }
    

})

//I didn't do the last optional task - darkening a grid square by 10% each time mouse hovers over it.




