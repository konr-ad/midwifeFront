import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sub-about',
  standalone: true,
  imports: [],
  templateUrl: './sub-about.component.html',
  styleUrl: './sub-about.component.css'
})
export class SubAboutComponent implements OnInit {
  fadeIn: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = true;
    }, 70);
  }
}
