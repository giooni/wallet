
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
const cont = document.getElementById("cont");

function creatediv(){
    for(let i=0; i<lst.length;i++){
        if(lst[i].name==="belt"){
            const a = document.createElement("a")
            a.href = "product.html"

            const div = document.createElement("div")
            div.setAttribute("class", "main")
            const newdiv = document.createElement("div")
            const p = document.createElement("p");
            p.innerHTML = lst[i].price
            newdiv.style.backgroundImage=lst[i].img
            newdiv.setAttribute("class", "box")

            newdiv.style.backgroundSize = "150%"
            div.style.width = "200px"
            div.style.height = "250px"
            newdiv.style.width = "100%"
            newdiv.style.height = "200px"
            
            newdiv.style.backgroundRepeat = "no-repeat"
            a.setAttribute("class", "txt")
            a.appendChild(newdiv)
            
            div.appendChild(a)
        
            div.appendChild(p)
            
           
            cont.appendChild(div)
            div.addEventListener("click", function() {
                
                const id = lst[i].id;
                
        
               
                localStorage.setItem("productId", id);
        
               
                window.location.href = "product.html";
              });
        }
    }
}
creatediv()