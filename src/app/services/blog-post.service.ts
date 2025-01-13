import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  // Förstrukturerade inlägg
  private blogPosts: BlogPost[] = [
    new BlogPost(
      'bittersweet',
      'skyli4.jpg',
      `Did something cross your mind?
Cause I can see it in your eyes
You wonder why
I didn't wanna shut you out
But I was bleeding every time
You came around

Of all of the things I've said and done
I still remember
Every single dream
It's fading to whatever
But all of my demons helped me out
Said 'you don't need it
Cause you're not that weak
And nothing lasts forever`,
      new Date('2023-12-01'),
      10,
      2,
      [
        'Great song! Greetings from Brazil 😎 ',
        'Looking forward to the next one!',
      ]
    ),
    new BlogPost(
      'her',
      'skyli1.png',
      `My room is dark, I should thinking about you
      But I’m so tired after fighting with truth
      They tell me how it feels like, you know when it feels right
      Think I finally get it
      So I have to jump out of the blue
      That’s me and you
      But you wouldn’t get it until I say it
      Boy I’m so sorry, sorry for making this all about me
      What if I like her?`,
      new Date('2023-12-15'),
      20,
      5,
      [
        'This was not the best song... very disappointed! 😡',
        'This song helped me gain the courage to come out. I am forever grateful. Love from Missy /x',
      ]
    ),
    new BlogPost(
      'satellites',
      'skyli2.png',
      `Hate some of the things that I do
      I know reasons to hide from you
      But sometimes I feel like I can't trust myself no more
      I started wondering how you can
      But your lips are still on my body
      Like I wanted to (ha-ha)
      I'm a satellite with you
      Drifting away, creating distance
      Won't be messing it up from this altitude
      But take me down
      I'm a satellite with you`,
      new Date('2024-01-01'),
      30,
      1,
      [
        'I heard this song for the first time today and it changed my life. Wow! Sky Li for president.',
        'i wanna be your satellite sky li!!',
        'Such a greate tune. Love love love! 💋',
      ]
    ),
  ];

  constructor() {
    this.loadPostsFromLocalStorage();
  }

  // Hämta alla blogg-inlägg
  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  // Lägg till ett nytt inlägg och spara till local storage
  addBlogPost(post: BlogPost): void {
    this.blogPosts.push(post);
    this.savePostsToLocalStorage();
  }

  // Ladda inlägg från local storage
  private loadPostsFromLocalStorage(): void {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    if (storedPosts.length > 0) {
      this.blogPosts = storedPosts.map(
        (post: any) =>
          new BlogPost(
            post.title,
            post.thumbnailUrl,
            post.body,
            new Date(post.creationDate),
            post.likes,
            post.dislikes,
            post.comments
          )
      );
    }
  }

  // Spara inlägg till local storage
  private savePostsToLocalStorage(): void {
    localStorage.setItem('blogPosts', JSON.stringify(this.blogPosts));
  }
}
