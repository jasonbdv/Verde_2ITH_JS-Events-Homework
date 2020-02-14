/*Name this external file gallery.js*/

function upDate(previewPic){

        var pic = previewPic.getAttribute("src");

        document.getElementById('image').style.backgroundImage = "url('" + pic + "')";
        document.getElementById('image').innerHTML = previewPic.alt;
     
    }
   
function unDo(){

        document.getElementById('image').style.backgroundImage = null;
        document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    }