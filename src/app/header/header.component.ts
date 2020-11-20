import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  slides;
  valorAtual: number = 1;
  totalSlides: number;
  index: number = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.slides = document.querySelectorAll('.header__inner__slides__slide');
    this.totalSlides = this.slides.length;
  }

  previous() {
    if(this.valorAtual == 1) {
      this.valorAtual = this.totalSlides;
    } else {
      this.valorAtual--;
    }

    if(this.index == 0){
      this.index = this.totalSlides - 1;
    } else{
      this.index--;
    }

    for(let i = 0; i < this.slides.length; i++){
      this.slides[i].classList.remove("slide-active");
    }
    this.slides[this.index].classList.add("slide-active");

  }

  next() {

    if(this.valorAtual == this.totalSlides) {
      this.valorAtual = 1;
    } else {
      this.valorAtual++;
    }

    this.index++;
    if(this.index == this.totalSlides){
      this.index = 0;
    }

    for(let i = 0; i < this.slides.length; i++){
      this.slides[i].classList.remove("slide-active");
    }
    this.slides[this.index].classList.add("slide-active");

  }

  chooseNumber(value) {
    this.valorAtual = value;
  }

}
