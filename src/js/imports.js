//CSS
import "../scss/style.scss";
import "../css/main.css";
import "../fonts/stylesheet.css";
import "../css/-Fixed-Navbar-start-with-transparency-background-BS4-.css";
import "../index.html";

//JS

import "./-Fixed-Navbar-start-with-transparency-background-BS4-.js";
import "./gallery.js";
import "bootstrap";

//IMAGES
import logo from "../img/logo-thumb-black.svg";
const logodom = document.getElementById("logo");
logodom.src = logo;

import ellieheadshot from "../img/ellieheadshotcropped.jpg";
const ellieheadshotdom = document.getElementById("ellieheadshot");
ellieheadshotdom.src = ellieheadshot;

import magnumheadshot from "../img/magnumheadshotcropped.jpg";
const magnumheadshotdom = document.getElementById("magnumheadshot");
magnumheadshotdom.src = magnumheadshot;

import logoFooter from "../img/logoColor.png";
const footerLogo = document.getElementById("logoColor");
footerLogo.src = logoFooter;

import puppytemp from "../img/temppuppythumb.jpg";
const puppies = document.getElementsByClassName("puppytemp");
for (let puppy of puppies) {
	puppy.src = puppytemp;
}
//IMAGES - Gallery
let galleryArray = [];
import gallery1 from "../img/1.jpg";
galleryArray.push(gallery1);
import gallery2 from "../img/2.jpg";
galleryArray.push(gallery2);
import gallery3 from "../img/5.jpg";
galleryArray.push(gallery3);
import gallery4 from "../img/7.jpg";
galleryArray.push(gallery4);
import gallery5 from "../img/8.jpg";
galleryArray.push(gallery5);
import gallery6 from "../img/9.jpg";
galleryArray.push(gallery6);
import gallery7 from "../img/13.jpg";
galleryArray.push(gallery7);
import gallery8 from "../img/15.jpg";
galleryArray.push(gallery8);
import gallery9 from "../img/16.jpg";
galleryArray.push(gallery9);
import gallery10 from "../img/17.jpg";
galleryArray.push(gallery10);
import gallery11 from "../img/18.jpg";
galleryArray.push(gallery11);
import gallery12 from "../img/4.jpg";
galleryArray.push(gallery12);
console.log("galleryArray: ", galleryArray);
const thumbs = document.getElementsByClassName("galleryThumb");
for (let i = 0; i < thumbs.length; i++) {
	thumbs[i].src = galleryArray[i];
}

//FONTS - ICONS
import "@fortawesome/fontawesome-free/js/all.js";
