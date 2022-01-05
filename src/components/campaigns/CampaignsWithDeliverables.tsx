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
} from "@material-ui/core";
import { __tr } from "../../i18n";
import { MdPerson, MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../styles/CampaignTable.module.css";
import { UppercaseSbText } from "../ui/custom";
import { Routes } from "../../routes";
import appliedCampaigns from "../../core/api/appliedCampaigns.json";
import { css } from "@emotion/css";

export function CampaignsWithDeliverables() {
  return (
    <div className="section" style={{ paddingTop: "15px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>

              <TableCell>
                <label style={{textTransform:"uppercase"}}>{__tr("campaigns")}</label>
              </TableCell>
              <TableCell>
                <label style={{textTransform:"uppercase"}}>{__tr("status")}</label>
              </TableCell>
              <TableCell>
                <label style={{textTransform:"uppercase"}}>{__tr("applicants")}</label>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appliedCampaigns.map((c) => {
              return (
                <TableRow key={c.campaignId}>
                  <TableCell>
                    <Avatar className="avatar">
                      <MdPerson size={15} />
                    </Avatar>
                  </TableCell>
                  <TableCell style={{ fontSize: "1rem" }}>
                    <div className="campaignTitleRow">{c.campaignName}</div>
                  </TableCell>
                  <TableCell style={{ fontSize: "1rem" }}>Active</TableCell>
                  <TableCell style={{ fontSize: "1rem" }}>
                    {c.status === "hired" && (
                      <Link to={Routes.viewCampaignTasks("a-simple-id")}>
                        Submit
                      </Link>
                    )}
                    {c.status !== "hired" && (
                      <Link to={Routes.viewCampaignTasks("a-simple-id")}>
                        View
                      </Link>
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton size="small">
                      <MdMoreVert size={24} />
                    </IconButton>
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
