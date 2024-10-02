import { Routes } from '@angular/router';
import { ArticleComponentComponent } from './article-component/article-component.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ArticleSoloComponent } from './article-solo/article-solo.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path: '', component: ArticleComponentComponent},
  {path: 'article/:id', component: ArticleSoloComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundPageComponent},
];
