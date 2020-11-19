import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  accordionOne: boolean = false;
  accordionTwo: boolean = false;
  accordionThree: boolean = false;
  accordionFour: boolean = false;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openBox(value) {
    this.accordionOne = false;
    this.accordionTwo = false;
    this.accordionThree = false;
    this.accordionFour = false;


    switch(value) {
      case 'accordionOne':
        this.accordionOne = true;
        break;
      case 'accordionTwo':
        this.accordionTwo = true;
        break;
      case 'accordionThree':
        this.accordionThree = true;
        break;
      case 'accordionFour':
        this.accordionFour = true;
        break;

    }

  }

}
