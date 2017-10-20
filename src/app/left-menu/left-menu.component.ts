import { MenuItem } from './../../MenuItem';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  toggled = false;

  leftMenuItems = [new MenuItem('Konto anlegen', 20005, 'routeToA'),
  new MenuItem('Berechtigungen prüfen', 24, 'routeToB'),
  new MenuItem('Berechtigungen prüfen und benachrichtigen', 0, 'routeToC')
  ]
  constructor() { }

  ngOnInit() {
  }
  onToggle(event) {
    this.toggled = !this.toggled;
    setTimeout(() => event.target.textContent = (this.toggled) ? '>' : '<', 200);

  }
}
