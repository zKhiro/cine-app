import { Component, OnInit, Input } from '@angular/core';
import { Links } from 'src/app/models/links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: Links[] = [
    { title: 'Em Cartaz',   route: '' },
    { title: 'Localização', route: 'batata' },
  ];

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
