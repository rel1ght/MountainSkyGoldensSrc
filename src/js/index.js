import "babel-polyfill";
import "./imports.js";
//import instagramPosts from "./instagram-posts.js";
//const instagramPosts = require("./instagram-posts");

//const instaObj = require("instagram-basic-data-scraper-with-username");
//const fetch = require("node-fetch");
// get "https://api.instagram.com/oembed?url=https://www.instagram.com/p/fA9uwTtkSN/"
main();
async function instagrabber(url) {
	let response;
	await fetch(`https://api.instagram.com/oembed?url=${url}`)
		.then(res => res.json())
		.then(json => (response = json));
	return response.html;
}

async function main() {
	let url = "https://www.instagram.com/p/fA9uwTtkSN/";
	let html = await instagrabber(url);
	console.log("html1", html);
	document.getElementById("insta").innerHTML = html;
	window.instgrm.Embeds.process();
	console.log(await instaUserGrabber("ellies_golden_years"));
	//console.log(await instagramPosts("cats_of_instagram"));
}

async function instaUserGrabber(url) {
	let response;
	await fetch(`https://api.instagram.com/${url}/?__a=1`)
		.then(res => res.json())
		.then(json => (response = json));
	return response;
}
