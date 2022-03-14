
let thisYear = 2022;
let yearOfBirth = prompt("Please Enter Your Year Of Birth") //Prompt to enter year of birth.
let age = thisYear - yearOfBirth;
console.log(age);

    if (age > 36){
    console.log('Thank you for subscribing to the elders program');
}
else if (age < 18){
console.log('Thank you for subscribing to the minor program');
}
else if (18<=age<=36) {
    console.log('Thank you for subscribing to the youth program');
}
else{
    console.log('Please enter a number');
}



