for file in *.png; do
	filename="${file%.*}"
	cwebp "$file" -o "${filename}.webp"
done
