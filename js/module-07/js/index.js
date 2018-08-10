'use strict';

const posts = [
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 1',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-1.com'
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-2.com'
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com'
  }
];

const wrapper = document.querySelector('.wrapper');
const cardList = createCards(posts);
wrapper.append(...cardList);

function createPostCard({img = '', title = '', text = '', link = '#'}) {
  const post = document.createElement('div');
  post.classList.add('post');
  const post__image = document.createElement('img');
  post__image.setAttribute('src', img);
  post__image.setAttribute('alt', 'post image');
  post__image.classList.add('post__image');
  const post__title = document.createElement('h2');
  post__title.classList.add('post__title');
  post__title.textContent = title;
  const post__text = document.createElement('p');
  post__text.classList.add('post__text');
  post__text.textContent = text;
  const button = document.createElement('a');
  button.classList.add('button');
  button.setAttribute('href', link);
  button.text = 'Read more';
  post.append(post__image, post__title, post__text, button);
  return post;
}

function createCards(posts) {
  return posts.map(item => createPostCard(item));
}