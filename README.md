# Lotus D'or Website

Site vitrine statique pour Lotus D'or, entreprise de distribution de jouets, produits bébé, playgrounds et infrastructures sportives à l'île Maurice.

## Fichiers

- `index.html` : structure du site
- `styles.css` : design responsive
- `script.js` : interactions du menu mobile et filtres
- `assets/` : image principale et favicon

## Aperçu local

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un serveur local.

## Administration produits

Le site est connecté à Supabase pour afficher les produits publiés.

1. Dans Supabase, ouvrir SQL Editor.
2. Exécuter le fichier `supabase-schema.sql`.
3. Dans Authentication > Users, créer un utilisateur pour l'administrateur avec son email et son mot de passe. Identifiant admin prévu : `lotudor1971@gmail.com`. Ne pas mettre le mot de passe dans le code ou dans GitHub.
4. Aller sur `/admin.html` pour ajouter, modifier ou supprimer des produits. Le formulaire admin permet aussi d’uploader une image depuis son ordinateur.

La clé privée Supabase ne doit jamais être ajoutée au code du site.
