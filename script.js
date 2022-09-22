function generate(){

  var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var thumbnail = document.getElementById("thumbnail");
var url = `https://roproxy.valiantwind.repl.co/thumbnails/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var generateButton = document.getElementById("submit");;
	
  axios.get(url)
  .then(response => {

    // access parsed JSON response data using response.data field
    // imageUrl = response.data.data[0].imageUrl

    // console.log(response.data.data[0].imageUrl)

		console.log(response.json())

   // thumbnail.src = imageUrl
		
  })
  .catch(error => {

    generateButton.innerHTML = "Invalid ID!"

    setTimeout(() => {
  generateButton.innerHTML = "Generate Thumbnail"
}, 3000);
    console.log(error)
    
    
  })

  }

function copyUrl(){
  var userId = document.getElementById("inputUserId").value;
  var userId = document.get
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var url = `https://thumbnails.roproxy.com/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var copyButton = document.getElementById("copyUrlButton")



  
  axios.get(url)
  .then(response => {
    
    imageUrl = response.data.data[0].imageUrl
    navigator.clipboard.writeText("https://google.com");

    copyButton.innerHTML = "Copied!"

    setTimeout(() => {
  copyButton.innerHTML = "Copy Image Url"
}, 2000);
    
  })
  .catch(error => {
    console.log(error)
  })
  }

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}