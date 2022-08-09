for (var deprestants=[],i=1;i<=96;++i) deprestants[i]=i;
deprestants = deprestants.filter(function(n){ return n != undefined });

lescore=0;
let jeuscore = document.getElementById("score");
jeuscore.innerHTML = ("Score : "+lescore);

function numerodep()
{
  let departement=deprestants.splice(Math.floor(Math.random()*deprestants.length),1);
  console.log(departement);
  console.log(deprestants);
  let numdepartement=departement[0];
  console.log("numdepartement"+numdepartement);
  let dep = document.getElementsByClassName('land departement'+numdepartement)[0];
  let id = dep.id;
  return [numdepartement,dep,id]
}


let depart = document.getElementById("Depart");
depart.addEventListener("click", demarrer);
function demarrer()
{
  console.log("score"+lescore);
  let numero=numerodep();
  console.log(numero);
  const numdepartement=numero[0],
    dep=numero[1],
    id=numero[2];
  dep.style.fill = "blue";

  let validerNomBouton = document.getElementById("validerNomBouton");
  validerNomBouton.addEventListener("click", modifierNom);
  function modifierNom()
  {
    let nom = document.getElementById("nom");
    nom.innerHTML = nom.value;
    console.log("Nom : ",nom.value);
    console.log("Id : ",id);
    if (nom.value!=id && dep.style.fill != "green")
    {
      alert("Ce n'est pas le bon département, la partie est terminée ! La réponse était : "+id);
    }
    else if (dep.style.fill == "blue")
    {
      console.log("C'est le bon département");
      dep.style.fill = "green";
      indiceA.innerHTML = "Indice 1 :";
      indiceB.innerHTML = "Indice 2 :";
      indiceC.innerHTML = "Indice 3 :";
      nom.value = "Département";
      console.log("Id2 : ",id);
      console.log("num",numdepartement);
      lescore=lescore+3;
      jeuscore.innerHTML = ("Score : "+lescore);
    }
  }
  if (deprestants.length==0)
  {
    alert("Tu as tout trouvé bravo !!!");
  }

  let indiceNomBouton = document.getElementById("indiceNomBouton");
  indiceNomBouton.addEventListener("click", indice, bool=1);
  function indice()
  {
    if (bool==1 && dep.style.fill != "green")
    {
      let indiceA = document.getElementById("indiceA");
      let indicea = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice1');
      indiceA.innerHTML = ("Indice 1 :"+indicea);
      bool=2;
      lescore=lescore-1;
    }
    else if (bool==2 && dep.style.fill != "green")
    {
      let indiceB = document.getElementById("indiceB");
      let indiceb = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice2');
      indiceB.innerHTML = ("Indice 2 :"+indiceb);
      bool=3;
      lescore=lescore-1;
    }
    else if (bool==3 && dep.style.fill != "green")
    {
      let indiceC = document.getElementById("indiceC");
      let indicec = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice3');
      indiceC.innerHTML = ("Indice 3 :"+indicec);
      bool=1;
      lescore=lescore-1;
    }
  }
}

let ville = document.getElementById("Ville");
ville.addEventListener("click", trouverville);
function trouverville()
{
  var departement=deprestants.splice(Math.floor(Math.random()*deprestants.length),1);
  var numdepartement=departement[0];
  let villes = document.getElementById("villes");
  let ville = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('ville');
  villes.innerHTML = ("Ville à trouver :"+ville);
  var dep = document.getElementsByClassName('land departement'+numdepartement)[0];
  let id = dep.id;
  console.log(deprestants);

  if (deprestants.length==0)
  {
    alert("Tu as tout trouvé bravo !!!");
  }

  document.getElementsByClassName('land departement'+numdepartement)[0].onclick = function(e) {
    if(e.target == document.getElementsByClassName('land departement'+numdepartement)[0])
    {
        console.log("bravo !!!");
        dep.style.fill = "green";
        indiceA.innerHTML = "Indice 1 :";
        indiceB.innerHTML = "Indice 2 :";
        indiceC.innerHTML = "Indice 3 :";
        villes.innerHTML = "Ville à trouver :";
        lescore=lescore+3;
        jeuscore.innerHTML = ("Score : "+lescore);
    }
  }
  document.getElementById("complete_map").onclick = function(e)
  {
    if(e.target = document.getElementById("complete_map") && e.target != document.getElementsByClassName('land departement'+numdepartement)[0])
    {
      alert("Ce n'est pas le bon département, la partie est terminée ! La réponse était : "+id);
      dep.style.fill = "red";
    }
  }

  let indiceNomBouton = document.getElementById("indiceNomBouton");
  indiceNomBouton.addEventListener("click", indice, bool=1);
  function indice()
  {
    if (bool==1 && dep.style.fill != "green")
    {
      let indiceA = document.getElementById("indiceA");
      let indicea = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice1');
      indiceA.innerHTML = ("Indice 1 :"+indicea);
      bool=2;
      lescore=lescore-1;
    }
    else if (bool==2 && dep.style.fill != "green")
    {
      let indiceB = document.getElementById("indiceB");
      let indiceb = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice2');
      indiceB.innerHTML = ("Indice 2 :"+indiceb);
      bool=3;
      lescore=lescore-1;
    }
    else if (bool==3 && dep.style.fill != "green")
    {
      let indiceC = document.getElementById("indiceC");
      let indicec = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice3');
      indiceC.innerHTML = ("Indice 3 :"+indicec);
      lescore=lescore-1;
      bool=1;
    }
  }
}

let chiffre = document.getElementById("Chiffre");
chiffre.addEventListener("click", trouverchiffre);
function trouverchiffre()
{
  var departement=deprestants.splice(Math.floor(Math.random()*deprestants.length),1);
  var numdepartement=departement[0];
  let chiffres = document.getElementById("chiffres");
  var dep = document.getElementsByClassName('land departement'+numdepartement)[0];
  let id = dep.id;
  if (numdepartement==20)
  {
    chiffres.innerHTML = ("Numéro à trouver :2A");
  }
  else if (numdepartement==96)
  {
    chiffres.innerHTML = ("Numéro à trouver :2B");
  }
  else
  {
    chiffres.innerHTML = ("Numéro à trouver :"+numdepartement);
  }
  console.log(deprestants);

  if (deprestants.length==0)
  {
    alert("Tu as tout trouvé bravo !!!");
  }

  document.getElementsByClassName('land departement'+numdepartement)[0].onclick = function(e) {
    if(e.target == document.getElementsByClassName('land departement'+numdepartement)[0])
    {
        console.log("bravo !!!");
        dep.style.fill = "green";
        indiceA.innerHTML = "Indice 1 :";
        indiceB.innerHTML = "Indice 2 :";
        indiceC.innerHTML = "Indice 3 :";
        chiffres.innerHTML = "Numéro à trouver :";
        lescore=lescore+3;
        jeuscore.innerHTML = ("Score : "+lescore);
    }
  }
  document.getElementById("complete_map").onclick = function(e)
  {
    if(e.target = document.getElementById("complete_map") && e.target != document.getElementsByClassName('land departement'+numdepartement)[0])
    {
      alert("Ce n'est pas le bon département, la partie est terminée ! La réponse était : "+id);
      dep.style.fill = "red";
    }
  }

  let indiceNomBouton = document.getElementById("indiceNomBouton");
  indiceNomBouton.addEventListener("click", indice, bool=1);
  function indice()
  {
    if (bool==1 && dep.style.fill != "green")
    {
      let indiceA = document.getElementById("indiceA");
      let indicea = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice1');
      indiceA.innerHTML = ("Indice 1 :"+indicea);
      bool=2;
      lescore=lescore-1;
    }
    else if (bool==2 && dep.style.fill != "green")
    {
      let indiceB = document.getElementById("indiceB");
      let indiceb = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice2');
      indiceB.innerHTML = ("Indice 2 :"+indiceb);
      bool=3;
      lescore=lescore-1;
    }
    else if (bool==3 && dep.style.fill != "green")
    {
      let indiceC = document.getElementById("indiceC");
      let indicec = document.getElementsByClassName('land departement'+numdepartement)[0].getAttribute('indice3');
      indiceC.innerHTML = ("Indice 3 :"+indicec);
      lescore=lescore-1;
      bool=1;
    }
  }
}
