import {SearchBookFromApi} from "./SearchBook";
var bouton = document.querySelector("input");
bouton.addEventListener("click", clic);
 
var mon_form = document.getElementById("mon_form");
 
function clic(){
  bouton.style.display = "none";
  mon_form.style.visibility = "visible";
}
$( document ).ready(function()
{ SearchBookFromApi();
});