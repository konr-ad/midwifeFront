import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-consult-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './consult-list.component.html',
  styleUrl: './consult-list.component.css'
})
export class ConsultListComponent {

}
