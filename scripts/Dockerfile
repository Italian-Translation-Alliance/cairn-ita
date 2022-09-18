FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y perl wget libfontconfig1 pandoc rsync texlive texlive-extra-utils \ 
    xz-utils python3-pip montage imagemagick && \
    apt-get clean && \
    apt-get autoremove -y
RUN useradd -ms /bin/bash cairn
#USER cairn
WORKDIR /cairn

# Bestiary
RUN tlmgr init-usertree && tlmgr update --all
RUN tlmgr install xetex

RUN tlmgr install pdfpages extsizes alegreya fontaxes iftex datetime fmtcount titlesec fancyhdr \
	pdflscape

# Monster Cards

RUN pip3 install marko lxml pillow
RUN sed -i '/disable ghostscript format types/,+6d' /etc/ImageMagick-6/policy.xml