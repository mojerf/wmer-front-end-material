import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../../shared/models/comment';
import { Title } from '@angular/platform-browser';
import { MatChipSet, MatChip } from '@angular/material/chips';
import { CommentSectionComponent } from '../../../shared/components/comment-section/comment-section.component';

const WORK = {
  id: 1,
  title: 'سایت شخصی',
  overview: '<p>وبسایت شخصی خودم که سعی کردم خفن باشه :)</p>',
  learn: 'چیز های خیلی زیادی یاد گرفتم!',
  description:
    '<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>',
  date: 2024,
  tags: ['Angular', 'Laravel', 'TS'],
  image: 'image/website_screenshot.png',
  fullImage: 'image/work-full.png',
  author: 'مجتبی عرفان راد',
  publishDate: 'مهر 1403',
  timeline: 'شهریور 1403 - مهر 1403',
  role: 'Front-End , Back-End Developer',
};

const COMMENTS: Comment[] = [
  {
    id: 1,
    parentId: 0,
    date: '4 روز پیش',
    author: 'ممد',
    text: 'عالی بود خداییش!',
  },
  {
    id: 2,
    parentId: 1,
    date: '3 روز پیش',
    author: 'رضا',
    text: 'حال نکردم خیلی بد بود.',
  },
  {
    id: 3,
    parentId: 0,
    date: '2 روز پیش',
    author: 'عباس',
    text: 'داوشمی.',
  },
];

@Component({
    selector: 'app-work-page',
    templateUrl: './work-page.component.html',
    styleUrl: './work-page.component.scss',
    imports: [MatChipSet, MatChip, CommentSectionComponent]
})
export class WorkPageComponent implements OnInit {
  work = WORK;
  title = this.work.title;
  needCard = false;
  slug!: string;
  comments = COMMENTS;

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });

    this.titleService.setTitle('مجتبی عرفان راد | ' + this.work.title);
  }
}
