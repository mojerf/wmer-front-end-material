import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';
import { FullProduct } from '../../../shared/models/cart';
import { Comment } from '../../../shared/models/comment';
import { Title } from '@angular/platform-browser';

const PRODUCT: FullProduct = {
  id: 1,
  title: 'قالب شخصی حرفه ای',
  description:
    '<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>',
  shortDetail:
    'یه قالب شخصی خیلی خفن که مطمئن باشی بهتر از این هیچ جا پیدا نمیکنی. خیلی خوبه خدایی. تازه کلی دکمه و چیز میز خفن هم داره که تو عمرت هیچ جا ندیدی. بخرش مطمئن باش عشق میکنی باهاش',
  image: 'image/product.jpg',
  date: '1403/07/06',
  commentCount: 10,
  author: 'مجتبی عرفان راد',
  priceWithDiscount: 50000,
  price: 60000,
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
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  product: FullProduct = PRODUCT;
  comments = COMMENTS;
  title = this.product.title;
  needCard = false;
  slug!: string;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.slug = params['slug'];
    });

    this.titleService.setTitle('مجتبی عرفان راد | ' + this.product.title);
  }

  addToBasket() {
    this.cartService.addToCart(this.product, this.slug);
  }
}
