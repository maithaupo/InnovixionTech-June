function startCountdown() {
    const input = document.getElementById('datetime-input').value;
    if (!input) {
        alert('Please select a date and time.');
        return;
    }

    const endDate = new Date(input).getTime();
    const countdownElement = document.getElementById('countdown');
    const alarmSound = document.getElementById('alarm-sound');

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "TIME'S UP!";
            alarmSound.play();
            alert("Countdown has ended!");
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
