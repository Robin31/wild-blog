import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponentComponent } from "./article-component/article-component.component";
import { Article } from './models/Article';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponentComponent, NgFor, NgIf, NgClass, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Aled',
      author: 'Quelquun',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis id laborum omnis qui tempore quod et nisi quae et consectetur eius. Quo similique esse in temporibus obcaecati ea voluptate laudantium aut modi.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: 'Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      likes: 12
    },
    {
      id: 2,
      title: 'Osskour',
      author: 'Einstein',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis id laborum omnis qui tempore quod et nisi quae et consectetur eius. Quo similique esse in temporibus obcaecati ea voluptate laudantium aut modi.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: false,
      comment: '',
      likes: 522
    },
    {
      id: 3,
      title: 'Pas matinale',
      author: 'Jaimal',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis id laborum omnis qui tempore quod et nisi quae et consectetur eius. Quo similique esse in temporibus obcaecati ea voluptate laudantium aut modi.',
      image: 'https://via.placeholder.com/350x150',
      isPublished: true,
      comment: 'Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      likes: 1442
    }
  ];
}
