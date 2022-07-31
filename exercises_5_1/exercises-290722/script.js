document.getElementById("header-container").style.backgroundColor = "green";
document.querySelectorAll(".emergency-tasks")[0].style.backgroundColor = "orange";
const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i< emergencyTasksHeaders.length; i += 1) {
    emergencyTasksHeaders[i].style.backgroundColor = "purple";
}
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";
const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for(let i = 0; i < noEmergencyTasksHeaders.length; i += 1) {
    noEmergencyTasksHeaders[i].style.backgroundColor = "black";
}
document.getElementById("footer-container").style.backgroundColor = "darkgreen";
