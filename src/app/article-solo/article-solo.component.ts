import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Article } from '../models/Article';
import { ArticleService } from '../services/articles.services';


@Component({
  selector: 'app-article-solo',
  standalone: true,
  imports: [NgIf],
  templateUrl: './article-solo.component.html',
  styleUrl: './article-solo.component.css'
})
export class ArticleSoloComponent {

  isPublished: boolean = true;
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);
  articleId!: number;
  article!: Article;

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.article = this.articleService.getArticleById(this.articleId);
  }
}
