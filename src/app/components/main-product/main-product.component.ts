import { Component } from '@angular/core';
import {FormatComponent} from '../format/format.component';

@Component({
  selector: 'app-main-product',
  standalone: true,
  imports: [
    FormatComponent
  ],
  templateUrl: './main-product.component.html',
  styleUrl: './main-product.component.scss'
})
export class MainProductComponent {

}
