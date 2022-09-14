const legalAge = 20;
const clientAge = 15;

if (clientAge >= legalAge) {
    console.info(`Pasiekęs ${legalAge}`);
} else {
    console.info(`Nepasiekęs ${legalAge}`);
}



const myName = "Alicija";

myName.length >= 6 ? alert("Long Name") : alert("Short Name");



const myAge = 24;

if (myAge > 100 || myAge < 0) {
    console.info("Invalid Age");
} else if (myAge > 1 && myAge < 18) {
    console.info("Child");
} else if (myAge > 19 && myAge < 99) {
    console.info("Adult");
}



const car = "BMW";

if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
    console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
    console.log('BMW Group');
} else {
    console.log('Nei vienam');
}



const car1 = "Volvo";

switch (car1) {
    case "VW":
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case "Lamborghini":
    case "Porsche":
        console.info("VW Group")
        break;
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
        console.info("BMW Group")
        break;
    default:
        console.info("No one")
        break;
}

for (let i = 0; i < 5; i++) {
    console.log(i, myName);

}

for (let n = 10; n >= 1; n--) {
    console.info(n)
    1
}