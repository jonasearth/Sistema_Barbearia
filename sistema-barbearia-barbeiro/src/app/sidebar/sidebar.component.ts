import { Component, OnInit } from '@angular/core';
import { faArrowCircleLeft,faHome, faCut,faClock,faPlus,faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft;
  faHome = faHome;
  faCut = faCut;
  faClock = faClock;
  faPlus = faPlus;
  faEye = faEye


  constructor() { }

  ngOnInit(): void {
  }

}
