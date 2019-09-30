const express = require('express');
const PORT = 8000;
const app = express();

const apiRoutes = require("./routes/apiRoutes");
app.use('/api', apiRoutes);

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirnamem,"./client/build/index.html"))
// })

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})