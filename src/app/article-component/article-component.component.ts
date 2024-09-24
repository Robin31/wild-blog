import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-component.component.html',
  styleUrl: './article-component.component.css'
})
export class ArticleComponentComponent {

  article = {
    title: 'Aled',
    author: 'Jeanne Osskour',
    image: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/image1_0.jpeg?w=1900&h=1425',
    content: 'Lorem ipsum dolor sit amet. Ut voluptas eligendi et itaque minima et omnis adipisci sed rerum esse sit tenetur mollitia vel recusandae corporis. Vel voluptatibus dignissimos et dolores soluta et quis inventore et consequatur dignissimos et laboriosam vitae in sapiente numquam. Ut dolores dolorem eum provident reiciendis ut enim omnis sit error ipsa sit enim voluptatem et porro dolores ea nesciunt omnis.',
    comment: '',
  };
  isPublished: boolean = true;

  hideData() {
    return (this.isPublished = false)
  }

  showData() {
    return (this.isPublished = true)
  }
}
