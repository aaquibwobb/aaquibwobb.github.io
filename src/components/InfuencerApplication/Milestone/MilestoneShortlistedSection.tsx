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
  } from "@material-ui/core";
  import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
  import { __tr } from "../../../i18n";
  import { MdPerson, MdMoreVert } from "react-icons/md";
  import { Link } from "react-router-dom";
  import styles from "../../../styles/CampaignTable.module.scss";
  import { UppercaseSbText } from "../../ui/custom";
  // import { Routes } from "../../../routes";
  import influencers from "../../../core/api/influencers.json";
  
  
  import { ReactComponent as Filtering } from "../../../../src/assets/filtering.svg";
  
  import { ReactComponent as Deletebutton } from "../../../src/assets/icons/delete.svg";
  
  export function NewInfluencerList() {
    return (
      <div  style={{ paddingTop: "1rem" }}>
        <TableContainer style={{ fontSize: "1rem" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <UppercaseSbText
                    style={{ fontSize: "16px", fontWeight: "600" }}
                  >
                    {__tr("influencers")}
                  </UppercaseSbText>
                </TableCell>
                <TableCell>
                  <UppercaseSbText
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginLeft: "2.5em",
                    }}
                  >
                    {__tr("followers")}
                    <Filtering />
                  </UppercaseSbText>
                </TableCell>
                <TableCell>
                  <UppercaseSbText
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginLeft: "2.5em",
                    }}
                  >
                    {__tr("engagement")}
                    <Filtering />
                  </UppercaseSbText>
                </TableCell>
                <TableCell>
                  <UppercaseSbText
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      marginLeft: "2.5em",
                    }}
                  >
                    bid price
                    <Filtering />
                  </UppercaseSbText>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {influencers.map((c) => {
                return (
                  <TableRow key={c.id}>
                   <TableCell style={{ paddingLeft: "0" }}>
                      <div className={styles.campaignTitleRow}>
                      <div style={{  }}>
                      <Checkbox />
                    </div>
                        <Avatar>
                          <MdPerson size={24} />
                        </Avatar>
                        <div>
                          <Typography variant="body1" className={styles.title}>
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
                          <Typography variant="body1" className={styles.title}>
                            {c.match}
                          </Typography>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell style={{ textAlign: "center", fontWeight: "500" }}>
                      {c.followers}
                    </TableCell>
                    <TableCell style={{ textAlign: "center", fontWeight: "500" }}>
                      {c.engagementRate}
                    </TableCell>
                    <TableCell style={{ textAlign: "center", fontWeight: "500" }}>
                      {c.bidprice}
                    </TableCell>
                    <TableCell>
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
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  