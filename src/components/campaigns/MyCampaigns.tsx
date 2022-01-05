import { Box, Container, Grid, Paper,IconButton,Popover,Hidden} from "@material-ui/core";
import { useLocation } from "react-router";
import {useWindowSize} from "../../core/hooks"
import { AppMetadata } from "../ui/AppMetadata";
import { BoxNewCampaign } from "./BoxNewCampaign";
import { BoxRecommendedCampaigns } from "./BoxRecommendedCampaigns";
import { CampaignStatusList } from "./CampaignStatusList.tsx";
import { PostedCampaignTable } from "./PostedCampaignTable";
import { CampaignsWithDeliverables } from "./CampaignsWithDeliverables";
import { CampaignTabs } from "./CampaignTabs";
import { MainCarousel } from "./MainCarousel";
import { useState } from "react";
import { CampaignFilters } from "../../core";
import qs from "querystring";
import { useMemo } from "react";
import MobileViewMyCampaign from "./mobileView/myCampaign/MobileViewMyCampaign";
import { CampaignWithDeliverablesMobile } from "./CampaignWithDeliverablesMobile";
import MobileHeader from '../ui/mobileHeader';
import { RiSearchLine } from 'react-icons/ri';
import { MoreVert } from '@material-ui/icons';
import styles from '../messaging/mobile/messagesList/messagesList.module.scss';



export function MyCampaigns() {
  const [filter, setActiveFilter] = useState(CampaignFilters[0]);
  const location = useLocation();
  const status = useMemo(
    () => qs.parse(location.search.replace("?", "")).filter || "applied",
    [location]
  );
  
  const [width]=useWindowSize()

  // const MessagesList: React.FC<Props> = ({ onCreateGroupClick }) => {
    // state
    const [openOptions, setOpenOptions] = useState<boolean>(false);
    const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement>();
  
    //open options modal
    const openOptionsModal = (el: HTMLElement) => {
      setMenuAnchorEl(el);
      setOpenOptions(true);
    };
  
  return (
    <Grid container spacing={3} style={{ marginTop: "60px" }}>
      <Hidden mdUp>
        <Grid item xs={12}>
       <Box className={styles.mobileHeaderContainer}>
        <MobileHeader pageTitle='My Campaigns'>
          <div className={styles.HeaderChildren}>
            <IconButton key='1'>
              <RiSearchLine size={25} />
            </IconButton>
            {/* <IconButton
              key='2'
              onClick={(ev: React.MouseEvent<HTMLElement>) => {
                openOptionsModal(ev.currentTarget);
              }}
            >
              <MoreVert fontSize='medium' />
            </IconButton> */}
          </div>
        </MobileHeader>
      </Box>
      </Grid>
      </Hidden>
     <Grid item xs={12}>
        <Container>
          <Box paddingTop={4} paddingBottom={2}>
            {/* <MainCarousel /> */}
          </Box>
        </Container>
      </Grid>
       <Grid item xs={12}>
				<Box paddingY={2}>
					<Container>
						<CampaignTabs />
					</Container>
				</Box>
			</Grid> 
      {width >= 700 ?(<Grid item xs={12} md={4} lg={3}>
        <Paper elevation={0}>
          <CampaignStatusList filter={filter} onChange={setActiveFilter} />
        </Paper>
      </Grid>):(<MobileViewMyCampaign/>)}

      
      {width >= 700 ? (  
      <Grid item xs={12} md={8} lg={6}>
        <Paper elevation={0}>
          {status && status === "posted" && <PostedCampaignTable />}
          {status && status === "applied" && <CampaignsWithDeliverables />}
        </Paper>
      </Grid>):(<CampaignWithDeliverablesMobile/>)}
     
      <Grid item md={12} lg={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={12}>
            <Paper elevation={0}>
              <BoxNewCampaign />
            </Paper>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={12}>
            <Paper elevation={0}>
              <BoxRecommendedCampaigns />
            </Paper>
          </Grid> */}
          <Grid item xs={12}>
            <Box>
              <AppMetadata />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    
    </Grid>
  );
}
