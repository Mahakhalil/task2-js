async function getProduct(){

    const response = await fetch("https://dummyjson.com/products");
    const data =  await response.json();
    console.log(data);
    
 const result = data.products.map(function(ele){

return`
        <h2 class= product>${ele.title}</h2>
        <img src=${ele.thumbnail} />
        <p class=price> The price = ${ele.price}</p>

`
    }).join('');

    document.querySelector(".products").innerHTML=result;

}

getProduct();
