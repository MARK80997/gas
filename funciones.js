function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google');
}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();

}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('16ghgAhLTVGBf0Hb3qlUas5HMguqQF6AnEMPw2qepa_U').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;
}

