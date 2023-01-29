function dataSend() {
    var button = document.getElementById("send_click");
    var request = new XMLHttpRequest();
    var ssid = document.getElementById("ssid").value;
    var password = document.getElementById("password").value;
   request.open('GET', '/send_click?ssid=' + ssid + '&password=' + password, false);
   request.send();
   }
    const functionButton = button.addEventListener('click', dataSend);