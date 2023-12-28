# Qualendar (qualendar)

Qualendar
Test
## Paquets
- [v-calendar](https://vcalendar.io/)

## Application

Gestion des temps 2.0

- Enregistrement de mon activité du jour.
- Enregistrement de mon activité sur la semaine, le mois passé.
- Visuel du temps passé par Projet.
- Visuel de la répartition du temps passé sur une période donnée.
- Prévisualistion des congés
- Mode Equipe permettant un planning commun
- Mode Manager
- Gestion des Activités disponible : Activité communes, Activités propre a une equipe, propre à un utilisateur
- Proposition de l'utilisateur activités -> Validation Manager



BDD

Activités
- ActiviteID
 - NomActivite
 - Description
 - TypeActivite
 - Archivée
 - Catégorie

CatégorieActivite
- NomCategorie
- Description
- Active

Projet
- ProjetID
- NomProjet
- Description
- Date Debut
- Date Fin
- Actif


Utilisateurs
- UtilisateurID
 - Nom
 - Prenom
 - Code Agent
 - Actif



Equipe
 - nom
 - description
 - active
 - manager : Agent_ID
 - suppleant_1 :Agent_ID
 - suppleant_2 : Agent_ID


Quotidien
-  UserID INT,
- Date DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    -- Autres détails d'enregistrement quotidien...
);

DetailQuotidien
    DetailID INT PRIMARY KEY,
    QuotidienID INT,
    ActiviteID INT,
    ProjectID INT,
    Duree INT, -- Temps passé en heures, par exemple

);


---

User 
 UserID
 Nom
 Prenom

Activites
 ActiviteID
 Nom
 Description
 Couleur
 Logo

DetailQuotidien 
 DetailID
 UserID
 ActiviteID
 Date
 Duree

UserQuotidien
 UserID
 Date
 DetailID
  