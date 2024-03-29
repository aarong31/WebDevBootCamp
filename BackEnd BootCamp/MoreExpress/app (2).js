var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("home");
});

app.get("/fallin/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("fallin", {thingVar: thing});
});

app.get("/posts", function(req,res){
	var posts = [
	{title: "Post 1", author: "Susy"},
	{title: "My Pet Cat", author: "Charlie"},
	{title: "I cant believe it", author: "Me"}];
	
	res.render("posts", {posts:posts});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server starting");
});