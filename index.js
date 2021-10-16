// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data')

// app object - module scaffolding
const app = {};

// configuration
// app.config = {
//     port: 3000,
// };

// data.create('test', 'newFile', {'name': 'Bangladesh', 'language': 'Bangla'}, (err) => {
//     console.log(`error was`, err);
// })

// data.read('test', 'newFile', (err, data) => {
//     console.log(err, data);
// })

// data.update('test', 'newFile', {'name': 'America', 'language': 'English'}, (err) => {
//     console.log(err);
// })

data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response

app.handleReqRes = handleReqRes;



// start the server
app.createServer();