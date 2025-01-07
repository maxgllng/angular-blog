import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUserComponent } from './pages/about-user/about-user.component';
import { AboutAdminComponent } from './pages/about-admin/about-admin.component';
import { HomeUserComponent } from './pages/home-user/home-user.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { BlogUserComponent } from './pages/blog-user/blog-user.component';
import { BlogAdminComponent } from './pages/blog-admin/blog-admin.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUserComponent,
    AboutAdminComponent,
    HomeUserComponent,
    HomeAdminComponent,
    BlogUserComponent,
    BlogAdminComponent,
    CreatePostComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
