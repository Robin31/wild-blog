import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ArticleService } from '../../services/articles.services';
import { Article } from '../../models/Article';
import { ArticleSoloComponent } from '../../article-solo/article-solo.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MenubarModule, CommonModule, ArticleSoloComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  items: MenuItem[] | undefined;
  constructor(private router: Router) {
    this.items = [
      {
        label: 'contact',
        command: () => {
          this.router.navigate(['/contact']);
        }
      },
      {
        label: 'Se connecter',
        command: () => {
          this.router.navigate(['/sign-up']);
        }
      }
    ];
  }
  articles: Article[] = inject(ArticleService).getArticles();
  articlesLiked: Article[] = [];

  handleLike(likedArticle: Article) {
    this.articlesLiked.push(likedArticle);
  }

}
