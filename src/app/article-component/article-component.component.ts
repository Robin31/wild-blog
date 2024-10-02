import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../services/articles.services';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.css'
})
export class ArticleComponentComponent{

  articleService: ArticleService = inject(ArticleService);
  articles: Article[] = this.articleService.getArticles();
  
}
