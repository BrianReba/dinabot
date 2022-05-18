const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const routes = require('./controllers/routes')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const whitelist= ['http://localhost:3000',
  'http://localhost:4000',
  'http://localhost:8080',
  'chrome-extension',
]

const corsOptions = {
  origin(origin, callback) {
    if (!origin || whitelist.some((urlPattern )=> origin.match(urlPattern))) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept']
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser());
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

routes(app)

app.use('*', (req, res, next) => {
    return res
      .status(200)
      .send('Dinabot Api')
})

module.exports = app