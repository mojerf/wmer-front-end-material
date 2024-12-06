import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './components/dashboard-main/dashboard-main.component';
import { DashboardTemplateComponent } from './components/dashboard-template/dashboard-template.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { SettingsComponent } from './components/settings/settings.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { OrdersComponent } from './components/orders/orders.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DashboardWorksComponent } from './components/dashboard-works/dashboard-works.component';
import { DashboardPostsComponent } from './components/dashboard-posts/dashboard-posts.component';
import { DashboardProductsComponent } from './components/dashboard-products/dashboard-products.component';
import { DashboardSalesComponent } from './components/dashboard-sales/dashboard-sales.component';
import { PostFormComponent } from './components/dashboard-posts/post-form/post-form.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ProductFormComponent } from './components/dashboard-products/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { WorkFormComponent } from './components/dashboard-works/work-form/work-form.component';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    DashboardMainComponent,
    DashboardTemplateComponent,
    SettingsComponent,
    OrdersComponent,
    DashboardWorksComponent,
    DashboardPostsComponent,
    DashboardProductsComponent,
    DashboardSalesComponent,
    PostFormComponent,
    ProductFormComponent,
    WorkFormComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    EditorModule,
    FormsModule,
    MatChipsModule,
  ],
})
export class DashboardModule {}
