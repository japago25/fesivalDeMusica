//npm run dev
//npx gulp dev
//npm run <nombreDeLaFuncion>
//npx gulp nombreDeLatarea
//npm run nombreDeLoQueColoqueEnElPackage.json

const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done){
   
    src("src/scss/**/*.scss") //identificar el archivo de SASS
        .pipe(sass())//Compilarlo
        .pipe(dest("build/css")); //Almacenarla en el disco duro


    done();// callback que avisa a gulp cuando llegamos al final
}

function dev(done){

    watch("src/scss/**/*.scss", css);
    done();
}

exports.css = css;
exports.dev = dev;