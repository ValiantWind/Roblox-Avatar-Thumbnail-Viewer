var copyButton = document.getElementById("copyUrlButton");

function generate(){

  var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var thumbnail = document.getElementById("thumbnail");
var url = `https://thumbnails.roproxy.com/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var copyButton = document.getElementById("copyUrlButton");;


  axios.get(url)
  .then(response => {
    // access parsed JSON response data using response.data field
    imageUrl = response.data.data[0].imageUrl

    //console.log(data[0].imageUrl)

   thumbnail.src = imageUrl
  })
  .catch(error => {
    console.log(error)
    
    
  })

  }

function copyUrl(){
  var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var url = `https://thumbnails.roproxy.com/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;

  
  axios.get(url)
  .then(response => {
    
    imageUrl = response.data.data[0].imageUrl

    navigator.clipboard.writeText(imageUrl);
    
  })
  .catch(error => {
    console.log(error)
  })
  }