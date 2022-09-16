FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y perl wget libfontconfig1 pandoc rsync && \
    wget -qO- "https://yihui.name/gh/tinytex/tools/install-unx.sh" | sh  && \
    apt-get clean
ENV PATH="${PATH}:/root/bin"
RUN tlmgr install xetex
RUN fmtutil-sys --all

RUN tlmgr install pdfpages extsizes alegreya fontaxes iftex datetime fmtcount titlesec fancyhdr \
	pdflscape