const express = require('express');
const PORT = 8000;
const app = express();
const morgan = require('morgan') 
const helmet = require('helmet')

// Helmet will set various HTTP headers to help protect your app
// Morgan logs through the terminal whenever an event is triggered
app.use(helmet(), morgan('tiny'))

const apiRoutes = require("./routes/apiRoutes");
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

module.exports = app;