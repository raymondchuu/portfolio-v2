export type Route = {
  readonly path: string;
  readonly title: string;
};

export interface Routes {
  readonly Home: Route;
  readonly About: Route;
  readonly Resume: Route;
}

const routes: Routes = {
  Home: {
    path: '/',
    title: 'Home'
  },
  About: {
    path: '/about/',
    title: 'About'
  },
  Resume: {
    path: '/Resume/',
    title: 'Resume'
  }
};

export default routes;
