const patiosForm = document.getElementById('patiosForm');
const {remote, Notification} = require('electron');
//const { repetir, obtenerFuga } = require('../main');
const main = remote.require('./main');
const retienesList = document.getElementById('retienes');
const patiosList = document.getElementById('patios');
const reincidenciasList  = document.getElementById('reincidencias');
const fugasList = document.getElementById('fugas');


let retienes = [];
let patios = [];
let reincidencias = [];
let fugas = [];


patiosForm.addEventListener('submit', (e)=>{
    e.preventDefault();
})

//Retiene
function renderRetiene(retienes){
    retienesList.innerHTML = '';
    retienes.forEach(retienes => {
    retienesList.innerHTML += `    
    <tr>
          
           <td>${retienes.placa}</td>
           <td>${retienes.numerocomparendo}</td>    
           <td>${retienes.placagrua}</td>
           <td>${retienes.fechaimposicion}</td>
         </tr>
        `;    
     
  });  
}
const obtenerRetiene = async () => {
  retienes = await main.obtenerRetiene();
  renderRetiene(retienes);
  //repetir();
}
setInterval(obtenerRetiene,600000);
//fin retiene

// patios
function renderPatio(patios){
  patiosList.innerHTML = '';
  patios.forEach(patios => {
  patiosList.innerHTML += `    
    <tr>
      
      <td>${patios.nombre}</td>
      <td>${patios.fechaingreso}</td>
      <td>${patios.placa}</td>
      <td>${patios.fecha_ingreso_sistema}</td>
       
    </tr>
        `;    
    
  });  
}
const obtenerPatio = async () => {
   patios = await main.obtenerPatio();
   renderPatio(patios);
   //repetir();
}
setInterval(obtenerPatio,310000);
// fin patio


//Reincidencia
function renderReincidencia(reincidencias){
  reincidenciasList.innerHTML = '';
  reincidencias.forEach(reincidencias => {
  reincidenciasList.innerHTML += `    
      <tr>     
        
         <td>${reincidencias.numerocomparendo}</td>    
         <td>${reincidencias.fechaimposicion}</td>
         <td>${reincidencias.placa}</td>
       </tr>
      `;       
});  
}
const obtenerReincidencia = async () => {
reincidencias = await main.obtenerReincidencia();
renderReincidencia(reincidencias);
//repetir();
}
setInterval(obtenerReincidencia,600000);
//fin reincidencia


//fugas
function renderFuga(fugas){
  fugasList.innerHTML = '';
  fugas.forEach(fugas => {
  fugasList.innerHTML += `    
        <tr>
          <td>${fugas.numerocomparendo}</td>     
          <td>${fugas.placa}</td>  
          <td>${fugas.infraccion1}</td>    
          <td>${fugas.valorcomparendo}</td> 
       </tr>
      `;       
});  
}
const obtenerFuga = async () => {
fugas = await main.obtenerFuga();
renderFuga(fugas);
//repetir();
}
setInterval(obtenerFuga,615000);
//fin fugas




async function init(){
    await obtenerRetiene();
    await obtenerPatio();  
    await obtenerReincidencia();  
    await obtenerFuga();

}

//repetir();
init();




