const dataEvento = new Date('2030-05-31T00:00:00');

function atualizarContagemRegressiva() {
  const agora = new Date().getTime();
  const diferenca = dataEvento - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Função auxiliar para verificar paridade
  const paridade = numero => numero % 2 === 0 ? 'par' : 'impar';

  document.getElementById('countdown').innerHTML = `
    <div> <span class="numero">${dias}</span> <span class="texto ${paridade(dias)}">dias</span></div>
    <div> <span class="numero">${horas}</span> <span class="texto ${paridade(horas)}">horas</span></div>
    <div> <span class="numero">${minutos}</span> <span class="texto ${paridade(minutos)}">minutos</span></div>
    <div> <span class="numero">${segundos}</span> <span class="texto ${paridade(segundos)}">segundos</span></div>
  `;

  if (diferenca > 0) {
    setTimeout(atualizarContagemRegressiva, 1000);
  } else {
    document.getElementById('countdown').innerHTML = 'Evento encerrado!';
  }
}

// Iniciar a contagem regressiva
atualizarContagemRegressiva();

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('vaga1').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('secao-planos').scrollIntoView({
          behavior: 'smooth'
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('vaga2').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('secao-planos').scrollIntoView({
          behavior: 'smooth'
      });
  });
});



document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('vaga1-invertido').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('secao-planos').scrollIntoView({
          behavior: 'smooth'
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('vaga3').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('secao-planos').scrollIntoView({
          behavior: 'smooth'
      });
  });
});


