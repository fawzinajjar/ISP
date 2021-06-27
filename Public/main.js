function add_ip() {
    const ip_address = document.getElementById("ip_address").value 
    const station_name = document.getElementById("station_name").value 
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", `http://localhost:3000/api/saveIpAddress?ipAddress=${ip_address}&stationName=${station_name}`, false );
    xmlHttp.send();
    return xmlHttp.responseText;
}