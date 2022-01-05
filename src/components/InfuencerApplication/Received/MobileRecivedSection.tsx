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
  Divider,
  withStyles,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { __tr } from "../../../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../../../styles/CampaignTable.module.scss";
import influencers from "../../../core/api/influencers.json"

import { ReactComponent as Filtering } from "../../../src/assets/filtering.svg";

export function MobileRecivedSection() {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableBody>
            {influencers.map((c) => {
              return (
                <div key={c.id}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between",marginTop:'1em'}}
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

                    <div style={{ display: "flex" }}>
                      <div>
                        <Button
                          size="small"
                          style={{
                            background: "#279B44",
                            color: "white",
                            width: "5rem",
                            height: "1.8rem",
                            marginRight: "0.5rem",
                          }}
                        >
                          Shortlist
                        </Button>
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
                  </div>

                  <div style={{ display: "flex", marginTop: "1rem",marginBottom:'1em' }}>
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
                </div>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
