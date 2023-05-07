//your code here


function rotateClockHand() {
	const hourHand = document.getElementsByClassName('hour-hand');
	const minuteHand = document.getElementsByClassName('min-hand');
	const secondHand = document.getElementsByClassName('second-hand');
    // get the current time using date()
    const clockTime = new Date();

    // create 3 new variable to store the hours , minutes and seconds
    const hours = clockTime.getHours();
    const minutes = clockTime.getMinutes();
    const seconds = clockTime.getSeconds();

    // calculate the rotation angle for each hand present in clock
    const hourRotation = 30 * (hours % 12) + minutes / 2; // Each hour mark represents 30 degrees (360 / 12)
    const minuteRotation = 6 * minutes + seconds / 10; // Each minute mark represents 6 degrees (360 / 60)
    const secondRotation = 6 * seconds; // Each second mark represents 6 degrees (360 / 60)

    // Apply the rotation transforms to the clock hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// call the function every second
setInterval(rotateClockHand, 1000);