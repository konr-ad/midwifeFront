import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
  fadeIn: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.fadeIn = true;
    }, 70);
  }
}{

}
