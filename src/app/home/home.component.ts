import { Component } from '@angular/core';
import {ContactComponent} from '../contact/contact.component';
import {CourseListComponent} from '../course-list/course-list.component';
import {ConsultListComponent} from '../consult-list/consult-list.component';
import {TestimonialsComponent} from '../testimonials/testimonials.component';
import {AboutComponent} from '../about/about.component';
import {ImageCarouselComponent} from '../image-carousel/image-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactComponent,
    CourseListComponent,
    ConsultListComponent,
    TestimonialsComponent,
    AboutComponent,
    ImageCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
