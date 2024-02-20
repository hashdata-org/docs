rm -rf i18n/en i18n/es
echo "{}" > i18n/pt/docusaurus-plugin-content-docs/current.json
./node_modules/.bin/docusaurus write-translations

#./node_modules/.bin/docusaurus write-translations --locale en --override
#./node_modules/.bin/docusaurus write-translations --locale es --override
