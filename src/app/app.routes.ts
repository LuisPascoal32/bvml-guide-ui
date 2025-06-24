import { Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist';
import { ImageGalleryComponent } from './image-gallery/image-gallery';
import { SearchListComponent } from './search-list/search-list';

export const appRoutes: Routes = [
  { path: 'specific/materias-perigosas', component: SearchListComponent },
  { path: ':section/:subSection', component: ImageGalleryComponent },
  //{ path: ':section', component: ImageGalleryComponent },
  { path: 'pre-Hospitalar', component: ChecklistComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'equipment' },
];
