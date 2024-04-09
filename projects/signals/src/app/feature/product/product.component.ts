import { Component, input } from '@angular/core';
import { watch } from '../../../../../model';

@Component({
  selector: 'isdi-product',
  standalone: true,
  imports: [],
  template: `
    <li>
      <img
        [src]="
          'https:  //www.pinterest.es/pin/453808099958643100/' +
          watchModel().brand
        "
        [alt]="'Image of a' + watchModel().brand"
        height="200"
      />
    </li>
    <li>
      <p>Brand: {{ watchModel().brand }}</p>
    </li>
    <li>
      <p>Model: {{ watchModel().model }}</p>
    </li>
    <li>
      <p>Price: {{ watchModel().price }}</p>
    </li>
    <li>
      <p>Available: {{ watchModel().available ? 'yes' : 'no' }}</p>
    </li>
  `,
  styles: ``,
})
export class ProductComponent {
  watchModel = input<watch>({} as watch);
}
