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
import { __tr } from "../../../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from "../../../styles/CampaignTable.module.scss";
import { UppercaseSbText } from "../../ui/custom";
import { Routes } from "../../../routes";
import influencers from "../../../core/api/influencers.json";
import appliedCampaigns from "../../../core/api/appliedCampaigns.json";
import { ReactComponent as Filtering } from "../../../../src/assets/filtering.svg";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export function NewInfluencerList() {
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <UppercaseSbText
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {__tr("influencer")}
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
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {influencers.map((c) => {
              return (
                <TableRow key={c.id}>
                  <TableCell style={{ paddingLeft: "" }}>
                    <div className={styles.campaignTitleRow}>
                    <div>
                    <Checkbox />
                      </div>
                      <Avatar>
                        <MdPerson size={24} />
                      </Avatar>
                      <div style={{ marginLeft: "0.5rem" }}>
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
                            height: "7px",
                            marginLeft: "0.3rem",
                          }}
                          value="88"
                          max="100"
                        ></progress>
                        <Typography variant="body1" className={styles.title}>
                          {c.match}
                        </Typography>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {c.followers}
                  </TableCell>
                  <TableCell
                    style={{
                      textAlign: "center",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {c.engagementRate}
                  </TableCell>
                  <TableCell
                    style={{
                      padding: "0",
                    }}
                  >
                    <Button
                      size="small"
                      style={{
                        background: "green",
                        color: "white",
                        marginLeft: "3em",
                        marginBottom: "19px",
                      }}
                    >
                      Shortlist
                    </Button>
                    <div
                      style={{
                        backgroundColor: "#C61E39",
                        width: "1.8rem",
                        height: "1.8rem",
                        borderRadius: "3px",
                        display: "inline-block",
                        marginTop: "1rem",
                        marginLeft: "0.2rem",
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
