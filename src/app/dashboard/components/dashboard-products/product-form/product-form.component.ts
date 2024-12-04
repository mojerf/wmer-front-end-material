import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../shared/services/theme/theme.service';
import { ActivatedRoute } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrl: './product-form.component.scss',
    imports: [MatFormField, MatLabel, MatInput, FormsModule, EditorComponent, MatButton]
})
export class ProductFormComponent implements OnInit {
  isHighlighted = false;
  wrongFormat = false;
  selectedFile!: File;
  show = true;
  title = '';
  slug = '';
  initialValue = '';
  expert = '';
  price = 0;
  newPrice = 0;
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
    if (path === 'edit-product/:id') {
      // const productId = this.route.snapshot.paramMap.get('id');
      this.title = 'تبدیل قالب html به وردپرس با pinegrow';
      this.slug = 'تبدیل-قالب';
      this.expert =
        'یه قالب شخصی خیلی خفن که مطمئن باشی بهتر از این هیچ جا پیدا نمیکنی. خیلی خوبه خدایی. تازه کلی دکمه و چیز میز خفن هم داره که تو عمرت هیچ جا ندیدی. بخرش مطمئن باش عشق میکنی باهاش.';
      this.initialValue =
        '<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>';
      this.price = 60000;
      this.newPrice = 50000;
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
