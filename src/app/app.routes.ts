import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ContactComponent } from './contact/contact.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'article/:id', component: ArticlePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'sign-up', component: SignupFormComponent},
  {path: '**', component: NotFoundPageComponent},
];
