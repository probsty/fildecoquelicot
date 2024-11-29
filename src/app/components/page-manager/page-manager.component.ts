import { Component } from '@angular/core';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {ImageBackgroundComponent} from '../image-background/image-background.component';
import {MainProductComponent} from '../main-product/main-product.component';
import {HistoireComponent} from '../histoire/histoire.component';
import {OtherProductsComponent} from '../other-products/other-products.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-page-manager',
  standalone: true,
  imports: [
    NavBarComponent,
    ImageBackgroundComponent,
    MainProductComponent,
    HistoireComponent,
    OtherProductsComponent,
    FooterComponent
  ],
  templateUrl: './page-manager.component.html',
  styleUrl: './page-manager.component.scss'
})
export class PageManagerComponent {

}
