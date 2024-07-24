
const HOJA = SpreadsheetApp.openById('16ghgAhLTVGBf0Hb3qlUas5HMguqQF6AnEMPw2qepa_U').getActiveSheet();


function doGet(datos) {

    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google');
}

function doPost(datos) {

    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google');

}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}

function obtenerContactos() {
    return HOJA.getDataRange().getValues();

}


function insertarContacto(nombre, apellidos, correo, telf) {
    HOJA.appendRow([nombre, apellidos, correo, telf]);

}

function borraContacto(numFila) {
    HOJA.deleteRow(numFila);
}


function modificarContacto(numFila, datos) {

    let celdas = HOJA.getRange('A' + numFila + ':D' + numFila);
    celdas.setValues([[datos.nombre, datos.apellidos, datos.correo, datos.telf]]);

}
