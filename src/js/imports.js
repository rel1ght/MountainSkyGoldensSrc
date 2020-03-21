//CSS
import "../scss/style.scss";
import "../css/main.css";
import "../fonts/stylesheet.css";
import "../css/-Fixed-Navbar-start-with-transparency-background-BS4-.css";
import "../index.html";

//JS
import "./-Fixed-Navbar-start-with-transparency-background-BS4-.js";
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

import puppytemp from "../img/temppuppythumb.jpg";
const puppies = document.getElementsByClassName("puppytemp");
for (let puppy of puppies) {
	puppy.src = puppytemp;
}

import "@fortawesome/fontawesome-free/js/all.js";
