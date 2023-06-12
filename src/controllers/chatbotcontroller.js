require("dotenv").config();

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;
console.log(MY_VERIFY_TOKEN)
let test = (req, res) => {
    return res.send("Hello again");
}

let getwebhook = (req, res) =>{
    app.get('/webhook', (req, res) => {
        let VERIFY_TOKEN= MY_VERIFY_TOKEN;
        // Parse the query params
        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];
        // Check if a token and mode is in the query string of the request
        if (mode && token) {
            // Check the mode and token sent is correct
            if (mode === "subscribe" && token === MY_VERIFY_TOKEN) {
              // Respond with the challenge token from the request
              console.log("WEBHOOK_VERIFIED");
              res.status(200).send(challenge);
            } else {
              // Respond with '403 Forbidden' if verify tokens do not match
              res.sendStatus(403);
            }
            }

    });       

}

let postwebhook = (req, res) =>{
    
    let body = req.body;

    if (body.object === 'page'){

        body.entry.forEach(function(entry){
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);
        });

        res.status(200).send('EVENT_RECEIVED');
    } else {
        // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);

    }

 
}

// Handles messages events
function handleMessage(sender_psid, received_message) {

}

// Handles messaging_postbacks events
function handlePostback(sender_psid, received_postback) {

}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  
}

module.exports = {

    test: test,
    getwebhook: getwebhook,
    postwebhook: postwebhook,
}