#!/usr/bin/env node

require('dotenv').config()
const axios = require('axios')

// Test data
const url = process.env.REST_URL
const token = process.env.REST_TOKEN
const guids = ['0906447B', '2431835P']
const eventnames = ['\\core\\event\\user_loggedin', '\\core\\event\\course_viewed', '\\core\\event\\dashboard_viewed']

// Send call
const data = new URLSearchParams();
guids.forEach((guid) => {
    data.append('guids[]', guid)
})
eventnames.forEach((eventname) => {
    data.append('eventnames[]', eventname)
})

let moodlep = axios.post(url + '?wstoken=' + token + '&wsfunction=local_guws_alarmbell_query&moodlewsrestformat=json', data)
moodlep.then(function(result) {
    console.log(result.data)
})
.catch(function(error) {
    console.log(error.message)
})

