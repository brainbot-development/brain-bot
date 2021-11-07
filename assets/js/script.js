/*!
    * KemzoDev Website v1.0
	* Youtube https://www.youtube.com/channel/UCtrj5jetptgcP3DxPxw6cdg?view_as=subscriber
    * Made by AzizJaber
	* dont touch please
*/
function webscroll(cname) {var temp = cname.replace("#", "");const kemzodev = document.getElementById(temp);kemzodev.scrollIntoView({behavior: "smooth", inline: "nearest"});history.pushState(null, null, `#${temp}`)}window.scroll({top: 2500, left: 0, behavior: 'smooth'});window.scrollBy({ top: 100, left: 0, behavior: 'smooth' });document.querySelector('.hello').scrollIntoView({ behavior: 'smooth' });