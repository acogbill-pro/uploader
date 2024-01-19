"use strict";
// Copyright 2022 Twilio Inc.
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('./build/client'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve('./build/client/index.html'));
});
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
