import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './feature/header/header.component';
import { FooterComponent } from './feature/footer/footer.component';
import { ListComponent } from './feature/list/list.component';

@Component({
  selector: 'isdi-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ListComponent],
})
export class AppComponent {
  title = 'Watchs';
}
