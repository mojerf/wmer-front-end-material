import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const WORK = {
  id: 1,
  title: 'سایت شخصی',
  description: '<p>وبسایت شخصی خودم که سعی کردم خفن باشه :)</p>',
  date: 2024,
  tags: ['Angular', 'Laravel', 'TS'],
  image: 'website_screenshot.png',
  fullImage: 'work-full.png',
  author: 'مجتبی عرفان راد',
};

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.scss',
})
export class WorkPageComponent implements OnInit {
  work = WORK;
  title = this.work.title;
  needCard = false;
  slug!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });

    document.getElementById('work-text')!.innerHTML = this.work.description;
  }
}
