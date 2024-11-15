cd ~/IdeaProjects/docs || exit

rm -rf i18n/en i18n/es
echo "{}" > i18n/pt/docusaurus-plugin-content-docs/current.json
./node_modules/.bin/docusaurus write-translations

#./node_modules/.bin/docusaurus write-translations --locale en --override
#./node_modules/.bin/docusaurus write-translations --locale es --override

# Upload translations, continue even if there are errors
crowdin upload || echo "continue with errors"

# Download the latest translations
crowdin download

# Sync specific image files (.png, .webp, .gif) to the English i18n folder
rsync -avm --include='*.png' --include='*.webp' --include='*.gif' --include='*.css' -f 'hide,! */' docs/ i18n/en/docusaurus-plugin-content-docs/current

# Sync specific image files (.png, .webp, .gif) to the Spanish i18n folder
rsync -avm --include='*.png' --include='*.webp' --include='*.gif' --include='*.css' -f 'hide,! */' docs/ i18n/es/docusaurus-plugin-content-docs/current
