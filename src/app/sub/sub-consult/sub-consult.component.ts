import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sub-consult',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sub-consult.component.html',
  styleUrl: './sub-consult.component.css'
})
export class SubConsultComponent implements OnInit {
  fadeIn: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = true;
      }, 70);
  }
}
