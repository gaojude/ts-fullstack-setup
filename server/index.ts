import express from 'express';
const index = express();
const port = 3001;

index.get('/', (req, res) => {
    res.send('hello world');
});

index.listen(port, () => {
    console.info('The server is running at 3001.');
});
