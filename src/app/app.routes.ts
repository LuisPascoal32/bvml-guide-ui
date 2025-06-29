import { Routes } from '@angular/router';
import { ChecklistComponent } from './components/checklist/checklist';
import { HomeComponent } from './components/home/home';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery';
import { SearchListComponent } from './components/search-list/search-list';

export const appRoutes: Routes = [
  { path: 'pre-hospitalar', component: ChecklistComponent },
  { path: 'hazmat/onu', component: SearchListComponent },
  { path: ':section/:subSection', component: ImageGalleryComponent },
  { path: ':section', component: ImageGalleryComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'equipment' },
];
