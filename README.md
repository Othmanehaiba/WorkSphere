# WorkSphere — Virtual Workspace

Application web moderne pour la gestion visuelle et interactive du personnel dans les espaces de travail.

## Description du Projet
WorkSphere est une solution innovante permettant aux entreprises de gérer efficacement la répartition de leurs employés sur un plan d'étage interactif.  
L'application offre une interface intuitive pour visualiser, organiser et gérer les affectations du personnel tout en respectant les contraintes de sécurité et d'accès.

---

## Fonctionnalités Principales

### 🔹 Gestion des Employés
- Ajout d'employés via un formulaire complet (nom, rôle, photo, email, téléphone)
- Gestion dynamique des expériences professionnelles
- Validation des données avec regex
- Prévisualisation de la photo de profil
- Affichage détaillé du profil employé

### 🔹 Gestion Spatiale
- Plan d'étage interactif comprenant *6 zones* :
  - Salle de conférence  
  - Réception  
  - Salle des serveurs  
  - Salle de sécurité  
  - Salle du personnel  
  - Salle d'archives  

- Système de restrictions par rôle  
- Indicateurs visuels des zones vides à remplir  
- Limitation du nombre d'employés par zone  

### 🔹 Règles d’Accès par Rôle
- *Réceptionnistes* : Réception uniquement  
- *Techniciens IT* : Salle des serveurs  
- *Agents de sécurité* : Salle de sécurité  
- *Manager* : Accès à toutes les zones  
- *Nettoyage* : Partout sauf Salle d’archives   

---

## Technologies Utilisées
- *HTML5* — Structure sémantique  
- *CSS3* — Grid, Flexbox  
- *Tailwind CSS* — Framework utilitaire  
- *JavaScript* — Logique applicative  
- *Git & GitHub* — Gestion de versions  

---

## Validation des Données
- Nom : Contient tout les lettres plus un espace
- Téléphone : Format marocain (06 / 07 ou 05) suivi de 8 chiffres  
- Email : Format classique (exemple@domaine.com)  
- Dates : Date de début < date de fin  

---

## Interface Utilisateur
- Design moderne et cohérent  
- Animations CSS fluides   
- Interface responsive 

---

## Gestion du Projet
Méthodologie *Agile* avec :
- User Stories  
- Planification via outil de gestion  

---

## Normes et Bonnes Pratiques
- HTML validé W3C  
- CSS validé W3C  
- Balises sémantiques  
- JS modulaire et commenté  

---

## Déploiement
Application déployée sur *Vercel*.

---

## Améliorations Futures
- Drag & Drop des employés  
- Mode édition des informations  
- Recherche et filtrage avancés  
- Sauvegarde localStorage  
- Réorganisation automatique  
- Photos de profil par défaut  




