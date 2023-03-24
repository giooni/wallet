
const lst = [
    
    {
        name:"wallet",
        prname:"wallet",
        prodid: "mv117n",       
        img: "url('img/wal1.jpg')",
        price: "100 Gel",
        id: 1
    },
    {
        name:"wallet",
        prname:"wallet",
        prodid: "mv113n", 
        img: "url('img/wal2.jpg')",
        price: "100 Gel",
        id: 2
    },
    {
        name:"wallet",
        prname:"wallet",
        prodid: "mv117n", 
        img: "url('img/wal3.jpg')",
        price: "100 Gel",
        id: 3
    },
    {
        name:"wallet",
        prname:"wallet",
        prodid: "mv131n", 
        img: "url('img/wal4.jpg')",
        price: "100 Gel",
        id: 4
    },
    {
        name:"wallet",
        prname:"wallet",
        prodid: "mv113n", 
        img: "url('img/wal5.jpg')",
        price: "100 Gel",
        id: 5
    },
    {
        name:"wallet",
        prname:"wallet",
        prodid: "mv118n", 
        img: "url('img/wal6.jpg')",
        price: "100 Gel",
        id: 6
    },
    {
        name:"wallet",
        prname:"wallet",
        prodid: "mv127n", 
        img: "url('img/wal7.jpg')",
        price: "100 Gel",
        id: 7
    },
    {
        name:"bag",
        prname:"bag",
        prodid: "mc127n",
        img: "url('img/bag1.jpg')",
        price: "100 Gel",
        id: 8
    }
    
]
const productId = localStorage.getItem("productId");
prodid = +productId;
const bigdiv = document.querySelector(".prodpg")
const pr = document.getElementById("prod");
const pric = document.getElementById("pr")
const productid = document.getElementById("prodid");
const prname = document.getElementById("prname")
function createback(){
    for(let i =0; i<lst.length; i++){
        if(lst[i].id ===prodid){
            pr.style.backgroundImage = lst[i].img
            pr.style.backgroundSize = "150%";
            pr.style.backgroundRepeat = "no-repeat"
            pric.innerText = `price : ${lst[i].price}`
            productid.innerText = `id : ${lst[i].prodid}`;
            prname.innerText = `product : ${lst[i].prname}`

        }
    }
}
createback()
