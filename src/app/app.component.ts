import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {MainProductComponent} from './components/main-product/main-product.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ImageBackgroundComponent} from './components/image-background/image-background.component';
import {HistoireComponent} from './components/histoire/histoire.component';
import {OtherProductsComponent} from './components/other-products/other-products.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, MainProductComponent, NavBarComponent, ImageBackgroundComponent, HistoireComponent, OtherProductsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
