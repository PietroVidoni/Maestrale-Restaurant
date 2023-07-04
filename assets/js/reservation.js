let monthSelector = document.getElementById('month-selector')
let daySelector = document.getElementById('day-selector')
let guestSelector = document.getElementById('guest-selector')

const monthDaysMap = [
    ["January", 31],
    ["February", 28],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 30],
    ["December", 31]
];
  
// Creates the months entries for the selector
for (let month = 0; month < 12; month++) {

    let option = document.createElement('option')
    option.value = month
    option.text = monthDaysMap[month][0]

    monthSelector.appendChild(option)
}


// Creates the days entries for the selector
for (let day = 0; day < 31; day++) {

    let option = document.createElement('option')
    option.value = day
    option.text = (day + 1)

    daySelector.appendChild(option)
}

// Creates the guests entries for the selector
for (let guests = 1; guests <= 8; guests++) {

    let option = document.createElement('option')
    option.value = guests
    option.text = `${guests} guest${guests == 1 ? '' : 's'}`

    guestSelector.appendChild(option)
}

// Everytime the month changes the days needs to be re-calculated
monthSelector.addEventListener('change', () => {
    const selectedMonth = monthSelector.value;

    let selectedDay = daySelector.value

    // Removes all the childs but the first one
    while (daySelector.childElementCount > 1) {
        daySelector.removeChild(daySelector.lastChild);
    }

    // Adds all the month's day to it
    for (let day = 0; day < monthDaysMap[selectedMonth][1]; day++) {
        let option = document.createElement('option')
        option.value = day
        option.text = (day + 1)
        daySelector.appendChild(option)
    }
    daySelector.value = Math.min(selectedDay, monthDaysMap[selectedMonth][1] - 1)
});