import { Fragment } from 'react';
import {
  Categories,
  BestSellers,
  FeaturedPosts,
  Services,
  Cta,
  Testimonials,
} from './components';
import POSTS from '@/data/posts';
import SERVICES from '@/data/services';
import CATEGORIES from '@/data/categories';

export default function Home() {
  return (
    <Fragment>
      <Categories categories={CATEGORIES} />
      <BestSellers />
      <Services services={SERVICES} />
      <FeaturedPosts posts={POSTS} />
      <Testimonials />
      <Cta />
      {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab> */}
    </Fragment>
  );
}
