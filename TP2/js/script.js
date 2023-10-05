"use strict";
let daySelect = document.getElementById("day");
let monthSelect=document.getElementById("month");
let yearSelect=document.getElementById("year")


for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    daySelect.appendChild(option);
}
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for (let i = 0; i < months.length; i++) {
    let option = document.createElement("option");
    option.value = i + 1; // Los meses en JavaScript van de 0 a 11
    option.text = months[i];
    monthSelect.appendChild(option);
}
let currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1930; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearSelect.appendChild(option);
}
