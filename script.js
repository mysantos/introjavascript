// // // // Sistema que avalia se o aluno foi aprovado ou não em uma matéria. Pergunte para o usuario:  O nome do aluno, a matéria, a nota1. Com os valores recebidos,verifique se o aluno teve  nota superior a média (6). A saida do programa deve falar  "Parabéns, o aluno X foi aprovado na materia Y" OU "Parece que a nota do aluno X na meteria Y foi insuficiente" 

// // // let nome = (prompt("Digite seu nome?"));
// // // let materia = (prompt("Qual a materia?"));
// // // let nota = Number(prompt("Digite sua nota:"));

// // // let media = 6;

// // // if(Number(nota) >= media) {
// // //     alert(`Parabéns, o aluno ${nome} foi APROVADO na materia ${materia}`); 
// // // }

// // // else if(Number (nota) >= media - 0.5){
// // //     alert(`Parabéns, o  ${nome} foi APROVADO na materia ${materia} pelo sistema`); 
// // // }
// // // else{
// // //     // alert(`Com a nota ${nota} você foi Reprovado`);
// // // }

// // let vetor = [ 'Felipe', 'Carol' , 'Lolo'],

// // let joao = {
// //     nome: "Joaozinho",
// //     sobrenome: "Das Neves",
// //     idade: 16,
// //     pets: [
// //         cachorro: "Pingo"
// //     ]
// // }

// // let mariazinha = {
// //     nome: "Maria",
// //     sobrenome: "Zinha",
// //     idade: 21,
// //     pets: []
// // }

// // // console.log (joaozinho, mariazinha);

// // CONTADOR
// let contador = 0;
// // CONDIÇÃO
// while(contador <10)  {
//     console.log (contador);

//     //PASSO
//     contador = contador + 1;
// }

// console.log ('Saiu do laço')

let lances = Number(prompt ('Quantos lances de escada?'));
let material = prompt('Qual material?');
let desenho = "";

let i = 0;

while (i <lances) {
    desenho = desenho + material;
    console.log (desenho);
    i++;
}

////////////////////////////////////////////////////

// let lances = prompt ('Quantos lances de escada você gostaria de criar?')
// let material = prompt ('Qual material a escada deve ser feita?')

// let contador = 0;

// while (contador < lances){
//     contador++;
//     console.log (material.repeat(contador));
// }


