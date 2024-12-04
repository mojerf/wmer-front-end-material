import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatChipSet, MatChip } from '@angular/material/chips';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

const WORKS = [
  {
    id: 1,
    name: 'سایت شخصی',
    tags: ['Angular', 'Laravel', 'TS'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 2,
    name: 'سایت فروشگاهی',
    tags: ['Sass', 'TS', 'Laravel'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 3,
    name: 'اتوماسیون اداری',
    tags: ['Angular', 'Laravel'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
  {
    id: 4,
    name: 'سایت دانلود فیلم',
    tags: ['HTML', 'CSS', 'PHP'],
    image: 'image/website_screenshot.png',
    url: 'سایت-شخصی',
  },
];

@Component({
    selector: 'app-work-main',
    templateUrl: './work-main.component.html',
    styleUrl: './work-main.component.scss',
    imports: [RouterLink, MatChipSet, MatChip, PaginatorComponent]
})
export class WorkMainComponent {
  title = 'نمونه کار ها';
  works = WORKS;
}
