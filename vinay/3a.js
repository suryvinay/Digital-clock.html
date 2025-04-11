function updateClock() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format time to 2 digits (e.g., "09" instead of "9")
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every 1000ms (1 second)
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();