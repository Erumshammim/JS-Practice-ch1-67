//////Question#1//////


    // var images =  ["images/others/1.jpg","images/others/2.jpg","images/others/3.jpg"];
    // var modalElement = document.getElementById('modal-images');
 
    // for (let i = 0; i < images.length; i++) {
    //     var imageElement = document.createElement('img');
    //     // imageElement.classList.add('modal-content');
    //     modalElement.appendChild(imageElement);
    // }

//     const images = ["images/others/1.jpg","images/others/2.jpg","images/others/3.jpg"];
//     const objArray = document.querySelectorAll('.modal-img')

// for (let i = 0; i < objArray.length; i++) {
//   objArray[i].setAttribute('src', images[i])
// }

var images = document.querySelectorAll(".img-thumbnail");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i = 0; i < images.length; i++){
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// var modal = document.getElementById("myModal");
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");

// img.onclick = function()
// {
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }
// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() { 
//   modal.style.display = "none";
  
// }
