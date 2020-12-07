const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    // please write your code here
    let difference = new Date().getTime() - user.lastActivity;
    let resultInMinutes = Math.round(difference / 60000); 

    if(+resultInMinutes >= 0 && +resultInMinutes <= 2) {
      inactiveFirstStage()
    } else if(+resultInMinutes === 3) {
      inactiveSecondStage()
    } else if(+resultInMinutes >= 3 && +resultInMinutes <= 5) {
      inactiveThirdStage()
    } else if(+resultInMinutes > 5) {
      user.lastActivity = new Date().getTime();
    }
}, 1000);
