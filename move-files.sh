# shopt -s extglob
# rm -r ./game-wrapper/static/!(favicon.png)*
rm -r ./game-wrapper/static/*
cp -r ./gdevelop/export/* ./game-wrapper/static
rm ./game-wrapper/static/index.html

sed -i 's/"showWatermark":true/"showWatermark":false/g' ./game-wrapper/static/data.js

# node ./merge-app-html.js