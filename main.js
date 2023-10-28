function showTime(){
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1 // janurary is 0, git month is always one month off
    var day = now.getDate()

    if (month < 10) month = "0" + month
    if (day < 10) day = "0" + day
    var fullDate = `${month}/${day}/${year}`
    $("#date").text(fullDate)

    var hour = now.getHours()
    var minute = now.getMinutes()
    var seconds = now.getSeconds()
    var isPm = hour >= 12
    var lastPart = isPm ? "PM" : "AM"
    if (isPm) hour -= 12

    if (hour < 10) hour = "0" + hour
    if (minute < 10) minute = "0" + minute
    if (seconds < 10) seconds = "0" + seconds

    var fullTime = `${hour}:${minute}:${seconds} ${lastPart}`
    console.log(fullTime)
    $("#clock").text(fullTime)
}

showTime()
setInterval(showTime, 1000)