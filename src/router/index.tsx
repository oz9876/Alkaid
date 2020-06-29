import home from '../pages/home';
import login from '../pages/login';
import activityRoom from '../pages/activity-room';
import activityEdit from '../pages/activity-edit';

import worksGallery from '../pages/works-gallery';

const routes = [
  
  {
    path: '/home',
    component: home
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/activity-room',
    component: activityRoom
  },
  {
    path: '/activity-edit/:id',
    component: activityEdit
  },
  {
    path: '/works-gallery',
    component: worksGallery
  },
//   {
//     path: '',
//     component: worksGallery,
//     // routes: [
//     //   {
//     //     path: '/about',
//     //     component: About
//     //   },
//     //   {
//     //     path: '/link',
//     //     component: Link
//     //   }
//     // ]
//   }
    {
      path: '/',
      component: home
    },
];

export default routes;