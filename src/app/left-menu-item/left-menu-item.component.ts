import { MenuItem } from './../../MenuItem';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-menu-item',
  templateUrl: './left-menu-item.component.html',
  styleUrls: ['./left-menu-item.component.css']
})
export class LeftMenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  importantBugfixVar = 'foobar';
  constructor() { }

  ngOnInit() {
  }

}
