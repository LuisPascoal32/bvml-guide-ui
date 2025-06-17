import { Routes } from '@angular/router';
import { ImageGalleryComponent } from './image-gallery/image-gallery';

export const appRoutes: Routes = [
  { path: ':section/:subSection', component: ImageGalleryComponent },
  { path: ':section', component: ImageGalleryComponent },
  { path: '', redirectTo: 'equipment', pathMatch: 'full' },
  { path: '**', redirectTo: 'equipment' },
];
