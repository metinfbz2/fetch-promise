console.log("selam");

console.log(this);

console.log('#button1');

document.getElementById("myBtn").addEventListener("click", function () {
    document.getElementById("demo").innerHTML = "Hello World";
});


let el = document.getElementById("button1");
el.addEventListener("click", getTextFile);


    



    function getTextFile(){
    fetch("textfile.txt").then(function (res) {
        console.log(res);
        console.log(res.status);
        //console.log(res.text()); zaten okundu diyor
        return res.text();
        }).then(function(res){
        
            console.log(res);
        }).catch(function(err){
            console.log(err);
        }    
    );
    }



