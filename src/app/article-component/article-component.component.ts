import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/articles.services';
import { Article } from '../models/Article';
import { ArticleSoloComponent } from '../article-solo/article-solo.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [ArticleSoloComponent, RouterLink],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.css'
})
export class ArticleComponentComponent{

  articles: Article[] = inject(ArticleService).getArticles();
  articlesLiked: Article[] = [];
  
  handleLike(likedArticle: Article) {
    this.articlesLiked.push(likedArticle);
  }
}
