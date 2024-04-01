const mainBody=document.querySelector("body");

const container=document.createElement("div")
mainBody.appendChild(container)
container.id=`container`;


const div1=document.createElement("div")
div1.classList.add("squares");
container.appendChild(div1);
//div1.classList.add("active")

const div2=document.createElement("div")
div2.classList.add("squares");
container.appendChild(div2);


const div3=document.createElement("div")
div3.classList.add("squares");
container.appendChild(div3);


const div4=document.createElement("div")
div4.classList.add("squares");
container.appendChild(div4);


const div5=document.createElement("div")
div5.classList.add("squares");
container.appendChild(div5);

const div6=document.createElement("div")
div6.classList.add("squares");
container.appendChild(div6);

const div7=document.createElement("div")
div7.classList.add("squares");
container.appendChild(div7);

const div8=document.createElement("div")
div8.classList.add("squares");
container.appendChild(div8);

const div9=document.createElement("div")
div9.classList.add("squares");
container.appendChild(div9);

const div10=document.createElement("div")
div10.classList.add("squares");
container.appendChild(div10);

const div111=document.createElement("div")
div111.classList.add("squares");
container.appendChild(div111);

const div12=document.createElement("div")
div12.classList.add("squares");
container.appendChild(div12);

const div13=document.createElement("div")
div13.classList.add("squares");
container.appendChild(div13);

const div14=document.createElement("div")
div14.classList.add("squares");
container.appendChild(div14);

const div15=document.createElement("div")
div15.classList.add("squares");
container.appendChild(div15);

const div16=document.createElement("div")
div16.classList.add("squares");
container.appendChild(div16);



const divSquares=document.querySelectorAll(".squares")
divSquares.forEach((divSquare) => {
    divSquare.addEventListener("mouseover", () => {
        divSquare.style.backgroundColor="greenyellow";
    })
    divSquare.addEventListener("mouseout", () => {
        divSquare.style.backgroundColor="";
    })
})



