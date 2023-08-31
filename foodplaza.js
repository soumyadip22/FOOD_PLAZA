
function sfs(){
    let div = document.getElementById('search-box').value.toUpperCase() ;
 

 let nav = document.getElementById('navbar');
 let ul = nav.getElementsByTagName('ul'); 
let li = nav.getElementsByTagName('li');
for(var i=0; i< li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    let textvalue = a.textContent || a.innerHTML;
    if(textvalue.toUpperCase().indexOf(div) > -1){
        li[i].style.display = '';
    }
    else{
        li[i].style.display = 'none';
    }
}
 
}

