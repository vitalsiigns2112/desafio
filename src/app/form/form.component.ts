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
