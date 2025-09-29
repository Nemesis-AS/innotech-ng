import { Component } from '@angular/core';
import { Dialog } from "primeng/dialog";

@Component({
  selector: 'app-home-how-to',
  imports: [Dialog],
  templateUrl: './home-how-to.html',
  styleUrl: './home-how-to.css',
})
export class HomeHowTo {
  visible: boolean = false;

  openDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
}
