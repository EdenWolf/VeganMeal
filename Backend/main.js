const http = require("http");
var fs = require("fs");

const files = fs.readdirSync("../Create Database/JSON Files/RestaurantsData/");

const dataArray = files.map((fileName) => {
  try {
    const file = fs.readFileSync(
      `../Create Database/JSON Files/RestaurantsData/${fileName}`
    );
    return JSON.parse(file);
  } catch (error) {
    console.log(error);
    return "";
  }
});

http
  .createServer((request, response) => {
    if (request.method === "GET" && request.url === "/data") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify(dataArray));
      response.end(); //end the response
    } else {
      response.statusCode = 404;
      response.end();
    }
  })
  .listen(8080);
