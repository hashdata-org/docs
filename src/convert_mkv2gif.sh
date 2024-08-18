for file in *.mkv; do
	filename="${file%.*}"
	###### output file:
    #speed up to 0.5
    #30 fps
    #scale 1280x720 px
    #interpolation algorithm lanczos
 	ffmpeg -y -i "$file" -vf "setpts=0.5*PTS,fps=30,scale=1280:720:flags=lanczos" "${filename}.gif"
done
