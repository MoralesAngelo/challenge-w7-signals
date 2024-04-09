import { Injectable, signal } from '@angular/core';
import { RepoService } from './repo.service';
import { watch } from '../../../../model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private watchSignal = signal<watch[]>([]);
  public watchState = this.watchSignal.asReadonly();
  constructor(private repoSvc: RepoService) {
    this.getProduct;
  }

  getProduct() {
    this.repoSvc.getWatchs().subscribe({
      next: (data) => {
        this.watchSignal.set(data);
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
  sendWatchs() {
    return this.watchSignal();
  }
}
