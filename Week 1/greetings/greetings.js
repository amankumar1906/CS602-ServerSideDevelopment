import moment from 'moment-timezone'

const getGreeting = () => {
    const currentTime = moment().tz("America/New_York");
    const hour = currentTime.hour()
    if(hour<12) {
        return "Good Morning";
    }
    else if (hour>=12 && hour<18) {
        return "Good Afternoon";
    }
    else {
        return "Good Evening";
    }};

console.log(getGreeting())

// Assuming we are in EST the entire time (without the moment-timezone module)
    const getGreetingWithoutTimezone = () => {
    const currentHour = new Date().getHours();
    if(currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }};
    console.log(getGreetingWithoutTimezone())
