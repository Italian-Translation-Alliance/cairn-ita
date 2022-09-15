#!/bin/bash
scriptdir="/mnt/c/Users/utente/Documents/GitHub/cairn-ita/scripts"
sourcedir="/mnt/c/Users/utente/Documents/GitHub/cairn-ita/risorse/mostri"
tmpdir="/mnt/c/Users/utente/Documents/GitHub/cairn-ita/tmp"
destdir="/mnt/c/Users/utente/Documents/GitHub/cairn-ita/build"
mkdir -p $tmpdir/mostri
rsync -av $sourcedir/ $tmpdir/mostri/
sed -i -f $scriptdir/sources/prep.sed $tmpdir/mostri/*.md
cat $tmpdir/mostri/*.md >> $tmpdir/cairn-bestiary-tmp.md
cp $scriptdir/sources/a4.tex $tmpdir/cairn-bestiary.tex
pandoc $tmpdir/cairn-bestiary-tmp.md -f markdown -t latex -o $tmpdir/cairn-bestiary-tmp.tex
cat $tmpdir/cairn-bestiary-tmp.tex >> $tmpdir/cairn-bestiary.tex
sed -i '$a \\\end{document}' $tmpdir/cairn-bestiary.tex
pdflatex -output-directory=$tmpdir $tmpdir/cairn-bestiary.tex 
pdflatex -output-directory=$tmpdir $tmpdir/cairn-bestiary.tex 
mv $tmpdir/cairn-bestiary.pdf "$destdir/cairn-bestiario-a4.pdf"
rm -rf $tmpdir