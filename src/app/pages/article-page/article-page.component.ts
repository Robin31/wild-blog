import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleService } from '../../services/articles.services';
import { Article } from '../../models/Article';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.css'
})
export class ArticlePageComponent {
  isPublished: boolean = true;
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  articleService: ArticleService = inject(ArticleService);
  articleId!: number;
  article!: Article;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
    this.article = this.articleService.getArticleById(this.articleId);
  }
}
