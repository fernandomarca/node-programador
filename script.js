const fs = require('fs');

const args = process.argv.slice(2);

const originalFileName = args[0];

const newFileName = originalFileName.split('.').slice(-1);

console.log(newFileName)


fs.readFile(originalFileName, "UTF8", (error, data) => {
  if (error) { throw error };

  fs.writeFile(newFileName + "_Uppercase.txt", data.toUpperCase(), (error) => {
    if (error) throw error;

    console.log("arquivo gerado com sucesso");
  });
});

// fs.unlink('texte.txt', (error) => {

//   if (error) { throw error; }

//   console.log('arquivo criado com sucesso');
// });

// fs.writeFile('texte.txt', 'ola = Hello world', {
//   flag: 'a'
// }, (error) => {

//   if (error) { throw error; }

//   console.log('arquivo criado com sucesso');
// });

// fs.readFile('texte.txt', 'UTF8', (error, data) => {

//   if (error) { throw error; }

//   console.log(data);
// });
