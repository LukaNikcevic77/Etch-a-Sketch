const div = document.createElement("div");
const graph = document.querySelector(".board");
const button16 = document.getElementById("16squares");
let isDown = false;



const divider = 1;


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
        
        graph.removeChild(graph.lastChild);
        document.documentElement.style.setProperty("--grid-size", "16");
        graph.classList.add("grid16x16");
        let i = 0;
        
        for(let i = 0; i < 256; i++){

            let div = document.createElement("div");
             
            
            div.addEventListener("mouseover", e = () => {

                if(isDown == true){
                div.style.backgroundColor = "black";
                }
                
            })
            graph.appendChild(div);
            
        }
       })


    
        console.log(graph);
        graph.appendChild(div);
        
        
   

    

