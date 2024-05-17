const express = require('express');
const path = require('path');  // Add this line to require the path module
const fs = require('fs');  // Also require the fs module

const app = express();
const port = 3000;

const root = path.join(__dirname, '../client/dist');
app.use(express.static(root));

app.get('/', (req, res) => {
    const indexPath = path.join(root, 'index.html');
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.status(404).send('index.html not found');
    }
});

app.get('/message', (req, res) => {
    res.send("Hello from our server!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
