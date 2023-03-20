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
  
  