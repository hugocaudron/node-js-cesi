const fs = require('fs');
const path = require('path');
const os = require('os');

// Chemin du répertoire 
const userDir = os.homedir();

// Utiliser path.join pour construire le chemin du fichier
const dossierDocuments = path.join(userDir, 'documents');
const cheminRapport = path.join(dossierDocuments, 'rapport.txt');

// Créer le dossier et le fichier vide s'ils n'existent pas
if (!fs.existsSync(dossierDocuments)) {
  fs.mkdirSync(dossierDocuments);
}

if (!fs.existsSync(cheminRapport)) {
  fs.writeFileSync(cheminRapport, '');
}

// Utiliser path.resolve pour obtenir le chemin absolu
const cheminAbsolu = path.resolve(cheminRapport);

// Vérifier l'extension du fichier
const extension = path.extname(cheminRapport);

// Obtenir le dossier du fichier
const dossierFichier = path.dirname(cheminRapport);

// Extraire le nom du fichier sans l’extension
const nomSansExtension = path.basename(cheminRapport, path.extname(cheminRapport));

// Analyse complète du chemin avec path.parse
const detailsChemin = path.parse(cheminRapport);

// Normaliser un chemin "sale"
const cheminSale = `${userDir}//documents///../documents//rapport.txt`;
const cheminNormalise = path.normalize(cheminSale);

// Affichage des résultats
console.log("Chemin rapport.txt :", cheminRapport);
console.log("Chemin absolu :", cheminAbsolu);
console.log("Extension du fichier :", extension);
console.log("Répertoire :", dossierFichier);
console.log("Nom sans extension :", nomSansExtension);
console.log("Détails du chemin :", detailsChemin);
console.log("Chemin normalisé :", cheminNormalise);
