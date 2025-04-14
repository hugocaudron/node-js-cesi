const fs = require('fs').promises;
const path = require('path');

const nomRepertoire = 'nouveau_repertoire';
const cheminFichier = path.join(nomRepertoire, 'nouveau_fichier.txt');

async function exerciceFs() {
  try {
    //  Créer un répertoire
    await fs.mkdir(nomRepertoire);
    console.log('Répertoire créé');

    //  Écrire dans un fichier
    await fs.writeFile(cheminFichier, 'Contenu du fichier à écrire.');
    console.log('Fichier créé et contenu écrit');

    //  Lire le contenu du fichier
    const contenu = await fs.readFile(cheminFichier, 'utf8');
    console.log('Contenu du fichier :', contenu);

    //  Lister les fichiers du répertoire courant
    const fichiers = await fs.readdir('.');
    console.log('Fichiers et dossiers dans le répertoire courant :', fichiers);

    //  Supprimer le fichier
    await fs.unlink(cheminFichier);
    console.log('Fichier supprimé');

    //  Supprimer le répertoire
    await fs.rmdir(nomRepertoire);
    console.log('Répertoire supprimé');
  } catch (err) {
    console.error('Une erreur est survenue :', err);
  }
}

exerciceFs();

