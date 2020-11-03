//pintar ventana por pantalla con eventos al iniciar electron
const { BrowserWindow, Notification, Menu } = require('electron')
Menu.setApplicationMenu(false)
const { getConnection } = require('./database')
const conexion = require('./database')



async function obtenerRetiene() {
    //try {
    const conn = await getConnection();
    const result = await conn.query("select c.placa, c.numerocomparendo, c.retienevehiculo, c.placagrua, to_char(c.fechaimposicion, 'YYYY-MM-DD' ) as fechaimposicion from tabla c where c.retienevehiculo = FALSE and c.grua_id is not null and extract(year from c.fechaimposicion) = 2020 order by 1;")
        console.log(result.rows)
        if (result.rows != 0) {
           // console.log('revisar check');
            alertaRetiene();
            alertaRetiene();
            alertaRetiene();
           
            
           
        //console.log('revisar');
         } else {
            //console.log('ok, nada por revisar check');
        }
        return result.rows;
    //}catch (e) {
    // console.log(e)
    // } 



    
}
function alertaRetiene() {
  
    new Notification({
      
        title: 'Alerta: Retiene Vehículo',
        body:  ' checks por revisar' 
    }).show();
}


async function obtenerPatio() {
    //try {
    const conn = await getConnection();
    const result2 = await conn.query("select p.nombre, to_char(c.fecha_ingreso_sistema, 'YYYY-MM-DD' ) as fecha_ingreso_sistema, to_char(c.fechaingreso, 'YYYY-MM-DD' ) as fechaingreso,")
       
        if (result2.rows != 0) {
            //console.log('revisar patios');
            alertaPatio();
            alertaPatio();
            alertaPatio();
                    
                     
        } else {
            //console.log('ok, nada por revisar patio');
        }
        return result2.rows;
    //}catch (e) {
    // console.log(e)
    // } 
}
function alertaPatio() {
    new Notification({
        title: 'Alerta: Patio errado',
        body: 'Ingreso Patio por revisar'
    }).show();
}


async function obtenerReincidencia() {
    //try {
    const conn = await getConnection();
    const result3 = await conn.query("select c;"
    )

        //console.log(result3)
        if (result3.rows != 0) {
           // console.log('revisar reincidencias D12');
            alertaReincidencia();
            alertaReincidencia();
            alertaReincidencia();
            
          
        } else {
          //  console.log('ok, nada por revisar D12');
        }
        return result3.rows;
    //}catch (e) {
    // console.log(e)
    // } 
}

function alertaReincidencia() {
    new Notification({
        title: 'Alerta: D12',
        body: 'Reincidencias por revisar'
    }).show();
}

//FUGAS
async function obtenerFuga() {
    //try {
    const conn = await getConnection();
    const result4 = await conn.query("select ")
     
        if (result4.rows != 0) {
          //  console.log('revisar fuga');
            alertaFuga();
            alertaFuga();
            alertaFuga();
                       
        } else {
            //console.log('ok, nada por revisar fuga');
        }
        return result4.rows;
    //}catch (e) {
    // console.log(e)
    // } 
}
function alertaFuga() {
    new Notification({
        title: 'Alerta: Fuga Vehículo',
        body: 'Fugas por revisar'
    }).show();
}


let window
function createWindow() {
    window = new BrowserWindow({
        
        width: 520,
        height: 870,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
          
        }
        
    })
    
    window.loadFile('src/ui/index.html') // Windows create, load document index

}

module.exports = {
    createWindow,
    obtenerRetiene,
    obtenerPatio,
    obtenerReincidencia,
    obtenerFuga,

}



















