function generate(){

	var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var thumbnail = document.getElementById("thumbnail");
var url = `https://roproxy.valiantwind.repl.co/thumbnails/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var generateButton = document.getElementById("submit");
	
  axios.get(url)
  .then(response => {

thumbnail.src = response.data.data[0].imageUrl;
		
  })
  .catch(error => {

    generateButton.innerHTML = "Invalid ID!"

    setTimeout(() => {
  generateButton.innerHTML = "Generate Thumbnail"
}, 3000);
    console.log(error)
    
    
  })
  }



var copyUrlButton = document.querySelector("copyUrlButton");

if(copyUrlButton) {
	var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var thumbnail = document.getElementById("thumbnail");
var url = `https://roproxy.valiantwind.repl.co/thumbnails/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
	axios.get(url)
  .then(response => {

		const imageUrl = response.data.data[0].imageUrl;
		console.log(imageUrl);

		copyUrlButton.addEventListener("click", function(e) {
			navigator.clipboard.writeText(imageUrl);	
		});
			
	})
  .catch(error => {

    console.log(error)
    
    
  });
}