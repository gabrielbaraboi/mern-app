const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
	console.log(`Server starts on port ${port}`);
});