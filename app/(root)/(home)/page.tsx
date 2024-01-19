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

export default function Home() {
  return (
    <Fragment>
      <Categories />
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
