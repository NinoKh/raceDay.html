var raceNumber = Math.floor(Math.random()*1000); 
/* 
My variable raceNumber will be chosen by Math.floor Math.random so it will be a number from 0 to 999; If I wouldn't write *1000 it 
would be a number between 0 and 1, including 0 but excluding 1; 
*/ 

var registeredEarly = true;
//My second variable registeredEarly is a boolean type. Because some people registered early and some late

var age = 14;
//My third variable is the age and has a value of a number

if (!registeredEarly) {raceNumber += 1000;
                    };
/*
Anyone who registered the same day has a higher race number than someone who registered early; 
Created a control flow statement that checks if the runner did not register early;
+=1000 because my registeredEarly raceNumber include numbers from 0 to 999; 
So to make sure there is no number chosen from 0 to 999 I am making the if registeredEarly is false, then raceNumber 
should be higher than 999;
the operation += is same as x = x + y;
*/

if (age>18 && registeredEarly) {console.log(raceNumber + ", you will race at 9:30 am.")
}
/*if runner's age is more than 18 and registeredEarly (&& meaning both)
then console will log raceNumber +, you will race at 9:30 am*/
else if (age>18 || registeredEarly) {console.log(raceNumber + ", you will race at 11:00 am.")
}
//if runner's age is more than 18 || or registered early the console will log raceNumber +, you will case at 11:00 am.
else if (age<18 && registeredEarly) {console.log(raceNumber + ", you will race at 12:30 pm.")
}
//if runner's age is less than 18 and && registeredEarly the console will log raceNumber +, you will race at 12:30pm.
else {console.log(raceNumber + ", you need to see the registration desk.")};
//if anything else than the conditions above the console will log the raceNumber +, you need to see the registration desk.

/*Gut gemacht Ninooo. :D
Kapiert! ;)
Basics, macht aber Spass
That moment "Wenn du für dich selbst Kommentare schreibst"
*/
/*
var Nino = true;
if (Nino) {console.log(`You are too good to be true.`)
          }
else {console.log(`Try harder!`)};
*/
//LOL

