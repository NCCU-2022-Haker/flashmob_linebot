var menu = document.getElementById("menu");
var price = document.getElementById("price");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

btn.addEventListener("click", function(){
    list.innerHTML += `
    <div class="article">
    <p>${menu.value}, ${price.value}元</p>
    </div><hr/>
    `;

    title.value = "";
    content.value = "";
})