// Create web server

const express = require('express');
const app = express();
app.use(express.json());

app.post('/comment', (req, res) => {
    const comment = req.body.comment;
    if (!comment) {
        return res.status(400).send('No comment provided');
    }
    console.log('Received comment: ', comment);
    res.status(200).send('Comment received');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
