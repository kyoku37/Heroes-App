import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onButtonGroupClick($event){
    let clickedElement = $event.target || event.srcElement;
    if(clickedElement.nodeName==="BUTTON"){
      let isBtnAlreadySelected = clickedElement.parentElement.querySelector(".selected");
      if(isBtnAlreadySelected){
        isBtnAlreadySelected.classList.toggle("selected");
      }
      clickedElement.classList.toggle("selected");
    }
  }

}
