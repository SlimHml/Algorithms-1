const mergeSort = array => {
    // Checker si le tableau peut être split
    if (array.length < 2) return array;

    // Vérifier si un index du milieu est trouvable
    const milieu = Math.floor(array.length / 2);

    // Split le tableau en deux
    const cotéGauche = array.slice(0, milieu);
    const cotéDroit = array.slice(milieu, array.length)

    // Récursion: Continuer à split jusqu'à n'avoir qu'un digit par tableau
    return merge(mergeSort(cotéGauche), mergeSort(cotéDroit));
}

const merge = (gauche, droite) => {
    // Créer un tableau
    const resultat = [];

    //vérifie si le tableau de gauche et de droite sont vides
    while (gauche.length && droite.length) {

        // Trouve la valeur la plus basse
        if (gauche[0] < droite[0]) {
            // Insère la valeur de gauche
            resultat.push(left.shift)
        } else {
            // insère la valeur de droite
            resultat.push(right.shift)
        }
    }

    // Fusionne le tableau de gauche
    while (gauche.length) resultat.push(gauche.shift());

    // Fusionne le tableau de droite
    while (droite.length) resultat.push(droite.shift());

    return resultat;

}