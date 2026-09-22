# Pokedex

Application React de type Pokédex permettant de parcourir les Pokémon, consulter leur fiche détaillée et enregistrer ses favoris.

## Description

Ce projet est une petite application web de consultation de Pokémon basée sur l'API publique de PokeAPI. L'utilisateur peut :

- parcourir la liste des Pokémon par pages,
- rechercher un Pokémon dans la page courante,
- accéder à la fiche détaillée d'un Pokémon,
- ajouter ou retirer un Pokémon de ses favoris,
- consulter sa liste de favoris depuis une page dédiée.

## Fonctionnalités

- Navigation entre plusieurs pages avec React Router
- Catalogue paginé de Pokémon
- Recherche instantanée par nom
- Fiche détaillée avec statistiques, types, capacités et attaques
- Gestion des favoris via un contexte React
- Interface responsive et moderne

## Stack technique

- React 19
- TypeScript
- Vite
- React Router DOM
- PokeAPI

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

- Node.js (version 18 ou supérieure recommandée)
- npm

## Installation

1. Clonez le projet :

```bash
git clone <url-du-projet>
cd Pokedex
```

2. Installez les dépendances :

```bash
npm install
```

## Lancement du projet

Pour démarrer le projet en mode développement :

```bash
npm run dev
```

L'application sera accessible dans le navigateur sur l'URL indiquée par Vite (généralement http://localhost:5173).

## Scripts disponibles

```bash
npm run dev
```
Lance le serveur de développement.

```bash
npm run build
```
Construit l'application pour la production.

```bash
npm run preview
```
Prévisualise le build de production.

```bash
npm run lint
```
Vérifie le code avec Oxlint.

## Structure du projet

```text
Pokedex/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Pages.tsx
│   │   └── PokemonCard.tsx
│   ├── pages/
│   │   ├── Favorites.tsx
│   │   ├── FavoritesContext.tsx
│   │   ├── Home.tsx
│   │   ├── NotFound.tsx
│   │   ├── PokeDetails.tsx
│   │   └── Pokemon.tsx
│   ├── types/
│   │   └── Pokemon.ts
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Points d'entrée principaux

- App.tsx : configuration des routes de l'application
- pages/Pokemon.tsx : chargement du catalogue et système de pagination
- pages/PokeDetails.tsx : affichage détaillé d'un Pokémon
- pages/FavoritesContext.tsx : gestion globale des favoris
- pages/Favorites.tsx : affichage de la liste des favoris

## API utilisée

Le projet consomme l'API publique PokeAPI :

- https://pokeapi.co/api/v2/pokemon
- https://pokeapi.co/api/v2/pokemon/:id

## Notes

- Les images des Pokémon proviennent des sprites officiels de PokeAPI.
- Les favoris sont gérés uniquement en mémoire dans le contexte React de l'application.

## Auteur

Projet réalisé dans le cadre d'un apprentissage React / TypeScript.
