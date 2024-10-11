import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme/theme.service';
import { ActivatedRoute } from '@angular/router';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-work-form',
  templateUrl: './work-form.component.html',
  styleUrl: './work-form.component.scss',
})
export class WorkFormComponent implements OnInit {
  isHighlighted = false;
  wrongFormat = false;
  selectedFile!: File;
  show = true;
  title = '';
  slug = '';
  initialValue = '';
  time = '';
  publish = '';
  role = '';
  expert = '';
  learned = '';
  tags: string[] = [];

  init = {
    selector: 'textarea',
    plugins: 'advlist link image lists directionality',
    toolbar:
      'undo redo | styles | bold italic link | alignleft aligncenter alignright alignjustify | ltr rtl',
    skin: 'oxide-dark',
    content_css: 'dark',
    language: 'fa',
    content_style: 'body { font-family: iransans; }',
  };

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.themeService.darkMode$.subscribe((darkMode) => {
      this.show = false;
      this.init.skin = darkMode ? 'oxide-dark' : 'oxide';
      this.init.content_css = darkMode ? 'dark' : '';
      setTimeout(() => {
        this.show = true;
      }, 1);
    });

    const path = this.route.snapshot.routeConfig?.path;
    if (path === 'edit-work/:id') {
      // const postId = this.route.snapshot.paramMap.get('id');
      this.title = 'سایت شخصی';
      this.slug = 'سایت-شخصی';
      this.initialValue =
        '<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>';
      this.time = 'شهریور 1403 - مهر 1403';
      this.publish = 'مهر 1403';
      this.role = 'Front-End , Back-End Developer';
      this.expert = 'وبسایت شخصی خودم که سعی کردم خفن باشه :)';
      this.learned = 'چیز های خیلی زیادی یاد گرفتم!';
      this.tags = ['Angular', 'Laravel', 'TS'];
    }
  }

  highlight() {
    this.isHighlighted = true;
  }

  unhighlight() {
    this.isHighlighted = false;
  }

  titleChange(title: string) {
    this.slug = title.trim().replace(/\s/g, '-');
  }

  readFile(event: Event) {
    // this.loadingService.setLoading(true);
    this.wrongFormat = false;
    this.isHighlighted = false;
    const target = event.target as HTMLInputElement;
    this.selectedFile = (target.files as FileList)[0];
    const fileName = this.selectedFile.name;
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    if (
      fileExtension !== 'png' &&
      fileExtension !== 'jpg' &&
      fileExtension !== 'jpeg'
    ) {
      this.wrongFormat = true;
      // this._snackBar.openFromComponent(DangerSuccessNotificationComponent, {
      //   data: 'Please upload a CSV file',
      //   panelClass: ['notification-class-danger'],
      //   duration: 2000,
      // });
      // this.loadingService.setLoading(false);
      return;
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.tags = [...this.tags, value];
    }

    event.chipInput!.clear();

    console.log(this.tags);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags.splice(index, 1);
    }
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      const index = this.tags.indexOf(tag);
      if (index > -1) {
        this.tags.splice(index, 1);
      }
      return;
    }

    const index = this.tags.indexOf(tag);
    if (index > -1) {
      this.tags[index] = value;
    }
  }
}
