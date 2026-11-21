function updateCurrentTime(){
    const now = new Data();
    const timeString = now.toLocalTimeString();
    document.getElementById('current-time').textContent = timeString;

}
setInterval(updateCurrentTime,1000);
updateCurrentTime();
