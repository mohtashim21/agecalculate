let isDobOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const beforeTextEl = document.getElementById("beforeText");
const afterTextEl = document.getElementById("afterText");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearEl = document.getElementById("year");
const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondEl = document.getElementById("second");

const toggleDob = () => { 

    if(isDobOpen){
        settingContentEl.classList.add('hide');
    }else{
        settingContentEl.classList.remove('hide');
    }
    isDobOpen = !isDobOpen;

    console.log('Toggle', isDobOpen);
};
const updateAge = () => {
    const currentDate = new Date();
    const dateDiff = currentDate - dateOfBirth;

    const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365.25));
    const month = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const day = Math.floor((dateDiff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hour = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor(dateDiff/ (1000 * 60)).toLocaleString();
    const second = Math.floor(dateDiff / 1000).toLocaleString();

    
    yearEl.innerHTML = year;
    monthEl.innerHTML = month;
    dayEl.innerHTML = day;
    hourEl.innerHTML = hour;
    minutesEl.innerHTML = minute;
    secondEl.innerHTML = second;
};


const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    dateOfBirth = new Date(dateString)
    if (dateOfBirth){
        beforeTextEl.classList.add('hide');
        afterTextEl.classList.remove('hide');
        setInterval(() => updateAge(), 1000)
        
    } else{
        afterTextEl.classList.add('hide');
        beforeTextEl.classList.remove('hide');
    }
};

setDOBHandler();



settingCogEl.addEventListener("click", toggleDob);
dobButtonEl.addEventListener("click", setDOBHandler);

const reloadFn = () => {
    window.location.reload();
}

const reloadBtn = document.getElementById("reload");
reloadBtn.addEventListener("click", reloadFn);