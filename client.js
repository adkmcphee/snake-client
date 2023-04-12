const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (msg) => {
    console.log(msg);
  })

  conn.on('connect', () => {
    console.log('Successfully connected to the game server')
    conn.write("Name: AMC");
    // conn.write("Move: up");

  })



  return conn;
};

module.exports = { connect };