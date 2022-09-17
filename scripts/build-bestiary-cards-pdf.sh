#!/bin/bash
# This creates a printable PDF of all the monster cards in both Letter and A4 formats.

# Parameters validation

if [ -z "$1" ]; then
	echo "Usage: build-bestiary-cards-pdf.sh path/to/cairn/dir"
	exit 1
fi

# Directories set up

BASE_DIR=$1

destdir="$BASE_DIR/build"
sourcedir="$BASE_DIR/build/carte-mostro"

if ! [ -x $destdir ]; then
	echo "Source directory $sourcedir does not exist"
	exit 1
fi

if ! [ -x $sourcedir ]; then
	echo "Source directory $sourcedir does not exist"
	exit 1
fi

montage "$sourcedir/*.png" -mode concatenate -tile 3x3 -geometry +20+20 -page a4 -rotate 90 "$destdir/cairn-bestiary-cards-a4.pdf"
