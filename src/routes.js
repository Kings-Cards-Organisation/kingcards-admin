// Pages
import {
  AppBar,
  Autocomplete,
  Avatars,
  Home,
  Social
} from './pages';

import Withdrawals from './pages/admin-pages/Withdrawals'
import Trades from './pages/admin-pages/Trades'
import UserTransactions from './pages/admin-pages/UserTransactions'

// Icons
import AppsIcon from '@material-ui/icons/Apps';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExploreIcon from '@material-ui/icons/Explore';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';

export default {
  items: [
    {
      path: '/admin',
      name: 'Home',
      type: 'link',
      icon: ExploreIcon,
      component: Home
    },

    {
      path: '/admin',
      name: 'Transactions',
      type: 'submenu',
      icon: AppsIcon,
      badge: {
        type: 'primary',
        value: '2'
      },
      children: [
        {
          path: '/withdrawals',
          name: 'Withdrawals',
          component: Withdrawals
        },
        {
          path: '/trades',
          name: 'Trades',
          component: Trades
        }
      ]
    },

    {
      path: '/admin',
      name: 'Users',
      type: 'submenu',
      icon: PersonIcon,
      badge: {
        type: 'primary',
        value: '3'
      },
      children: [
        {
          path: '/transaction-stats',
          name: 'Transaction Stats',
          component: UserTransactions
        },
        {
          path: '/usage-stats',
          name: 'Usage Stats',
          component: Social
        },
        {
          path: '/edit-user-data',
          name: 'Edit User Data',
          component: Social
        }
      ]
    },

    {
      path: '/admin',
      name: 'Trade Volume',
      type: 'submenu',
      icon: EqualizerIcon,
      badge: {
        type: 'primary',
        value: '3'
      },
      children: [
        {
          path: '/btc-trade-volume',
          name: 'BTC',
          component: AppBar
        },
        {
          path: '/cards-trade-volume',
          name: 'Cards',
          component: Autocomplete
        },
        {
          path: '/aggregate-trade-volumes',
          name: 'Aggregates',
          component: Avatars
        }
      ]
    },

    {
      path: '/admin',
      name: 'Manage',
      type: 'submenu',
      icon: SettingsIcon,
      badge: {
        type: 'primary',
        value: '2'
      },
      children: [
        {
          path: '/manage-gift-cards',
          name: 'Gift Cards',
          component: AppBar
        },
        {
          path: '/manage-trades',
          name: 'Trades',
          component: Autocomplete
        }
      ]
    }
  ]
};
