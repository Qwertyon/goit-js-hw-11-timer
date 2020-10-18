const countdownTimer = datePoint => {

const targetDate = new Date(datePoint)

    setInterval(() => {
    const date = new Date();

const time = targetDate.getTime() - date;
        
        const pad = value => {
            return String(value).padStart(2, '0')
        }

const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

const valueDaysRefs = document.querySelector('[data-value="days"]');
const valueHoursRefs = document.querySelector('[data-value="hours"]');
const valueMinsRefs = document.querySelector('[data-value="mins"]');
        const valueSecsRefs = document.querySelector('[data-value="secs"]');
        
valueDaysRefs.textContent = days;
valueHoursRefs.textContent = hours;
valueMinsRefs.textContent = mins;
valueSecsRefs.textContent = secs;
}, 1000)
}

countdownTimer('Dec 19, 2021')

