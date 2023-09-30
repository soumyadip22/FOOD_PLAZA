const product= [

]
const categories= [...new set(product.map((item)=> {return item}))]

document.getElementById('search-box').addEventListener('keyup', (e)=>{
    const searchtext = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
     return(
        item.title.toLocaleLowerCase().includes(searchtext)
     )
    })
    displayItem(filterData)
});
const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var{image,title,price} = item;
        return(
            <div class = 'box'>
                <div class="img-box">
                    <img class='images' src='${image}'/>
                </div>
                <div class="bottom">
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button>Add To cart</button>

                </div>
            </div>
        )
    }).join('')
}
displayItem(categories);
#root{
    
}