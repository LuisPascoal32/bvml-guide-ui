// src/app/image-gallery/image-gallery.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ImageDialogComponent } from '../image-dialog/image-dialog';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.html',
  styleUrls: ['./image-gallery.scss'],
  standalone: true,
  imports: [MatCardModule],
})
export class ImageGalleryComponent {
  images: any[] = [];
  sectionHeader = '';
  subSectionHeader = '';

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const section = params['section'];
      const subSection = params['subSection'];

      this.sectionHeader = section;
      this.subSectionHeader = subSection;

      this.imageService
        .loadImages(section, subSection)
        .subscribe((data) => (this.images = data));
    });
  }

  openImage(imageUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageUrl },
    });
  }
}
