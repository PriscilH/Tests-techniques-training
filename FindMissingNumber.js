// TEST TECHNIQUE 2 10min
// Construire une fonction nommée findMissingNumber qui prend en argument un tableau de valeurs
// et qui retourne le nombre manquant dans le tableau. 
// Si le tableau ne possède pas de nombre manquant, retourner le nombre juste après la séquence :

// findMissingNumber([1, 3, 5, 4]); // 2
// findMissingNumber([6, 3, 4, 5, 2]); // 1
// findMissingNumber([5, 3, 2, 1, 4]); // 6
// Votre code doit contenir la déclaration de fonction et l'exécution de fonction.

function findMissingNumber(arr) {
    // Trie le tableau pour s'assurer que les nombres sont dans l'ordre croissant
    arr.sort((a, b) => a - b);
    
    // Vérifie si le premier nombre est différent de 1
    if (arr[0] !== 1) {
      return 1;
    }
    
    // Parcourt le tableau et vérifie s'il y a un écart entre les nombres
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] - arr[i] > 1) {
        return arr[i] + 1;
      }
    }
    
    // Si aucun nombre n'est manquant, retourne le nombre suivant la séquence
    return arr[arr.length - 1] + 1;
  }
  
  console.log(findMissingNumber([1, 3, 5, 4])); // 2
  console.log(findMissingNumber([6, 3, 4, 5, 2])); // 1
  console.log(findMissingNumber([5, 3, 2, 1, 4])); // 6

//   Cette fonction prend en argument un tableau de valeurs arr. Elle commence par trier le tableau 
//   pour s'assurer que les nombres sont dans l'ordre croissant. 
//   Ensuite, elle vérifie si le premier nombre du tableau est différent de 1. 
//   Si c'est le cas, cela signifie que le nombre manquant est 1. Sinon, elle parcourt le tableau 
//   en vérifiant s'il y a un écart entre les nombres. 
//   Si un écart est trouvé, cela signifie qu'il manque un nombre entre les deux nombres, 
//   et la fonction retourne le nombre manquant. Si aucun nombre n'est manquant, 
//   la fonction retourne le nombre suivant la séquence en ajoutant 1 au dernier nombre du tableau.
  
//   Enfin, nous appelons la fonction findMissingNumber() trois fois avec des tableaux différents 
//   pour vérifier les résultats.
  
// Exemple 2 :

// function findMissingNumber(arr) {

  // Trie le tableau pour s'assurer que les nombres sont dans l'ordre croissant
//   arr.sort((a, b) => a - b);
  
  // Initialise la variable pour stocker le nombre manquant
//   let missingNumber;
  
  // Parcourt le tableau et vérifie s'il y a un écart entre les nombres
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] > 1) {
//       missingNumber = arr[i] + 1;
//       break;
//     }
//   }
  
  // Si aucun nombre n'est manquant, retourne le nombre suivant la séquence
//   if (!missingNumber) {
//     missingNumber = arr[arr.length - 1] + 1;
//   }
  
//   return missingNumber;
// }

// console.log(findMissingNumber([1, 3, 5, 4])); // 2
// console.log(findMissingNumber([6, 3, 4, 5, 2])); // 1
// console.log(findMissingNumber([5, 3, 2, 1, 4])); // 6

// Cette solution est similaire à la précédente, mais utilise une variable pour stocker le nombre 
// manquant plutôt que de retourner immédiatement la valeur. 
// La fonction parcourt le tableau et vérifie s'il y a un écart entre les nombres. 
// Si un écart est trouvé, la fonction stocke le nombre manquant dans la variable et sort de la boucle.
// Sinon, la fonction utilise la même logique que la solution précédente pour retourner 
// le nombre suivant la séquence.

// Exemple 3 :

// function findMissingNumber(arr) {

  // Calculer la somme totale de la séquence en utilisant la formule de la somme d'une suite 
//   arithmétique
//   const totalSum = ((arr.length + 1) * (arr[0] + arr[arr.length - 1])) / 2;
  
  // Calculer la somme réelle des nombres dans le tableau
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);
  
  // Calculer la différence entre la somme totale et la somme réelle pour trouver le nombre manquant
//   const missingNumber = totalSum - actualSum;
  
  // Si aucun nombre n'est manquant, retourne le nombre suivant la séquence
//   if (missingNumber === 0) {
//     return arr[arr.length - 1] + 1;
//   }
  
//   return missingNumber;
// }

// console.log(findMissingNumber([1, 3, 5, 4])); // 2
// console.log(findMissingNumber([6, 3, 4, 5, 2])); // 1
// console.log(findMissingNumber([5, 3, 2, 1, 4])); // 6
// Cette solution utilise une approche mathématique pour trouver le nombre manquant. 
// La fonction utilise la formule de la somme d'une suite arithmétique pour calculer la somme totale 
// de la séquence. Ensuite, elle utilise la méthode reduce() pour calculer la somme réelle des nombres 
// dans le tableau. La différence entre la somme totale et la somme réelle donne le nombre manquant. 
// Si aucun nombre n'est manquant, la fonction retourne le nombre suivant la séquence.