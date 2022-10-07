# Istruzioni di build

Tutte le build presuppongono una familiarità minima con una shell Bash o ZSH.

## Docker

Gli script di build hanno numerose dipendenze, gestite via Docker per semplicità e uniformità sui vari sistemi.

L'unico requisito per le build è di aver installata una versione di [Docker](https://www.docker.com).

## Preparazione dell'ambiente.

L'unica cosa da fare è creare l'immagine Docker in cui eseguire le build. Questo step va eseguito una volta sola prima di generare tutti gli artefatti,
e ripetuto, tendenzialmente, solo nel caso in cui cambi il Dockerfile. **Nota: gli script di build vengono montati all'avvio dell'immagine, quindi, a meno
che non cambino le dipendenza, non occorre rigenerare l'immagine dopo averli modificati.**

Per generare l'immagine posizionarsi nella cartella "scripts" via terminale e lanciare il comando `docker build -t cairn/build:1.0.0 .`. Il processo di build
dell'immagine è lungo e logga parecchio. Una volta terminato, verificare che l'immagine sia presente nel proprio registro tramite `docker image ls | grep cairn`.

## Build

I comandi che iniziano con `#` sono da eseguire sul proprio terminale, mentre i comandi che iniziano per `$` vanno eseguiti all'interno del container docker

```bash
# cd /path/to/cairn
# docker run -i -t -v"$(pwd):/cairn" cairn/build:1.0.0 /bin/bash
$ cd scripts
```

A questo punto è possibile eseguire tutti gli script di build finora supportati (non ci sono garanzie per gli script non elencati):

* build-bestiary-a4.sh
* build-bestiary-a5.sh
* build-bestiary-cards-images.py
* build-bestiary-cards-pdf.sh
* build-bestiary-letter.sh

I risultati degli script sono disponibili nella cartella build del repository.

Tutti gli script supportati ricevono come unico parametro il percorso al repository di Cairn (che, se la guida è stata seguita correttamente, dovrebbe essere `/cairn` per il container Docker).