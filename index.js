//Modules
const express = require('express');
//
const axios = require('axios');

//create app
const app = express();

//create a PORT
const PORT = process.env.PORT || 3000;

//Create a home route
app.get('/', (req, res) => {
    
    //Access API endpoint from GITHUB
    axios.get('https://api.github.com/users/alexjbustillos')
    .then(response => {
        //Print inside of terminal
        // console.log(response.data);
        const alexObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(alexObject);
        res.send(alexObject);
    });
});

//Create a route for Angel
app.get('/angel', (req, res) => {
    
    //Access API endpoint from GITHUB
    axios.get('https://api.github.com/users/abarranco95')
    .then(response => {
        //Print inside of terminal
        // console.log(response.data);
        const angelObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(angelObject);
        res.send(angelObject);
    });
});

//Create a route for ruben
app.get('/ruben', (req, res) => {
    
    //Access API endpoint from GITHUB
    axios.get('https://api.github.com/users/anonyymous1')
    .then(response => {
        //Print inside of terminal
        // console.log(response.data);
        const rubenObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(rubenObject);
        res.send(rubenObject);
    });
});

//Create a route for carolina
app.get('/carolina', (req, res) => {
    
    //Access API endpoint from GITHUB
    axios.get('https://api.github.com/users/canourrea23')
    .then(response => {
        //Print inside of terminal
        // console.log(response.data);
        const carolinaObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(carolinaObject);
        res.send(carolinaObject);
    });
});

//Create a route for paul
app.get('/paul', (req, res) => {
    
    //Access API endpoint from GITHUB
    axios.get('https://api.github.com/users/codebypaul')
    .then(response => {
        //Print inside of terminal
        // console.log(response.data);
        const paulObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(paulObject);
        res.send(paulObject);
    });
});

//Create a route for dexter
app.get('/dexter', (req, res) => {
    
    //Access API endpoint from GITHUB
    axios.get('https://api.github.com/users/dextermichael')
    .then(response => {
        //Print inside of terminal
        // console.log(response.data);
        const dexterObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(dexterObject);
        res.send(dexterObject);
    });
});

//listen on a port
app.listen(PORT, () => {
    console.log(`You're vibing to the sounds on PORT ${PORT}🎧 `);
});
