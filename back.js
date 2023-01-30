const http = require("http");

const fs = require("fs");

const path = require("path");

let image = fs.readFileSync(path.join(__dirname, "image.json"), "utf-8");

image = JSON.parse(image)

const server = http.createServer((request, response) => {
 try{ 
      response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
      "Access-Control-Allow-Methods",
      "POST, GET, OPTIONS, PUT , DELETE"
    );
    response.setHeader("Content-Type", "application/json");
    response.setHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");

    if (request.method == "OPTIONS") return response.end();


  console.log(request.method, request.url);

  let url = request.url.split("/"); //[" " , "malurmot obhsi" "id "]

  if (request.method == "GET" && url[1] == "image") {
    let id = url[2];
    if (id) {
      response.end(JSON.stringify(image.find((user) => user.id == id)));
    } else response.end(JSON.stringify(image));
   } else if (request.method == "POST" && url[1] == "image") {
    let datas = "";
    request.on("data", (chunk) => {
      console.log(chunk);
      datas += chunk;
    });
    request.on("end", () => {
      console.log(datas);
      datas = JSON.parse(datas)
  

      let {title, url } = datas;
      
      if(!title || !url ){
             
        response.end("malumot toliq emas");
        return;
      }
      
      datas.id = image.length ? image[image.length - 1].id+1:1;

      image.push(datas);
      fs.writeFileSync( "image.json", JSON.stringify(image , null , 3));
      
     
      response.end("keldi");
    });
   } else if(request.method=="DELETE" && url[1] == "image"){

    if (id) {
      // response.end(JSON.stringify(image.find((user) => user.id == id)));

      let dt = ""

      id.remove
     
    }

    // let datas = "";
    // request.on("data", (chunk) => {
    //   console.log(chunk);
    //   datas += chunk;
    // });
    // request.on("end", () => {
    //   console.log(datas);
    //   datas = JSON.parse(datas)
  

    //   let {title, url } = datas;
      
    //   if(!title || !url ){
             
    //     response.end("malumot toliq emas");
    //     return;
    //   }
      
    //   datas.id = image.length ? image[image.length - 1].id+1:1; 

    //   image.push(datas);
    //   fs.writeFileSync( "image.json", JSON.stringify(image , null , 3));
      
     
    response.end("ketdi")

    //});



  }
}catch(err){
    response.end(err.message)
}
});

server.listen(9090, () => {
  console.log("server yondi");
});


