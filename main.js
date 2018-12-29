(function(window, document){
    for(let i = 0; i < 3; i++){
        let br = document.createElement('div');
        for(let j = 0; j < 3; j++){
            let img = document.createElement('img');
            img.innerHTML = "&nbsp;&nbsp;&nbsp;A" + j + "-" + i;
            img.setAttribute("id","card-" + j + "-" + i) ;
            img.setAttribute("src","https://picsum.photos/200/300/?image=1" + i) ;
            img.style.display = "inline";
            img.style.width = "200px";
            img.style.height = "200px";
            img.style.padding = "10px";
            img.addEventListener('click', function(e){
                console.log("this",this.id)
            })
            //img.setAttribute("src",)
            document.getElementById("root").appendChild(img);
        }
        document.getElementById("root").appendChild(br);
    }
})(window, document)