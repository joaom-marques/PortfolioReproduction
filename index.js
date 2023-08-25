const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3300, console.log('Listening at 3300'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.post('/form', (request, response) => {
    console.log('Data received!');
    console.log(request.body);

    response.json({
        status: 'success!',
        contactname: request.body.name,
    });
    const options = {
        flag: 'a',
    }
    const data = JSON.stringify(request.body, null, 2)
    fs.writeFile('stored/submissions.json', data + '\n', options, err => {
        if (err) throw err;
        console.log('Submission saved!')
    });
});