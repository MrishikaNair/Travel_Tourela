const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const jwt = require('jsonwebtoken');
const res = require("express/lib/response");
const axios = require("axios");

require('dotenv').config({ debug: true });

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.KEY,
    database: 'toureladb'
  }
);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: true}));

// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	let username = request.body.username;
	let password = request.body.password;

	// Ensure the input fields exists and are not empty
	if (username && password) {
		db.query('SELECT * FROM users WHERE username = ? AND password = ?',
      [username, password],
      function(error, results, fields) {
        if (error) throw error;
        // If account exists
        if (results.length === 1) {
          const user = results[0];
          const {userID, username} = user;
          const mytoken = jwt.sign({userID, username}, process.env.JWT_SECRET);

          response.json(mytoken);
        } else {
          response.send('Incorrect Username and/or Password!');
        }			
        response.end();
      });
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.post('/api/fetchPredictions', (req, res) => {
  const placeList = req.body.coordsList;

  console.log("placeList ",placeList);

  let arr = [];

  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${placeList[0].placeLat}%2C${placeList[i].placeLong}&radius=15000&type=restaurant&keyword=cruise&key=${process.env.REACT_APP_API_KEY}`);

  for(let i=0; i<placeList.length; i++){
    console.log("place  ",placeList[i]);

    try {
        // arr.push(await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${placeList[i].placeLat}%2C${placeList[i].placeLong}&radius=15000&type=restaurant&keyword=cruise&key=${process.env.REACT_APP_API_KEY}`)
          console.log(res);
        }
    catch (err){
        console.log(err)
    }
  }
  res.send(arr);
  res.end();
});



function checkAuthFromRequest(req, res) {
  const authHeader = req.get('Authorization');

  if (!authHeader && !authHeader.toLocaleLowerCase().startsWith('bearer ')) {
    res.status(401).json({message: "Missing or invalid token"});
    return null;
  }

  const token = authHeader.substring(7);
  const decodedToken = jwt.decode(token);

  if (!decodedToken) {
    res.status(401).json({message: "Bad token"});
    return null;
  }

  return decodedToken;
}

app.get("/api/usertrip", (req, res) => {
  const decodedToken = checkAuthFromRequest(req, res);
  if (!decodedToken) return;

  const { userID, username } = decodedToken;

  const sqlQuery = `SELECT * FROM user_trips WHERE userID = ${userID}`;

  db.query(sqlQuery, (err, result)=>{
    console.error(err);
    if(!err)
      res.json(result);
    else{
      res.send("check console for error msg");
    }
  })
})

app.post('/api/tripdata', (req, res) => {
  const decodedToken = checkAuthFromRequest(req, res);
  if (!decodedToken) return;

  const { userID, username } = decodedToken;

  // work with id
})
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
