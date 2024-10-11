import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme/theme.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss',
})
export class PostFormComponent implements OnInit {
  isHighlighted = false;
  wrongFormat = false;
  selectedFile!: File;
  show = true;
  title = '';
  slug = '';
  initialValue = '';
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
    if (path === 'edit-post/:id') {
      // const postId = this.route.snapshot.paramMap.get('id');
      this.title = 'تبدیل قالب html به وردپرس با pinegrow';
      this.slug = 'تبدیل-قالب';
      this.initialValue =
        '<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>';
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
}
