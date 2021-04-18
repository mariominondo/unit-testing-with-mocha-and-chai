var expect = require('chai').expect;

let indexIni=0;
let indexFin=0;
let cadenaFinal="", subcadena;

let titleCase = (title) => {

    while(indexFin !== -1){
        indexFin = title.search(" ");
        console.log(indexIni,indexFin)
        subcadena = title.substring(indexIni, indexFin);
        console.log(1,subcadena)
        console.log(subcadena.substring(indexIni+1,indexFin))
        cadenaFinal += subcadena[indexIni].toUpperCase() + subcadena.substring(indexIni+1,indexFin);
        title = title.splice(indexIni,indexFin+1);
        console.log(cadenaFinal);
        indexIni = indexFin+1;
        
    }
    return cadenaFinal;
};

expect(titleCase('the great mouse detective')).to.be.a('string');


expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');