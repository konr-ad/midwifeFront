import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ImageCarouselComponent} from './image-carousel/image-carousel.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {ConsultListComponent} from './consult-list/consult-list.component';
import {CourseListComponent} from './course-list/course-list.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ImageCarouselComponent, TestimonialsComponent, ConsultListComponent, CourseListComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midwifeFront';
}
