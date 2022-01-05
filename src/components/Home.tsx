import { TopAppBar } from './TopAppBar';
import styles from '../styles/Home.module.scss';
import { Box } from '@material-ui/core';
import { MyCampaigns } from './campaigns/MyCampaigns';
import { Redirect, Route, Switch } from 'react-router';
import { Routes } from '../routes';
import { ViewCampaign } from './campaigns/ViewCampaign';
import { DiscoverScreen } from './discover';
import { CreateCampaign } from './campaigns/create/CreateCampaign';
import { ProfileScreen } from './profile/ProfileScreen';
import { NotificationScreen } from './notifications/NotificationScreen';
import { FixedMargin } from './ui/FixedMargin';
import { FinanceScreen } from './finance/FinanceScreen';
import { UserManagementView } from './user-management/UserManagementView';
import { ReferAndEarnView } from './refer-earn/ReferAndEarnView';
import { ThreadsView } from './messaging/ThreadsView'; 
import { useWindowSize } from '../core/hooks';
import ProductPage from './StoreSection/ProductDescription/ProductPage';
import HomePage from './StoreSection/ProductPage/HomePage';
import PaymentPage from './StoreSection/PaymentDetails/PaymentPage';
import { InfluencerNavigation } from './InfuencerApplication/InfluencerNavigation';

export function Home() {
  const [width] = useWindowSize();
  return (
    <div className={styles.page}>
      {width >= 900 && (
        <div className={styles.header}>
          <TopAppBar />
        </div>
      )}
      <Box className={styles.main}>
        <Switch>
          <Route path={Routes.viewCampaign(':id')}>
            <FixedMargin>
              <ViewCampaign />
            </FixedMargin>
          </Route>
          <Route path={Routes.BaseCampaigns} exact>
            <FixedMargin>
              <MyCampaigns />
            </FixedMargin>
          </Route>
          <Route path={Routes.Discover}>
            <FixedMargin>
              <DiscoverScreen />
            </FixedMargin>
          </Route>
          <Route path={Routes.Finance}>
            <FixedMargin>
              <FinanceScreen />
            </FixedMargin>
          </Route>
          <Route path={Routes.MyProfile}>
            <FixedMargin>
              <ProfileScreen />
            </FixedMargin>
          </Route>
          <Route path={Routes.CreateCampaign}>
           <FixedMargin>
             <CreateCampaign/>
           </FixedMargin>
          </Route>
          <Route path={Routes.Notifications}>
            <FixedMargin>
              <NotificationScreen />
            </FixedMargin>
          </Route>
          <Route path={Routes.UserManagement}>
            <FixedMargin>
              <UserManagementView />
            </FixedMargin>
          </Route>
          <Route path={Routes.Affiliate}>
            <FixedMargin>
              <ReferAndEarnView />
            </FixedMargin>
          </Route>
          <Route path={Routes.Messages}>
            <ThreadsView />
          </Route>
          <Route path={Routes.StoreSection}>
            <ProductPage/>
          </Route>
          <Route path={Routes.InfluencerApplication}>
            <InfluencerNavigation/>
          </Route>
          <Route path={Routes.Home} exact>
            <Redirect to={Routes.campaigns('applied')} />
          </Route>
        </Switch>
      </Box>
    </div>
  );
}
