import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent implements OnInit {
  images: string[] = [
    "https://lactusia.pl/userdata/public/boxes/cee9459dd6cd8c8c1fa839bd59c5fbe8.jpg",
    "https://lactusia.pl/userdata/public/boxes/f9ba16a044ec39a2f76c2be8f9362704.jpg",
    "https://lactusia.pl/userdata/public/boxes/92fab392f1bc492a58384f47923fe404.jpg"
  ];

  currentImageIndex: number = 0;
  currentImage: string = this.images[0]
  fadeIn: boolean = true;

  ngOnInit() {
    this.startImageRotation();
  }

  startImageRotation(): void {
    setInterval(() => {
      this.fadeIn = false;

      // Delay to allow fade-out effect
      setTimeout(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.currentImage = this.images[this.currentImageIndex];
        this.fadeIn = true;
      }, 700);
    }, 8000);
  }
}
