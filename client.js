const net = require('net');

const conn = net.createConnection({ 
  host: 'localhost',
  port: 3000 
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('connect', () => {
  conn.write('unicorn.txt');
});


conn.on('data', (data) => {
  console.log('Server says: \n',data);
  conn.destroy();
});

