function start() {
   let time = parseInt(document.getElementById("input").value);
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid time.");
        return;
    }

    let timer = setInterval(() => {
        time--;
        document.getElementById("result").textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            alert("Time's up!");
            
        }

    }, 1000);
}
