import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // variáveis formulário
  inputName;
  inputEmail;
  inputPhone;
  inputTextarea;

  // variáveis accordion
  accordionOne: boolean = false;
  accordionTwo: boolean = false;
  accordionThree: boolean = false;
  accordionFour: boolean = false;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {

    //Inicia as variáveis do formulário quando o component é iniciado
    this.inputName = document.querySelector("#input-name");
    this.inputEmail = document.querySelector("#input-email");
    this.inputPhone = document.querySelector("#input-phone");
    this.inputTextarea = document.querySelector("#input-textarea");
  }

  setCustom(element) {

    switch(element) {
      case 'name':
        this.inputName.setCustomValidity('Por favor, preencha o campo nome');
        break;
      case 'email':
        this.inputEmail.setCustomValidity('Por favor, preencha o campo email, no padrão correto');
        break;
      case 'phone':
        this.inputPhone.setCustomValidity('por favor, digite o número no padrão XXXX-XXXX');
        break;
      case 'textarea':
        this.inputTextarea.setCustomValidity('Por favor, preencha o campo mensagem');
        break;
    }

  }

  clearCustom(element) {
    switch(element) {
      case 'name':
        this.inputName.setCustomValidity('');
        break;
      case 'email':
        this.inputEmail.setCustomValidity('');
        break;
      case 'phone':
        this.inputPhone.setCustomValidity('');
        break;
      case 'textarea':
        this.inputTextarea.setCustomValidity('');
        break;
    }
  }

  onSubmit() {

    // Esse código não vai ser chamado porque a validação tá sendo feita pelo método setCustomValidity()
    // Caso queira verificar a validação básica só com javascript, é só tirar o atributo required dos campo input e textarea

    // Expressão regular pra validar email
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //const rp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const rp = /[0-9]{4}-[0-9]{4}$/;

    if(this.inputName.value == "") {
      alert("Por favor, preencha o campo nome");
      return false;
    }
    if(this.inputEmail.value == "") {
      alert("Por favor, preencha o campo email");
      return false;
    }
    if(!re.test(this.inputEmail.value)) {
      alert("Por favor, preencha o campo email no padrão correto");
      return false;
    }
    if(this.inputPhone.value == "") {
      alert("Por favor, preencha o campo telefone");
      return false;
    }
    if(!rp.test(this.inputPhone.value)) {
      alert("Por favor, preencha o campo telefone no padrão XXXX-XXXX");
      return false;
    }
    if(this.inputTextarea.value == "") {
      alert("Por favor, preencha o campo mensagem");
      return false;
    }

  }

  openBox(value) {


    if(value == 'accordionOne') {
      if(this.accordionOne) {
        this.accordionOne = false;
      } else {
        this.accordionOne = true;
      }
      this.accordionTwo = false;
      this.accordionThree = false;
      this.accordionFour = false;

    } else if(value == 'accordionTwo') {
      if(this.accordionTwo) {
        this.accordionTwo = false;
      } else {
        this.accordionTwo = true;
      }
      this.accordionOne = false;
      this.accordionThree = false;
      this.accordionFour = false;

    } else if(value == 'accordionThree') {
      if(this.accordionThree) {
        this.accordionThree = false;
      } else {
        this.accordionThree = true;
      }
      this.accordionOne = false;
      this.accordionTwo = false;
      this.accordionFour = false;

    } else {
      if(this.accordionFour) {
        this.accordionFour = false;
      } else {
        this.accordionFour = true;
      }

      this.accordionOne = false;
      this.accordionTwo = false;
      this.accordionThree = false;
    }


  }


}
