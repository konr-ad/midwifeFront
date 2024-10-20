import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  fadeIn: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = true;
    }, 70);
  }
}
