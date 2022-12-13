const div = document.createElement("div");
const summer = ["#0dafae", "#008284", "#094b4b", "#e8c4be", "#ac8885"];

const graph = document.querySelector(".board");
const button16 = document.getElementById("16squares");
const button32 = document.getElementById("32squares");
const button8 = document.getElementById("8squares");
const button100 = document.getElementById("100squares");
const buttonsummer = document.getElementById("summerVibe");
const colorpicker = document.getElementById("colorpicker");

let pickedcolor = "#000000";
let isDown = false;
let summerize = false;




let divider = 1;


    div.style.maxWidth = 700 / divider + "px";
    div.style.minWidth = 700 / divider + "px";
    div.style.maxHeight = 700 / divider + "px";
    div.style.minWidth = 700 / divider + "px";

        document.addEventListener("mousedown", e = () => {
            isDown = true;
        })

        document.addEventListener("mouseup", e = () => {
            isDown = false;
        })

        div.addEventListener("click", e = () => {

            div.style.backgroundColor = "black";
        })

       button16.addEventListener("click", e = () => {
        divider = 16;
        changeGridSize();
        
       })
       button32.addEventListener("click", e = () => {
        divider = 32;
        changeGridSize();
        
       })

       button8.addEventListener("click", e = () => {
        divider = 8;
        changeGridSize();
        
       })

       button100.addEventListener("click", e = () => {
        divider = 100;
        changeGridSize();
        
       })

       buttonsummer.addEventListener("click", e = () => {
        summerize = true;
        

       })

       colorpicker.addEventListener("change", (e) => {
        summerize = false;
        pickedcolor = e.target.value;

       } )

       
       


function changeGridSize(){
    while(graph.firstChild){
        graph.removeChild(graph.firstChild);
    }
    document.documentElement.style.setProperty("--grid-size", divider);
    
    let i = 0;
    
    for(let i = 0; i < divider * divider; i++){

        let div = document.createElement("div");
         div.setAttribute("draggable", false);
        
        div.addEventListener("mouseover", e = () => {

            if(isDown == true){
                if(summerize == true){
                    console.log(Math.floor(Math.random() * 4));
                    div.style.backgroundColor = summer[Math.floor(Math.random() * 4)];
                }
                else {
                    div.style.backgroundColor = pickedcolor;
                }
           
            }
            
        })
        graph.appendChild(div);
        
    }

}

    
        console.log(graph);
        graph.appendChild(div);
        
        
   

    

