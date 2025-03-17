const http = require ("http");
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);


server.listen(port, ()=>{
    console.log(`Server is Listening on port http://localhost:${port}`); 
});
//1:45:29