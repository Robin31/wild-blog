import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponentComponent } from "./article-component/article-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nemo';
}
