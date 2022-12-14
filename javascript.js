const div = document.createElement("div");
const summer = ["#0dafae", "#008284", "#094b4b", "#e8c4be", "#ac8885"];

const graph = document.querySelector(".board");
const buttonsummer = document.getElementById("summerVibe");
const colorpicker = document.getElementById("colorpicker");
const sizemenu = document.getElementById("menu");


let pickedcolor = "#000000";
let isDown = false;
let summerize = false;




let divider = 4;


    div.style.maxWidth = 700 / divider + "px";
    div.style.minWidth = 700 / divider + "px";
    div.style.maxHeight = 700 / divider + "px";
    div.style.minWidth = 700 / divider + "px";

changeGridSize();

        document.addEventListener("mousedown", e = () => {
            isDown = true;
        })

        document.addEventListener("mouseup", e = () => {
            isDown = false;
        })

        

       buttonsummer.addEventListener("click", e = () => {
        summerize = true;
        

       })

       colorpicker.addEventListener("change", (e) => {
        summerize = false;
        pickedcolor = e.target.value;

       } )

       sizemenu.addEventListener("change", (e) => {
        divider = e.target.value;
        console.log(e.target.value);
        changeGridSize();
       })

       
       


function changeGridSize(){
    while(graph.firstChild){
        graph.removeChild(graph.firstChild);
    }
    document.documentElement.style.setProperty("--grid-size", divider);
    
    let i = 0;
    
    for(let i = 0; i < divider * divider; i++){

        let div = document.createElement("div");
         div.setAttribute("draggable", false);
        div.addEventListener("click", e  = () => {
            if(summerize == true){
                console.log(Math.floor(Math.random() * 4));
                    div.style.backgroundColor = summer[Math.floor(Math.random() * 4)];
            }
            else {
                div.style.backgroundColor = pickedcolor;
            }
        })
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

    
       
        
        
   

    

