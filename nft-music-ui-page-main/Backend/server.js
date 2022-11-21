const express = require('express');
const cors = require("cors");
const {
    routes
} = require('./routes/routes');
const app = express();
app.use(cors());
app.get("/", function (req, res) {
    res.send("node is running")
})
 app.use('/api/', routes)
if (module === require.main) {
   var server = app.listen(process.env.PORT || 5000, function () {
        var port = server.address().port;
        console.log("App listening on port %s", port);
    });
}

