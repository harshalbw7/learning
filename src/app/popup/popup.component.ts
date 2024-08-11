import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
 
  @Input() isActive: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter(); 

  constructor() { }

  closePopup() {
    this.isActive = false;
    this.close.emit();
  }
}
