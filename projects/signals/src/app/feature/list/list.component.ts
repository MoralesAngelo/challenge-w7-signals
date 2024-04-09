import { Component } from '@angular/core';
import { StoreService } from '../../core/store.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'isdi-list',
  standalone: true,
  template: `<ul>
    @for (item of this.repoSvc.sendWatchs(); track item.brand) {
    <isdi-product [watchModel]="item" ] />
    }
  </ul> `,
  styles: ``,
  imports: [ProductComponent],
})
export class ListComponent {
  constructor(public repoSvc: StoreService) {}
}
