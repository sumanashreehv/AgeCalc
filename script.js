const birthDate = document.getElementById("birthday");
birthDate.max = new Date().toISOString().split("T")[0] //Important step
const btnData = document.getElementById("btn")
const resultData = document.getElementById("result")

function getAgeData(birthValue) {
    // Convert input data to usable format
    // as day,month and year
    let dob = new Date(birthValue);
    let day = dob.getDate();
    let month = dob.getMonth() + 1;
    let year = dob.getFullYear();

    // Getting current date and calculating the difference
    let now = new Date();
    console.log(now);
    let nowYear = now.getFullYear()
    let nowMonth = now.getMonth() + 1
    let nowday = now.getDate()

    let yearDiff = nowYear - year;
    let monthDiff;
    let dateDiff;

    // Calculating the Age
    if (nowMonth >= month) {
        monthDiff = nowMonth - month
    }
    else {
        yearDiff -= 1
        monthDiff = 12 + (nowMonth - month)
    }

    if (nowday >= day) {
        dateDiff = nowday - day
    }
    else {
        const dateInMonth = getDaysMon(year, month)
        console.log(dateInMonth)
        dateDiff = dateInMonth + (nowday - day)
        monthDiff -= 1
        console.log(yearDiff, monthDiff, dateDiff)
    }
    if (monthDiff < 0) {
        monthDiff = 11
        yearDiff -= 1
    }

    resultData.innerText = `Your age is ${yearDiff} years ${monthDiff} months and ${dateDiff} days old`
}
//Important step to find the last day of month
function getDaysMon(year, month) {
    return new Date(year, month, 0).getDate()
}


function calcAgeValue() {
    const birthValue = birthDate.value;
    console.log(birthValue)
    if (birthValue === "") {
        alert("Please Enter Date of Birth")
    } else {
        const age = getAgeData(birthValue);
        // resultData.innerText = ;
    }
}


btnData.addEventListener("click", calcAgeValue)
