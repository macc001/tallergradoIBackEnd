## iniciar node e instalar paquetes

iniciar node `npm init --yes`
instalar archivo .json `npm install`
typeScript `npm i typescript -D`
express `npm install express`
cors `npm install cors`
postgresql `npm install pg`

jwt-simple `npm install jwt-simple`
dayjs `npm install dayjs`

para desintalar un paquete `npm uninstall body-parser`

## iniciar node e instalar paquetes

crear archivo tsconfig.json `tsc --init`
express `npm install @types/express --save-dev`
body-parser `npm uninstall @types/body-parser --save-dev`
cors `npm install @types/cors --save-dev`
pg `npm install @types/pg -D`
jwt-simple `npm install @types/jwt-simple -D`

para desintalar un paquete `npm uninstall @types/body-parser --save-dev`

luego vamos al archivo tsconfig `configuramos "outDir": "dist/"`

## convertir codigo typeScrip a js

tsc -w
npm start

## correr app node js

node dist/index

# modo local

http://localhost:5000/api/buscar

# modo remoto

0 descargamos heroku desde pagina oficial
1 instalamos heroku
2 ver version de heroku `heroku -v`
||||||||||||||||||||||
1 ir a package.json poner en script `"start": "node src/index"`
2 en el comando poner `npm start` para ejecutar la app
otra opcion
1 1 ir a package.json poner en script `"correr": "node src/index"`
2 en el comando poner `npm run correr` para ejecutar la app
continuamos
3 crear un archivo `.gitignore`
4 colocamos `node_modules/` para ignorar paquetes de node
5 `git init`
6 `git status`
7 `git add .`
8 `git status`
9 `git commit -m "primer commit"`
11 ya esta listo con esto, ahora toca subir a heroku
12 en la terminal git `heroku login` para loguearse
13 `heroku git:remote -a colegios-back-type-script-post`
14 `git push heroku master`
15 `heroku open`


GIT
git branch -M main
git push -u origin main