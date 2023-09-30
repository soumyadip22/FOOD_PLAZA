const product= [
    {
        id: 0  ,
        image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2G8vnSfHkGDftjJ5HE8uGhnabEaJrD1qv0Q&usqp=CAU'  ,
        title:  'Formal Table Setting'   ,
        price:     599
    },
    {
        id:   1  ,
        image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh41OR58XNg4ycANxrvd8F9vtMWUi0L1tvCg&usqp=CAU'  ,
        title:  'Casual Table Setting'   ,
        price:   599  
    },
    {
        id:  2   ,
        image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1rl-Sho6xa33NZsD3ijXLgMKkypHLjrMVQ&usqp=CAU'  ,
        title:   'Buffet Table'  ,
        price:  1100  
    },
    {
        id:  3   ,
        image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMFMe-8kvPR7D2RAGLO75XLsre0Zo2k3Img&usqp=CAU'  ,
        title: 'Breakfast Table Setting'    ,
        price:   800  
    },
 
]


document.getElementById('search-box').addEventListener('keyup', (e)=>{
    const searchText = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=>{
     return(
        item.title.toLocaleLowerCase().includes(searchText)
     )
    })
    displayItem(filterData)
});
const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var{image,title,price} = item;
        
    }).join('')
}

