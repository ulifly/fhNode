/* sin recivir argumentos imprimir la tabla del 5 
     - generar la tabla del 5 e imprimirla en consola
     - grabar el resultado en un archivo llamado tabla-5.txt
        en el path output/
grabar el resultado en un archivo llamado tabla-5.txt
en el path output/
usar el módulo fs de node.js
*/
import fs from 'fs';

let multiplicador = 5;

const tabla = (multiplicador: number) => {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${multiplicador} x ${i} = ${multiplicador * i}\n`;
    }
    return tabla;
}
const data: string = `
==============================
Tabla del 5
==============================

${tabla(multiplicador)}`;

console.log(data);
fs.mkdirSync('./output', { recursive: true });

fs.writeFileSync(`./output/tabla-${multiplicador}.txt `, data);

