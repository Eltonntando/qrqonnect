// Create function qr

function qr() {
  var t = document.getElementById("text").value;
  document.getElementById(
    "image"
  ).innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${t}"></img>`;
}


    function generateQR() {
  var fileName = document.getElementById("fileName").value;
  var fileInput = document.getElementById("fileInput");
  var qrImage = document.getElementById("qrImage");
  var downloadButton = document.getElementById("downloadButton");

  if (fileInput.files.length > 0) {
    var file = fileInput.files[0];

    // Read the selected file and create a data URL
    var reader = new FileReader();
    reader.onload = function (e) {
      var fileURL = e.target.result;
      var textValue = `File Name: ${fileName}\nFile URL: ${fileURL}`;

      // Create a QR code for the file URL
      var qrDataURL = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(textValue)}`;
      
      qrImage.src = qrDataURL;
      downloadButton.href = qrDataURL;
    };

    reader.readAsDataURL(file);
  } else {
    alert("Please select a file to generate a QR code.");
  }
}

 
