import csv
import re
import glob
import os

input_folder = "."
output_file = "_output.csv"

# Funzione per ignorare il frontmatter YAML
def ignore_frontmatter(lines):
    start_index = -1
    end_index = -1

    for i, line in enumerate(lines):
        if line.strip() == '---':
            if start_index == -1:
                start_index = i
            else:
                end_index = i
                break

    if start_index != -1 and end_index != -1:
        return lines[end_index + 1:]
    else:
        return lines

# Funzione per ripulire la formattazione Markdown
def clean_markdown(text):
    # Rimuove i caratteri di formattazione Markdown
    text = re.sub(r'[_*`-]', '', text)

    # Rimuove i link
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)

    return text.strip()

# Funzione per scrivere i dati nel file CSV
def write_csv(data):
    with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile, quoting=csv.QUOTE_ALL)
        writer.writerow(['nome', 'statistiche', 'descrizione', 'tecnica', 'critico', 'altro'])
        writer.writerows(data)

# Funzione per effettuare il parsing dei file Markdown nella cartella
def parse_markdown_files(folder):
    data = []
    markdown_files = glob.glob(os.path.join(folder, "*.md"))

    for file_path in markdown_files:
        with open(file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
            lines = ignore_frontmatter(lines)

            current_row = []
            for line in lines:
                line = line.strip()
                if line.startswith("#"):
                    if current_row:
                        data.append(current_row)
                    current_row = [line[1:].strip()]
                elif line:
                    current_row.append(clean_markdown(line))

            if current_row:
                data.append(current_row)

    write_csv(data)

parse_markdown_files(input_folder)
