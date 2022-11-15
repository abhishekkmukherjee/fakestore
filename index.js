fetch('https://fakestoreapi.com/products?limit=10').then((data)=>{
   // console.log(data);
   return data.json();
}).then((completedata)=>{
    console.log(completedata);
    let data1 = "";
    completedata.map((values)=>{
        data1 += `   <div class="cards">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} alt="image" class="images">
        <p>${values.desription}</p>
        <p class=${values.category}>Category</p>
        <p class=${values.price}>Price</p>
    </div>  `
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})