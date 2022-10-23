#!/bin/bash
# creates compiled monster PDFs (letter/A4) and booklets, then lulu-ready PDF, then monster cards (PNG) and PDFs (Letter/A4)

# Parameters validation

if [ -z "$1" ]; then
	echo "Usage: build-bestiary-master-script.sh path/to/cairn/dir"
	exit 1
fi

BASE_DIR=$1

if [ -x "$BASE_DIR/tmp" ]; then
	rm -rf "$BASE_DIR/tmp"
fi

if [ -x "$BASE_DIR/build" ]; then
	rm -rf "$BASE_DIR/build"
fi

SCRIPT_DIR="$BASE_DIR/scripts"

bash "$SCRIPT_DIR/build-bestiary-letter.sh" $BASE_DIR

bash "$SCRIPT_DIR/build-bestiary-a4.sh" $BASE_DIR
bash "$SCRIPT_DIR/build-bestiary-a5.sh" $BASE_DIR
bash "$SCRIPT_DIR/build-bestiary-statement.sh" $BASE_DIR
bash "$SCRIPT_DIR/build-bestiary-lulu.sh" $BASE_DIR
python3 "$SCRIPT_DIR/build-bestiary-cards-images.py" $BASE_DIR
bash "$SCRIPT_DIR/build-bestiary-cards-pdf.sh" $BASE_DIR