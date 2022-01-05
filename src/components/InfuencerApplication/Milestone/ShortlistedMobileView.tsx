import {
    Avatar,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Button,
    Checkbox,
    Box,
    withStyles,
    Divider
  } from "@material-ui/core";
  import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
  import { __tr } from "../../../i18n";
  import { MdPerson, MdMoreVert } from "react-icons/md";
  import styles from "../../../styles/CampaignTable.module.scss";
  import { Routes } from "../../../routes";
  import influencers from "../../../core/api/influencers.json";
  import { TextTransformNoneButton } from '../../ui/TextTransformNoneButton';
  
  
  const PayButton = withStyles({
    root: {
      padding: 16,
    },
  })(TextTransformNoneButton);
  
  
  
  export function MobileNewInfluencerListSort() {
    return (
      <div >
        <TableContainer >
          <Table>
            <TableBody>
              {influencers.map((c) => {
                return (
                  <div key={c.id}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: '1em' }}>
                      <div >
                        <div className={styles.campaignTitleRow}>
                          <Avatar style={{ width: "30px", height: "30px" }}>
                            <MdPerson size={20} />
                          </Avatar>
                          <div style={{ marginLeft: "0.3rem" }}>
                            <Typography variant="body1" className={styles.title} style={{
                              fontSize: "0.75rem",
                              fontWeight: "600"
                            }}>
                              {c.influencerName}
                            </Typography>
                            <Typography
                              style={{
                                fontSize: "0.7em",
                                marginLeft: "0.5em",
                                marginBottom: "-1.2em",
                              }}
                            >
                              {c.accountname}
                            </Typography>
                            <progress
                              style={{
                                marginTop: "1px",
                                width: "4.4rem",
                                height: "5px",
                                marginLeft: "0.3rem",
                              }}
                              value="30"
                              max="100"
                            ></progress>
                            <Typography variant="body1" className={styles.title} style={{
                              fontSize: "0.7em",
                              marginLeft: "0.5em",
                              marginBottom: "-1.2em",
                            }}>
                              {c.match}
                            </Typography>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          backgroundColor: "#C61E39",
                          width: "1.8rem",
                          height: "1.8rem",
                          borderRadius: "3px",
                        }}
                      >
                        <DeleteOutlineIcon
                          style={{ color: "white", margin: "2px" }}
                        />
                      </div>
                    </div>
                    <div style={{ display: "flex", marginTop: "1rem",marginBottom:"1em" }}>
                      <div style={{ fontWeight: "600", fontSize: "0.6rem", marginLeft: "2.6rem" }}>
                        <h4 style={{ margin: "0px", color: "#848484E5" }}>  {__tr("followers")}</h4>
                        {c.followers}
                      </div>
                      <div style={{ fontWeight: "600", fontSize: "0.6rem", marginLeft: "1.6rem" }}>
                        <h4 style={{ margin: "0px", color: "#848484E5" }}> {__tr("engagement")}</h4>
                        {c.engagementRate}%
                      </div>
                    </div>
                    <Divider />
  
                  </div>
                );
              })}
            </TableBody>
          </Table>
  
        </TableContainer>
        <Box paddingY={2}>
          {/* <Link to="/OrderInfluencerSummary"> */}
          <PayButton
            fullWidth
            color='primary'
            variant='contained'
            disableElevation
  
          >
            {__tr('proceedtoPay&Hire')}
  
          </PayButton>
  
          {/* </Link> */}
        </Box>
  
      </div>
    );
  }
  