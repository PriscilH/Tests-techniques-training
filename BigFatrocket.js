// Big Fat Rocket 🚀 
// TEST TECHNIQUE 1
// temps : 10min 

// Écrire une fonction nommée bigFatRocket qui affiche les nombres de 1 à 87 mais qui affiche les string Big pour un multiple de 3, Fat pour un multiple de 5 et enfin Rocket pour un multiple de 3 et 5.

// Votre code doit contenir la déclaration de fonction et l'exécution de fonction.

function bigFatRocket() {
    for (let i = 1; i <= 87; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('Rocket');
      } else if (i % 3 === 0) {
        console.log('Big');
      } else if (i % 5 === 0) {
        console.log('Fat');
      } else {
        console.log(i);
      }
    }
  }
  
  bigFatRocket();

// 1
// 2
// Big
// 4
// Fat
// Big
// 7
// 8
// Big
// Fat
// 11
// Big
// 13
// 14
// Rocket
// 16
// 17
// Big
// 19
// Fat
// Big
// 22
// 23
// Big
// Fat
// 26
// Big
// 28
// 29
// Rocket
// 31
// 32
// Big
// 34
// Fat
// Big
// 37
// 38
// Big
// Fat
// 41
// Big
// 43
// 44
// Rocket
// 46
// 47
// Big
// 49
// Fat
// Big
// 52
// 53
// Big
// Fat
// 56
// Big
// 58
// 59
// Rocket
// 61
// 62
// Big
// 64
// Fat
// Big
// 67
// 68
// Big
// Fat
// 71
// Big
// 73
// 74
// Rocket
// 76
// 77
// Big
// 79
// Fat
// Big
// 82
// 83
// Big
// Fat
// 86
// Big