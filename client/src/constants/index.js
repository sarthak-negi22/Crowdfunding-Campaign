import { createCampaign, dashboard, logout, payment, profile, withdraw, logo } from '../assets';

export const navlinks = [
  {
    name: 'landingpage',
    imgUrl: logo,
    link: '/landing-page',
  },
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: payment,
    link: '/send-complaints',
    // disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/about-us',
    // disabled: true,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/logout',
    // disabled: true,
  },
];