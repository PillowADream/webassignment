var tmplate;
var luyou = window.location.hash;

var items = document.querySelectorAll('.item');
for(var i = 0;i < items.length;i++){
    items[i].style.display = 'none';
}
var tab_list = document.querySelector('.tab_list');
var lis = tab_list.querySelectorAll('li');
for(var i = 0;i < lis.length;i++){
    lis[i].className = '';
}
//前端路由
switch(luyou){
    case "#0":
        items[0].style.display = 'block';
        lis[0].className = 'current';
        break;
    case "#1":
        items[1].style.display = 'block';
        lis[1].className = 'current';
        break;
    case "#2":
        items[2].style.display = 'block';
        lis[2].className = 'current';
        break;
    case "#3":
        items[3].style.display = 'block';
        lis[3].className = 'current';
        break;
    default:
        items[0].style.display = 'block';
        lis[0].className = 'current';
}


axios.get('./ejs/header.ejs').then(res => {
console.log(res.data);
tmplate = res.data;
var html = ejs.render(tmplate);
document.getElementById("head").innerHTML = html;
}).catch(err => {
console.log(err);
})