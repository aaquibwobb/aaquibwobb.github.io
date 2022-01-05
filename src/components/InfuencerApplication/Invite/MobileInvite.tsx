import {
  Avatar,
  Table,
  TableBody,
  TableContainer,
  Typography,
  Button,
  Box,
  Divider
} from "@material-ui/core";
import { __tr } from "../../../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import styles from "../../../styles/CampaignTable.module.scss";
import influencers from "../../../core/api/influencers.json";

export function MobileInvite() {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableBody>
            {influencers.map((c) => {
              return (
                <Box key={c.id}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between",marginTop: "10px"}}
                  >
                    <div>
                      <div className={styles.campaignTitleRow}>
                        <Avatar style={{ width: "30px", height: "30px" }}>
                          <MdPerson size={20} />
                        </Avatar>
                        <div style={{ marginLeft: "0.3rem" }}>
                          <Typography
                            variant="body1"
                            className={styles.title}
                            style={{
                              fontSize: "0.75rem",
                              fontWeight: "600",
                            }}
                          >
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
                          <Typography
                            variant="body1"
                            className={styles.title}
                            style={{
                              fontSize: "0.7em",
                              marginLeft: "0.5em",
                              marginBottom: "-1.2em",
                            }}
                          >
                            {c.match}
                          </Typography>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Button
                        size="small"
                        style={{
                          border: "1px solid #012FB7",
                          color: "#012FB7",
                          width: "5rem",
                          height: "1.8rem",
                        }}
                      >
                        Invite
                      </Button>
                    </div>
                  </div>

                  <div style={{ display: "flex", marginTop: "1rem", marginBottom: "1em"}}>
                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "0.6rem",
                        marginLeft: "2.6rem",
                      }}
                    >
                      <h4 style={{ margin: "0px", color: "#848484E5" }}>
                        {" "}
                        {__tr("followers")}
                      </h4>
                      {c.followers}
                    </div>

                    <div
                      style={{
                        fontWeight: "600",
                        fontSize: "0.6rem",
                        marginLeft: "1.6rem",
                      }}
                    >
                      <h4 style={{ margin: "0px", color: "#848484E5" }}>
                        {" "}
                        {__tr("engagement")}
                      </h4>
                      {c.engagementRate}%
                    </div>
                  </div>
                  <Divider/>
                </Box>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
