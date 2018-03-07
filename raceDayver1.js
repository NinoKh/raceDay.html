var raceNumber = Math.floor(Math.random()*1000);
var registeredEarly = true;
var age = 14;
if (!registeredEarly) {raceNumber += 1000;
                    };
if (age>18 && registeredEarly) {console.log(raceNumber + ", you will race at 9:30 am.")
}
else if (age>18 || registeredEarly) {console.log(raceNumber + ", you will race at 11:00 am.")
}
else if (age<18 && registeredEarly) {console.log(raceNumber + ", you will race at 12:30 pm.")
}
else {console.log(raceNumber + ", you need to see the registration desk.")};
