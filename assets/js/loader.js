/*!
    * KemzoDev Website v1.0
	* Youtube https://www.youtube.com/channel/UCtrj5jetptgcP3DxPxw6cdg?view_as=subscriber
    * Made by AzizJaber
	* dont touch please
*/
var KemzoDev;function myFunction() {KemzoDev = setTimeout(showPage, 4000);}function showPage() {document.getElementById("loader").style.display = "none";document.getElementById("kemzo-load").style.display = "block";}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}