import { Component } from '@angular/core';
import { Dialog } from "primeng/dialog";

@Component({
  selector: 'app-home-contact',
  imports: [Dialog],
  templateUrl: './home-contact.html',
  styleUrl: './home-contact.css',
})
export class HomeContact {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
}
