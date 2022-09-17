1 { /^---/ { :a N; /\n---/! ba; d} };
s/_//g
s/*//g
s/&/and/g
s/potenziato/\\emph{Potenziato}/I
s/compromesso/\\emph{Compromesso}/I
s/scoppio/\\emph{Scoppio}/I
s/Danno Critico/\\textbf{Danno Critico}/I
s/^- /\\item /g
11 i \\\begin{samepage}
11 i \\\begin{itemize}
11 i \\\setlength\\itemsep{\-.5em}
$ a \\\end{itemize}
$ a \\\end{samepage}