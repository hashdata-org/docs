#!/bin/bash

# Verifica se o cwebp está instalado
if ! command -v cwebp &> /dev/null
then
    echo "O cwebp não está instalado. Por favor, instale-o e tente novamente."
    exit 1
fi

# Nome do diretório de destino
output_dir="png2webp"

# Cria o diretório de destino se ele não existir
if [ ! -d "$output_dir" ]; then
    mkdir "$output_dir"
    echo "Diretório $output_dir criado."
fi

# Loop através de todos os arquivos .png no diretório atual
for file in *.png
do
    # Verifica se existe algum arquivo PNG no diretório
    if [[ -f "$file" ]]; then
        # Extrai o nome do arquivo sem a extensão
        filename="${file%.*}"
        # Converte o arquivo PNG para WebP e salva no diretório de destino
        cwebp "$file" -o "$output_dir/$filename.webp"
        echo "Convertido: $file -> $output_dir/$filename.webp"
    else
        echo "Nenhum arquivo PNG encontrado."
    fi
done

echo "Conversão concluída."

