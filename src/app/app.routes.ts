import { Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist';
import { HomeComponent } from './home/home';
import { ImageGalleryComponent } from './image-gallery/image-gallery';
import { SearchListComponent } from './search-list/search-list';

export const appRoutes: Routes = [
  { path: 'hazmat/onu', component: SearchListComponent },
  { path: ':section/:subSection', component: ImageGalleryComponent },
  { path: 'pre-hospitalar', component: ChecklistComponent },
  { path: ':section', component: ImageGalleryComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'equipment' },
];
