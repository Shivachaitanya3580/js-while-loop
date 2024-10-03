//1.Find day of the week using switch case

let dayNumber = 3; 
let dayName;

switch (dayNumber) {
    case 0:
        dayName = 'Sunday';
        break;
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day number';
}

console.log(`The day of the week is: ${dayName}`);

//2.Find month of the year using switch case

let monthNumber = 5;
let monthName;

switch (monthNumber) {
    case 1:
        monthName = 'January';
        break;
    case 2:
        monthName = 'February';
        break;
    case 3:
        monthName = 'March';
        break;
    case 4:
        monthName = 'April';
        break;
    case 5:
        monthName = 'May';
        break;
    case 6:
        monthName = 'June';
        break;
    case 7:
        monthName = 'July';
        break;
    case 8:
        monthName = 'August';
        break;
    case 9:
        monthName = 'September';
        break;
    case 10:
        monthName = 'October';
        break;
    case 11:
        monthName = 'November';
        break;
    case 12:
        monthName = 'December';
        break;
    default:
        monthName = 'Invalid month number';
}

console.log(`The month of the year is: ${monthName}`);

//3.Find even numbers in first 10 numbers using while loop

let number = 1;

while (number <= 10) {
    if (number % 2 === 0) {
        console.log(number);
    }
    number++;
}


//4. Countdown timer using while loop and the countdown should starts from 10

let countdown = 10;

while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}
