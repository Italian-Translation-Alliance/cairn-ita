---
layout: default
title: Sistema per Foundry VTT
parent: Risorse
nav_order: 3
---

# Sistema per Foundry VTT
---
Cairn ha un sistema molto robusto per [Foundry VTT](https://foundryvtt.com/), il popolare programma di gioco da tavolo virtuale. Puoi installare Cairn direttamente da dentro Foundry, oppure farlo manualmente passando dal [Repo Github](https://github.com/yochaigal/Cairn-FoundryVTT).

C'è un certo numero di compendi (e una macro) che vanno importati nel "mondo"; assicurati che tutti i giocatori abbiamo i permessi di "Observer", in modo da poter generare loro i personaggi. Avrai anche bisogno di modificare i permessi del ruolo "Player" per permettere loro di creare Attori.

## Importare automaticamente le Descrizioni dei Mostri in Foundry VTT

[Stephen Mariano Cabrera](https://github.com/smcabrera) ha creato un eccellente script Ruby che converte le descrizioni dei mostri da markdown a JSON, che quindi può essere importato in Foundry con Javascript. Ecco come fare:
- Crea degli Attori per i mostri in Foundry; per ora ignora la descrizione.
- Assicurati che i mostri siano tutti scritti in markdown (vedi gli esempi [qui](https://github.com/Italian-Translation-Alliance/cairn-ita/tree/main/resources/monsters)). Mettili tutti in una cartella chiamata "monsters" o modifica lo script per usare qualcos'altro.
- Prendi lo script Ruby dal [Repo Github](https://github.com/yochaigal/cairn/blob/main/generate_monster_json.rb) di Cairn e mettilo in quella stessa cartella.
- Assicurati di aver installato Ruby; avrai inoltre bisogno di installare la gemma redcarpet.
- Lancia `generate_monsters_json.rb > monsters.json`.
- Apri monsters.json e copia il testo negli appunti.
- Nell'editor degli Script di Foundry, crea un nuovo script e copiaci dentro questo:
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

Come puoi vedere, i contenuti di monsters.json vanno tra le parentesi quadre della prima riga. Fatto. Lancia la macro.

Magari un giorno sarà possibile lanciare lo script senza prima creare gli Attori. Spero che questo metodo ti faccia comunque risparmiare del tempo.