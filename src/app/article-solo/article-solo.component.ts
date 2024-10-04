import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../models/Article';



@Component({
  selector: 'app-article-solo',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './article-solo.component.html',
  styleUrl: './article-solo.component.css'
})
export class ArticleSoloComponent {

  @Input()
  article!: Article;

  @Output()
  likeEvent: EventEmitter<Article> = new EventEmitter();

  like() {
    this.article.likes++;
    this.likeEvent.emit({ ...this.article });
  }
  
}
