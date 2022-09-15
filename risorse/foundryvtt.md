---
layout: default
redirect_from: /resources/tools/foundryvtt-system
title: Sistema per Foundry VTT
parent: Resources
nav_order: 3
---

# Foundry VTT

Cairn ha un sistema robusto per [Foundry VTT](https://foundryvtt.com/), il popolare programma da tavolo virtuale. Puoi installare Cairn direttamente da Foundry, oppure puoi farlo manualmente tramite [Github Repo](https://github.com/yochaigal/Cairn-FoundryVTT).

Ci sono una serie di compendi (e una macro) che devono essere importati nel "mondo"; assicurati che tutti i giocatori dispongano delle autorizzazioni "Observer" in modo che possano generare un personaggio da soli. Dovrai anche modificare le autorizzazioni del ruolo "Player" per consentire loro di creare attori.

## Importa automaticamente le descrizioni dei mostri in Foundry VTT
[Stephen Mariano Cabrera](https://github.com/smcabrera) ha creato un eccellente scriptino Ruby che converte le descrizioni dei mostri da markdown e in formato JSON, che può quindi essere importato in Foundry con Javascript. Ecco come lo fare:
- Crea gli Actor mostri in Foundry; puoi ignorare le descrizioni per ora.
- Assicurati che i mostri siano tutti scritti in markdown (vedi esempi [qui](https://github.com/yochaigal/cairn/tree/main/monsters)). Mettili tutti in una cartella chiamata "mostri" o modifica lo script in modo che corrisponda a qualcos'altro.
- Prendi lo script Ruby da Cairn [github repo](https://github.com/yochaigal/cairn/blob/main/generate_monster_json.rb) e mettilo nella stessa cartella.
- Assicurati di avere il rubino; dovrai installare anche la gem redcarpet.
- Esegui `generate_monster_json.rb > monsters.json`.
- Apri monsters.json e copia il testo negli appunti.
- All'interno dell'editor di script di Foundry, crea un nuovo script e copia questo script al suo interno:

```
let monstersJson =  [monsters.json contents]

let updateActor = function(monstersJson) {
let  monsterActor = game.actors.entities.find(actor => actor.name == monstersJson.name)
  if (monsterActor == undefined) {
    console.log(monstersJson)
  } else {
    monsterActor.update({ "data": { "description": monstersJson.description }})
  }
}
monstersJson.forEach(m => updateActor(m))
```

Come puoi vedere, il contenuto di monsters.json dovrebbe essere compreso tra parentesi nella prima riga.
Questo è tutto. Esegui la macro.

Forse un giorno dovresti essere in grado di eseguire lo script senza prima creare gli Actor. Spero che questo metodo ti faccia risparmiare tempo, a prescindere.