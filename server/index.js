import express from 'express';
const port = 8000;
const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get("/", (req, res) => {
    res.json({ message: 'PrepBuddy Server is running!' });
})