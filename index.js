const express = require('express');
const app = express();

const { Reader } = require('thaismartcardreader.js');


const PORT = process.env.PORT;

const myReader = new Reader();

myReader.on('device-activated', () => {
    console.log('อุปกรณ์ถูกเปิดใช้งาน รอการเสียบบัตร...');
    isDeviceConnected = true;
});

// Middleware to parse JSON
app.use(express.json());

// Sample datagit 
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

// GET all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.express = app 