import { Injectable } from '@angular/core';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles: Article[] = [
    {
      id: 1,
      title: 'Aled',
      author: 'Inconnu',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      image: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/image1_0.jpeg?w=1900&h=1425',
      isPublished: true,
      comment: '',
      likes: 14,
    },
    {
      id: 2,
      title: 'Osskour',
      author: 'Goerges',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      image: 'https://img.20mn.fr/BD4TiIq6QbOLf4JMqOmjzSk/1444x920_close-up-portrait-of-a-happy-offspring-chimpanzee-with-a-silly-grin-with-room-for-text',
      isPublished: true,
      comment: '',
      likes: 424,
    },
    {
      id: 3,
      title: 'Pitié',
      author: 'Mickael',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      image: 'https://www.zoologiste.com/images/xl/bonobo-baignade.jpg',
      isPublished: true,
      comment: '',
      likes: 4244,
    },
    {
      id: 4,
      title: 'SOS',
      author: 'Elvis',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      image: 'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1280,height=960,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2016/09/05/gorille.jpg',
      isPublished: true,
      comment: '',
      likes: 3,
    },
    {
      id: 5,
      title: 'Goldman',
      author: 'Jean jacques',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      image: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/8e5a2eda601070a653cca79f2be6d0d9--olives-monkey.jpg?w=1920&h=1080',
      isPublished: true,
      comment: '',
      likes: 66,
    },
    {
      id: 6,
      title: 'Cabrel',
      author: 'Francis',
      content: 'Rem veritatis sunt et ipsa sint sed iusto ratione. Et dignissimos consequatur sit perspiciatis distinctio sit modi blanditiis',
      image: 'https://www.instinct-animal.fr/wp-content/uploads/2018/10/singe-hurleur-noir-male-photo-2.jpg',
      isPublished: true,
      comment: '',
      likes: 784,
    }
  ]

  getArticles(): Article[]{
    return this.articles
  }

  getArticleById(id: number): Article {
    return this.articles.find((article: Article) => article.id == id) as Article;
  }
}