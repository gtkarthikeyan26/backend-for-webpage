const express = require('express')
const models = require('./models/sequelize')
const cors = require('cors')
const errorHandlingMiddleware = require("./middleware/errorHandling.middleware");


const corsOptions ={
	origin:'http://localhost:3000',
	methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
	credentials:true,
};



// body parser
const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions));
// Routes
app.use('/', require('./router/url'))
app.use(errorHandlingMiddleware);


// Connect to Mysql Database
global.dbConnection = models.sequelize

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`server started on port ${port}`)
})
