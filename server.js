const net = require('net');
const fs = require('fs');

const server = net.createServer();

// server.js
// add this line after server is created, before listen is called
server.on('connection', (client) => {
  console.log('client connected!');
  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    console.log('Client is searching for the following file: ', data);
    let path = "./" + data;
    fs.access(data, (error) => {
      if(!error) {
        fs.readFile(path, (error, data) => {
          if(!error) {
            client.write(data);
          }
        });
      } else {
        client.write("That file does not exist!");
      
      };
    });
  });
});


server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
