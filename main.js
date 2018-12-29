(function(window, document){
    const matrix = shuffleArray([11,12,13,14,15,16,11,12,13,14,15,16]);
    let count = 0;
    let temp1 = {id:"",data:""}, temp2 = {id:"",data:""};
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 4 ; j++){
            let img = document.createElement('img');
            img.setAttribute("id","card-" + i + j) ;
            img.setAttribute("class","card") ;
            img.setAttribute("src","default.png") ;
            img.setAttribute("data","https://picsum.photos/200/300/?image=1" + matrix[count++])
            img.addEventListener('click', flipCard)
            document.getElementById("root").appendChild(img);
        }
    }
    function flipCard(e){
        if(temp1.data === ""){
            // First click
            temp1.id = this.id;
            temp1.data = this.getAttribute("data");
            this.src = this.getAttribute("data");
        } else if(temp2.data === ""){
            // Second click
            temp2.id = this.id;
            temp2.data = this.getAttribute("data");
            this.src = this.getAttribute("data");
            setTimeout(() => {
                compare();
                noImage()
            }, 500);
        } 
    }
    function compare(){
        if(temp1.data === temp2.data){
            document.getElementById(temp1.id).className = "hidden";
            document.getElementById(temp2.id).className = "hidden";
        } else {
            document.getElementById(temp1.id).src = "default.png";
            document.getElementById(temp2.id).src = "default.png";
        }
        temp1 = {id:"",data:""};
        temp2 = {id:"",data:""};
    }
    function noImage() {
        const img = document.getElementsByClassName("card");
        if(!img.length){
            document.getElementById("root").innerHTML = "<h1 class='success'>Ha ganado!</h1><button id='refresh'>Reiniciar</button>";
            document.getElementById("root").addEventListener('click', function(){
                window.location.reload()
            })
        }
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
})(window, document)