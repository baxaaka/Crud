
let api = "http://localhost:9090"

const box = document.querySelector(".box");

const cards = document.querySelector(".cards")
const addButton = document.querySelector(".add");
const modal = document.querySelector(".modal-bg");
const exit = document.querySelector(".exit");
const send = document.querySelector(".send")


// let input =document.querySelector("input")



async function data() {
  const req = await fetch(`${api}/image`,{
  method: "GET",
  headers: {
    "accept": "application/json",
  },
  });
  
  const res = await req.json();



  allData(res);

}

data();
// -------------add card--------
 






function addCard(){
  let title=document.querySelector(".title").value.trim()
  let imageUrl=document.querySelector(".imageUrl").value.trim()
   fetch(`${api}/image` ,{
      method: "POST" ,
      headers:{
        "accept":"aplication/json"

      } ,
      body:JSON.stringify({
        title:title,
        url:imageUrl,
       
      }),
    });

   



  }
  // --------Send POST button --------

  
   
   send.addEventListener("click" , ()=>{
    addCard()
    modal.style.display = "none";


 
   });

   
// -----------add card end --------


// ---------Delete card --------

const del = document.getElementById("del")

// function deleteCard(){
//   fetch("http://localhost:9090/image${id}" , {

//    method: "DELETE" ,
//    headers:{ "accept" :"aplication/json"
//    },


//   } )
// }


if(del){
  del.addEventListener("click" , ()=>{
    // deleteCard()
    console.log("hello");
  })
}


  







// -------------------------------


function allData(rek=[]) {
  rek.forEach((e) => {
    let x = document.createElement("div", "cards");
    x.classList.add("cards");
    x.innerHTML = ` 

     
  
         <div class = "card">
          <img src=${e.url} alt="">

         <div class='title2'>
         <h5>${e.title}</h5>
         </div> 
         
         <button id="delete">
         <img src="./image1/delete.svg" alt="" width="25px id="del" />
        
           
         </button>

       

         
   
         
           
         
       
         </div>
         `;

    box.appendChild(x);

    console.log(x);
  });
}

// -------button modal



addButton.addEventListener("click", (e) => {
  modal.style.display = "block";
  
});

exit.addEventListener("click", (e) => {
  modal.style.display = "none";
});

window.addEventListener("wheel" , ()=>{
  modal.style.display = "none";
})


// ---button modal end -----







      

