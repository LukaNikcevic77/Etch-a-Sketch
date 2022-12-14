const summer = ["#0dafae", "#008284", "#094b4b", "#e8c4be", "#ac8885"];
let pickedcolor = "#000000";
let isDown = false;
let summerize = false;
let divider = 4;



const graph = document.querySelector(".board");
const buttonsummer = document.getElementById("summerVibe");
const colorpicker = document.getElementById("colorpicker");
const sizemenu = document.getElementById("menu");



const div = document.createElement("div");



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
    
    changeGridSize();

})



changeGridSize();



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
            
            //#function in [] returns whole number from 0 to 3

        div.style.backgroundColor = summer[Math.floor(Math.random() * 4)];

    }

    else {

        div.style.backgroundColor = pickedcolor;
    
    }

})
    div.addEventListener("mouseover", e = () => {

    if(isDown == true){

    if(summerize == true){

            //#function in [] returns whole number from 0 to 3

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

    
       
        
        
   

    

