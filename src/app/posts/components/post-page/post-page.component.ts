import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss',
})
export class PostPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['slug']);
    });
  }
}
