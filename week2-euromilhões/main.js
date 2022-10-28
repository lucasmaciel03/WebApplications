/**
 * objectivo: gerar um certo numeros definidos pelo "total"
 *  1º - Gerar uma lista de números
 * 	2º - Definir tamanho do array
 * 	3º - Especificar numerp mínimo
 * 	4º - Especificar numerp mínimo
 *  5º - Verificar que não existe números repetidos
 */

// var
//   pode ser acedida em qualquer lado 
//   pode ser alterada 

// let
//   pode ser alterada

// const
//   não pode ser alterada

const extrairNumeros = (total, min, max) => {
  const numeros = [];

  while (numeros.length < total) {
    // Math.floor() = Returns greates integer less than or equal to its numeric.
    // Math.random() = Returns a pseudorandom number return 0 and 1.
    const novoNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    // [1, 2, 3, 4, 5] indexOf(3);
    // [1, 2, 3, 4, 5] indexOf(10); 
    // se o numero gerado ainda não existir na linha
    if (numeros.indexOf(novoNumero) == -1){
      // adicionar numero gerado à lista
      numeros.push(novoNumero);
    }
  }

  // devolver a lista de números gerados
  return numeros
};

const ordenaChave = (array) => {
  // res : -1 a  < b -> o A passa para o proximo index
  // res :  1 a  > b -> o B passa para o index anterior
  // res :  0 a == b - ficam como está
  return array.sort((a, b) => a - b).join(" - ");
};

const adicionarChaveHTML = (chave) => {
  const body  = table.tBodies[0];
  
  const linha = document.createElement("tr");
  linha.innerHTML = `
  <td>
    ${chave.numeros.join(" - ")} || ${chave.estrelas.join(" - ")}
  </td>
  <td> ${ordenaChave(chave.numeros)}</td>
  <td> ${ordenaChave(chave.estrelas)}</td>
  `;

  body.appendChild(linha);

}

const geraChave = () => {
  const chaveGerada = {
    numeros: [],
    estrelas: [],
  };

  // gerar numeros da chave
  chaveGerada.numeros = extrairNumeros(5, 1, 50);

  // gerar a estrela da chave
  chaveGerada.estrelas = extrairNumeros(2, 1, 12);

  console.log(chaveGerada)
  adicionarChaveHTML(chaveGerada)
};