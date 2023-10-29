function toggleMenu() {

    var menu = document.getElementById('grafico-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
function fecharMenu() {
    var menu = document.getElementById('grafico-menu');
    menu.style.display = 'none';
}

function mostrarGrafico(tipoGrafico) {

    esconderMiniaturas();
    document.getElementById('grafico').remove();

    var canvas = document.createElement('canvas');
    canvas.id = 'grafico';
    document.querySelector('.grafico-container').appendChild(canvas);

    var dados, config;

    switch(tipoGrafico) {
        case 'grafico-total-plastico':
            dados = {
                labels: ['1977', '1988', '2000', '2016'],
        datasets: [{
            label: 'Poluição de Plástico ( KG )',
            backgroundColor: 'rgba(216, 255, 199)',
            borderColor: 'rgba(216, 255, -1)',
            borderWidth: 2,
            data: [57884000, 55544000, 61096000, 7845200]
        }]
            };
            config = {
                type: 'bar',
                data: dados,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };      
            break;
        case 'grafico-total-CO2':
            dados = {
                labels: ['1977', '1988', '2000', '2016'],
        datasets: [{
            label: 'Emissão de CO2 ( KG )',
            backgroundColor: 'rgba(244, 255, 140)',
            borderColor: 'rgba(188, 207, 17)',
            borderWidth: 2,
            data: [141435200, 136963304, 157632504, 205606907] 
        }]
            };
            config = {
                type: 'bar',
                data: dados,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };
    }

    var ctx = document.getElementById('grafico').getContext('2d');

    var myChart = new Chart(ctx, {
        type: config.type,
        data: dados,
        options: config.options
    });  
}

function esconderMiniaturas() {
    var miniaturas = document.querySelectorAll('.miniatura-container');
    miniaturas.forEach(function(miniatura) {
        miniatura.classList.add('escondido'); // Adiciona a classe 'escondido'
    });
}

function esconderGrafico() {
     
    esconderMiniaturas();
    var graficoCanvas = document.getElementById('grafico');
    graficoCanvas.style.display = 'none';

    document.getElementById('miniatura1').innerHTML = '';
    document.getElementById('miniatura2').innerHTML = '';
    document.getElementById('miniatura3').innerHTML = '';
    document.getElementById('miniatura4').innerHTML = '';
    
    toggleMenu(); 
}

var dadosGrafico1 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Plástico (KG) por Formato de Música em 1977',
    backgroundColor: 'rgba(255,218,185)',
    borderColor: 'rgba(255,140,0)',
    borderWidth: 1,
    data: [13760000, 41280000, 2844000] 
}]};
var dadosGrafico2 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Plástico (KG) por Formato de Música em 1988',
    backgroundColor: 'rgba(244,164,96)',
    borderColor: 'rgba(244, 90, 96)',
    borderWidth: 1,
    data: [2624000, 8688000, 35550000, 8682000] 
}]};
var dadosGrafico3 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Plástico (KG) por Formato de Música em 2000',
    backgroundColor: 'rgba(255,165,0)',
    borderColor: 'rgba(255,80,0)',
    borderWidth: 1,
    data: [192000, 264000, 6004000, 54636000] 
}]
   };
var dadosGrafico4 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Plástico (KG) por Formato de Música em 2016',
    backgroundColor: 'rgba(255,69,0)',
    borderColor: 'rgba(139,69,19)',
    borderWidth: 1,
    data: [16000, 2064000, 0, 5767200] 
}]};


var dadosGrafico5 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Emissão CO2 por Formato de Música em 1977',
    backgroundColor: 'rgba(238,130,238)',
    borderColor: 'rgba(153,50,204)',
    borderWidth: 1,
    data: [42656000, 90816000, 7963200] 
}]};
var dadosGrafico6 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Emissão CO2 por Formato de Música em 1988',
    backgroundColor: 'rgba(186,85,211)',
    borderColor: 'rgba(148,0,211)',
    borderWidth: 1,
    data: [8134400, 19113600, 99540000, 10175304] 
}]};
var dadosGrafico7 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Emissão CO2 por Formato de Música em 2000',
    backgroundColor: 'rgba(153,50,204)',
    borderColor: 'rgba	(75,0,130)',
    borderWidth: 1,
    data: [595200, 580800, 7963200, 10175304,4182000,1840000] 
}]
   };
var dadosGrafico8 = {labels: ['45.', 'LP', 'Cassete','CD', 'Download Album','Download Music', 'Streaming'],
datasets: [{
    label: 'Emissão CO2 por Formato de Música em 2016',
    backgroundColor: 'rgba(139,0,139)',
    borderColor: 'rgba(75, 192, 192, 0)',
    borderWidth: 1,
    data: [49000, 4540800, 0, 6765580,63000000,75800000,55660527]
}]};


function mostrarMiniatura(id, dados) {
    var miniaturaContainer = document.getElementById(id);
  
    var canvas = document.createElement('canvas');
    canvas.width = 350;
    canvas.height = 350;
    miniaturaContainer.appendChild(canvas);

    new Chart(canvas, {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            aspectRatio: 1 
        }
    });

    var miniaturas = document.querySelectorAll('.miniatura-container');
    miniaturas.forEach(function(miniatura) {
        miniatura.classList.remove('escondido');
    });
}

var graficos = {
    grafico1: document.getElementById('grafico1').getContext('2d'),
    grafico2: document.getElementById('grafico2').getContext('2d'),
    grafico3: document.getElementById('grafico3').getContext('2d'),
    grafico4: document.getElementById('grafico4').getContext('2d')
};

function mostrarGraficos2() {
    var graficoCanvas = document.getElementById('grafico');
    graficoCanvas.style.display = 'none';

    document.getElementById('miniatura1').innerHTML = '';
    document.getElementById('miniatura2').innerHTML = '';
    document.getElementById('miniatura3').innerHTML = '';
    document.getElementById('miniatura4').innerHTML = '';

    mostrarMiniatura('miniatura1', dadosGrafico1);
    mostrarMiniatura('miniatura2', dadosGrafico2);
    mostrarMiniatura('miniatura3', dadosGrafico3);
    mostrarMiniatura('miniatura4', dadosGrafico4);
}

function mostrarGraficos3(tipoGrafico) {
    
    var graficoCanvas = document.getElementById('grafico');
    graficoCanvas.style.display = 'none';

    document.getElementById('miniatura1').innerHTML = '';
    document.getElementById('miniatura2').innerHTML = '';
    document.getElementById('miniatura3').innerHTML = '';
    document.getElementById('miniatura4').innerHTML = '';

    mostrarMiniatura('miniatura1', dadosGrafico5);
    mostrarMiniatura('miniatura2', dadosGrafico6);
    mostrarMiniatura('miniatura3', dadosGrafico7);
    mostrarMiniatura('miniatura4', dadosGrafico8);

}

function exibirInfoBox() {
    var infoBox = document.querySelector('.info-box');

    infoBox.style.display = (infoBox.style.display === 'none' || infoBox.style.display === '') ? 'block' : 'none';
}
