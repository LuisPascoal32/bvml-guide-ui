import { Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist';
import { ImageGalleryComponent } from './image-gallery/image-gallery';

export const appRoutes: Routes = [
  { path: ':section/:subSection', component: ImageGalleryComponent },
  //{ path: ':section', component: ImageGalleryComponent },
  { path: 'preHospitalar', component: ChecklistComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'equipment' },
];
