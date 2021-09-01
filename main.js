function avancarDias(dia, quantidade) {
  let diasSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
  let indiceDia = diasSemana.indexOf(dia);

  let indiceAtualizado = indiceDia + quantidade;
  while (indiceAtualizado >= diasSemana.length) {
    indiceAtualizado -= diasSemana.length;
  }

  return diasSemana[indiceAtualizado];
}

console.log(avancarDias("Terça-feira", 12));