import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProducts, IProductState } from '../product/store';
import { NgRedux, select } from 'ng2-redux';
import { Subscription } from 'rxjs/Subscription';
import { IAppState } from '../../store';
import { AuthService } from '../../services/auth.service';
import { GET_ALL_PRODUCTS, ADD_PRODUCTS } from '../product/actions';
import { Product } from '../../classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @select((s: IAppState) => s.product.products) products;

  constructor(private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getAllProducts().subscribe(data => {
      if (data.success) {
        this.ngRedux.dispatch({ type: GET_ALL_PRODUCTS, payload: data.products });
      }
    });
  }

  onBuy(prod: any) {
    this.router.navigate(['cart', prod._id]);
  }
}
