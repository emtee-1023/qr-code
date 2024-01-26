var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 500,
    height: 500,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Set the data (e.g., a URL or any text)
  var data = "https://emtee-1023.github.io/social-media-links/";
  qrcode.makeCode(data);
