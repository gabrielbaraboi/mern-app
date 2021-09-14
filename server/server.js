const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { port, app_url, api_url } = require('./config');

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
	cors({
		origin: app_url,
		credentials: true,
	})
);
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
	console.log(`Server starts on port ${port}`);
});