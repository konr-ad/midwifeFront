import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-consult',
  standalone: true,
  imports: [],
  templateUrl: './sub-consult.component.html',
  styleUrl: './sub-consult.component.css'
})
export class SubConsultComponent implements OnInit {
  fadeIn: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = true;
      }, 100);
  }
}
