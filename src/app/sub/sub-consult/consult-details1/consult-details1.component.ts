import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-consult-details1',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './consult-details1.component.html',
  styleUrl: './consult-details1.component.css'
})
export class ConsultDetails1Component implements OnInit {
  isExpanded: boolean = false;
  fadeIn: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = true;
    }, 70);
  }

  toggleList() {
    this.isExpanded = !this.isExpanded;
  }

}
