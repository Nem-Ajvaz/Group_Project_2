const {io} = require("../../server.js");

io.on("message", (data) => {
    console.log('data', data)
})