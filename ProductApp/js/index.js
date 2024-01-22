document.addEventListener("DOMContentLoaded", function(){

    getProducts();

})

const getProducts = () => {
    fetch("http://localhost:8080/products").then((Response) => {
        console.log(Response);
    }).catch((error) => {
    console.log(error);
    });
        
    }
    