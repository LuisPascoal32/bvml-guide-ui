// src/app/image-gallery/image-gallery.ts
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../services/navigation/navigation.service';
import { ImageDialogComponent } from '../image-dialog/image-dialog';
import { ImageService } from './image.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.html',
  styleUrls: ['./image-gallery.scss'],
  standalone: true,
  imports: [MatCardModule, MatExpansionModule],
})
export class ImageGalleryComponent {
  highlighted: any[] = [];
  groups: any[] = [];
  header: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private imageService: ImageService,
    private navigationService: NavigationService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const section = params['section'];
      const subSection = params['subSection'];

      this.header = this.navigationService.getNavLabelByRoute(section, subSection);

      this.imageService.loadImages(section, subSection).subscribe((data: any) => {
        this.groups = data?.groups;
        this.highlighted = data?.highlighted;
        console.log(data);

      });
    });
  }

  openImage(imageUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imageUrl },
    });
  }
}
