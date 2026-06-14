function updateClock() {
    const now = new Date();

    let hour = now.getHours();
    let min = now.getMinutes()
    let sec = now.getSeconds();

    hour = String(hour).padStart(2, '0');
    min = String(min).padStart(2, '0');
    sec = String(sec).padStart(2, '0');

    document.getElementById('clock').textContent = `${hour}:${min}:${sec}`;


};
setInterval(updateClock, 1000);
updateClock();