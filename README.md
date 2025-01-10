# 📝 To-Do List — Projet de Consolidation Javascript

Ce projet de To-Do List a été réalisé dans le cadre d’un exercice de consolidation des compétences acquises en développement web, notamment en **HTML**, **SCSS** et **JavaScript**.

L'objectif principal était de renforcer les bases et de s'exercer à manipuler le **DOM**, gérer les événements, et implémenter une logique fonctionnelle fluide pour une application dynamique.

## Consignes du projet : 

- [**Liens**](consigne.md)
- **Surpise** :

```
- Rajouter une calculette accessible depuis le site monopage
```


## 🌟 Fonctionnalités

- **Ajouter des tâches** : Chaque tâche saisie est ajoutée à la liste.
- **Logique des tâches** : En cliquant sur une tâche, elle passe en mode "en cours" et puis de "en cours" à "fini".
- **Supprimer des tâches** : Les tâches peuvent être supprimées de la liste.
- **Filtrer les tâches** :
  - Affichage de toutes les tâches.
  - Affichage uniquement des tâches non commencées.
  - Affichage uniquement des tâches non terminées.
  - Affichage uniquement des tâches terminées.

## 🛠️ Technologies utilisées

- **HTML5** : Structure de la page.
- **SCSS** : Design et mise en forme de l’application.
- **JavaScript** : Gestion de la logique et des interactions utilisateur.

## 🚀 Défis rencontrés et solutions

1. **Problème** : Gestion des tâches dynamiques lors de l’ajout ou de la suppression.
   - **Solution** : Utilisation d’écouteurs d’événements et manipulation efficace du DOM pour mettre à jour la liste en temps réel.

2. **Problème** : Filtrage des tâches selon leur statut (terminées / non terminées).
   - **Solution** : Implémentation d’un système de filtres via des boutons et des classes CSS conditionnelles.

3. **Problème** : Rajout de l'implementation d'une calculette en cours de projet.
   - **Solution** : Implémentation de la calculette sous forme de popup dans un modale.

## 🔮 Améliorations futures

- **Ajout du localStorage** : Permettre de sauvegarder la liste des tâches dans le navigateur pour conserver les données après un rafraîchissement de la page.
- **Interface utilisateur améliorée** : Ajouter des animations et améliorer le design général.

## 📦 Installation et utilisation

1. **Cloner le projet** :
   ```bash
   git clone <url-du-repo>
   ```
2. **Ouvrir le fichier `index.html`** dans un navigateur web.

## Projet déployés :

- [**Lien**](https://alexandrethedwarf.github.io/Molengeek-Projet-ToDoList/)

## Annexe : 

- [**Figma**](https://www.figma.com/design/daGty0GWOcUuNnQjQhj4z8/Projet-ToDo-List?node-id=0-1&t=ZsenlfDATs9IWIUR-1)
- [**Notion avant conseil**](./public/annexe/NotionDeBase.pdf)
- [**Notion aprés conseil**](./public/annexe/NotionAprésConseils.pdf)