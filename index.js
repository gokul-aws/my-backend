const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

