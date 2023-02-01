const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello there!!Iam creating continuous delivery pipeline. /In here i added manual approval./"Redoing on 2/1"'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
