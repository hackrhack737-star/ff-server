const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ff-config', (req, res) => {
    res.json({
        "status": "success",
        "game": "Free Fire India",
        "developer": "tzr papa",
        "features": {
            "silentAim": true,
            "espBox": true,
            "espLocation": true
        },
        "verAddr": "http://2.25.132.119:2223/aalto/false/",
        "fakeVersion": "1.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
