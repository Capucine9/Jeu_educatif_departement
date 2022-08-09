<!DOCTYPE html>
<html lang="fr">

  <head>
    <meta charset="utf-8" />
      <title>
          IN - Projet carte de France
      </title>
      <link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
  </head>

  <body>
    <h1>Les 96 départements de France</h1>

    <h2>But du jeu :</h2>

    <p>Le but du jeu est de reconnaître un maximum de départements afin d'obtenir le plus de points possible.</p>

    <ul>
      <li>Reconnaître un département sans indice rapporte 3 points au joueur.</li>
      <li>2 points avec un indice.</li>
      <li>1 point avec deux indices.</li>
      <li>0 point avec trois indices.</li>
      <li>Si le joueur ne parvient pas trouver le nom du département la partie se termine.</li>
    </ul>

    <h4>Attention à l'orthographe des départements !</h4>

    <p>Les départements à reconnaître sont bleus foncés et les départements reconnus sont verts.</p>

    <?php echo include "france.svg"; ?>

    <div id="Score"><b id="score">Score : 0</b></div>

    <button id="Depart">Trouver un département à partir de sa localisation</button>
    <div>
      <label for="nom" style="font-weight:bold;">Nom du département :</label>
      <input type="text" value="Département" name="nom" id="nom" />
      <button id="validerNomBouton">Valider</button>
    </div>

    <button id="Ville">Trouver un département à partir de sa préfecture</button>
    <div id="villediv"><b id="villes">Ville à trouver :</b></div>

    <button id="Chiffre">Trouver un département à partir de son numéro</button>
    <div id="chiffrediv"><b id="chiffres">Numéro à trouver :</b></div>

    <button id="indiceNomBouton">Indice</button>
    <div id="indicediv1"><b id="indiceA">Indice 1 :</b></div>
    <div id="indicediv2"><b id="indiceB">Indice 2 :</b></div>
    <div id="indicediv3"><b id="indiceC">Indice 3 :</b></div>


    <script type="text/javascript" src="js/projet.js"></script>

  </body>
</html>
