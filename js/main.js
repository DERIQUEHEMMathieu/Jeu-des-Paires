//Exercice 1
// console.log("Exercice 1");

// var value1 = 15;
// var value2 = 23;
// var value3 = 34;
// var value4 = 64;

// console.log(value1,value2,value3,value4);
// console.log("La valeur la plus élevée est :" + " " + Math.max(value1, value2, value3, value4));

//Exercice 2
// console.log("Exercice 2");

// userAge = prompt("Veuillez indiquer votre age : ");
// function askAge (userAge) {
//     if (userAge) {
//         return askAge;
//     }
// }

// while (userAge <0) {
//     userAge = prompt("Veuillez entrer un âge valide.");
// }
// do {
//     var userAge = prompt("Vous n'avez pas entré votre âge !");
// } while (!userAge);
// if (userAge >= 21) {
//     alert("Accès autorisé")
// }
//     else {
//     alert("Accès refusé")
//     }
// if (userAge %2 == 0) {
//     alert("Votre âge est pair, félicitations")
// }
//     else {
//     alert("Votre âge est impair, félicitations")
//     }

// function carre(userAge) {
//     return userAge*userAge;
// }

// result = carre(userAge);
// alert("Voici le carré de votrer âge :" + " " + result);

//Exercice 3
// console.log("Exercice 3");

// var choose = 33;

// userAnswer = prompt("Amusez-vous à trouver le nombre caché. Have a good luck !");
// function askChoose (userAnswer){
//     if (userAnswer){
//         return askChoose;
//     }
// }

// do {
//     var userAnswer = prompt("Vous n'avez pas entré de nombre");
// } while (!userAnswer);
// do {
//     var userAnswer = prompt("Vous n'avez pas trouvé le bon nombre. Essayez un nombre inférieur.");
// } while (askChoose > choose);
// do {
//     var userAnswer = prompt("Vous n'avez pas trouvé le bon nombre. Essayez un nombre supérieur.");
// } while (askChoose < choose);
// if (askChoose == choose) {}
//     else {
//         alert("Félicitations, vous avez trouvé le bon nombre")
//     }

//Exercice 4
// console.log("Exercice 4");

// var i=0;

// for (var i=1; i<101; i++)
// {
//     console.log(i);
// }

//Exercice 5
// console.log("Exercice 5");

// var i=0;

// for (var i=1; i<101; i++)
// {
// if (!(i %2 == 0)) {}
// else {
//     console.log(i);
// }
// }

//Exercice 6
console.log("Exercice 6");

var dimensions = {
    longeur : 100,
    largeur : 20,
    profondeur : 20
}
    
for (var prop in dimensions) {
    console.log(prop + " : " + dimensions[prop]);
    console.log("Calcul du mètre cube de votre piscine :" + prop[longeur]*prop[largeur]*prop[profondeur]);
}