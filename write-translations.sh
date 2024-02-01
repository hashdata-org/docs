rm -rf i18n/en i18n/es
echo "{}" > i18n/pt/docusaurus-plugin-content-docs/current.json
docusaurus write-translations
#docusaurus write-translations --locale en --override
#docusaurus write-translations --locale es --override
