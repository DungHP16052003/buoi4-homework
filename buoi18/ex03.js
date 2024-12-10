function sum(a,b){
    let result = a+b;
    return result;

}
function welcome(username = ""){
    console.log(`xin chao ban ${username}`);
}
welcome('dung');

const cart = {
    userId: "123",
    product: [],
    total: function(){

    },
}
cart.total();

function muanha(){
    console.log("muanha");
}
function kiemtien(callback){
    console.log("kiemtien");
    callback();
}
function muaxe(){
    console.log("muaxe")
}
kiemtien(muanha);
kiemtien(muaxe)