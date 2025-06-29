// src/app/image-gallery/image.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ImageService {
  constructor(private http: HttpClient) {}

  loadImages(section: string, subSection?: string): Observable<any[]> {
    const basePath = subSection
      ? `assets/gallery/${section}/${subSection}/images.json`
      : `assets/gallery/${section}/images.json`;

    return this.http.get<any[]>(basePath).pipe(
      catchError(() => of([])) // return empty array if not found or error
    );
  }
}
