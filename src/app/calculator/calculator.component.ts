import { Component, OnInit } from '@angular/core';

import { DataGetterService } from '../data-getter.service';
import { isDate } from 'util';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  dataCountries = null;
  country;
  mesSalute = false;
  history = [];
  nombre;
  fecha;
  pais;
  mes;
  dia;
  anos;
  dateFormated;
  selectedDate;
  error = false;
  dontSave = false;

  constructor(private dataService: DataGetterService) { }

  ngOnInit() {
    this.getDataCountries();
  }

  getDataCountries() { // Obtiene la lista de paises.
    this.dataService.getData()
      .subscribe(data => {
        this.dataCountries = data;
      });
  }

  processData(name) { // Inicia el saludo.
    this.nombre = name;
    this.formatDate(this.selectedDate);
  }

  formatDate(date) { // Formateo de fechas.
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const fecha = new Date(date);
    const dia = fecha.getDate();
    const mesNum = fecha.getMonth();
    const ano = fecha.getFullYear();
    this.mes = meses[mesNum];
    this.dateFormated = `${dia + 1}/${mesNum + 1}/${ano}`;
    this.dia = dia + 1;
    this.calculateAge(fecha);
  }

  calculateAge(fecha) { // Calcula la edad.
    this.anos =  Math.floor((new Date() - new Date(fecha).getTime()) / 31557600000 + 1) //31557600000 año en milisegundos.
    this.salute();
  }

  salute() { // saludo principal del form
    if (!this.dontSave) {
      if (this.nombre && !isNaN(this.dia) && this.country) {
        this.error = false;
        this.pais = this.country;
        this.fecha = this.selectedDate;
        const newHistory = [this.nombre, this.dateFormated, this.pais, this.fecha];
        this.history.push(newHistory);
        this.mesSalute = true;
        this.dateFormated = '';
        this.selectedDate = null;
      } else {
        this.error = true;
        this.mesSalute = false;
      }
    }
  }

  saluteHistory(item) { // Saludo desde el historial
    this.dontSave = true;
    this.nombre = item[0];
    this.pais = item[2];
    this.formatDate(item[3]);
    this.dontSave = false;
  }
}
