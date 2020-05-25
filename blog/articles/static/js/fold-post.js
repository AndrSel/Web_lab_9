let foldBtns = document.getElementsByClassName("fold-button");
for (let i = 0; i<foldBtns.length; i++){
foldBtns[i].addEventListener('mousedown', function(event) {

if(event.target.parentElement.className == "one-post"){
event.target.parentElement.className = "one-post-folded";
event.target.value = "Развернуть";
} else if(event.target.parentElement.className == "one-post-folded"){
event.target.parentElement.className = "one-post";
event.target.value = "Свернуть";
}

});

}