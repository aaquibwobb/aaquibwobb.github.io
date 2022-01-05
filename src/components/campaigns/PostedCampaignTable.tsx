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
import "../../styles/CampaignTable.module.scss";
import { UppercaseSbText } from "../ui/custom";
import { Routes } from "../../routes";
import { usePostedCampaigns } from "../../state/selectors";
import { CssVariables } from "../../css-variables";

export function PostedCampaignTable() {
  const postedCampaigns = usePostedCampaigns().sort(
    (p1, p2) => Date.parse(p2.createdAt || "") - Date.parse(p1.createdAt || "")
  );

  return (
    <div className="section">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <label className="headline">{__tr("campaigns")}</label>
              </TableCell>
              <TableCell>
                <label className="headline">{__tr("status")}</label>
              </TableCell>
              <TableCell>
                <label className="headline">{__tr("applicants")}</label>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
           {postedCampaigns.length > 0?
          <TableBody>
            {postedCampaigns.map((p) => {
              return (
                <TableRow key={p.id}>
                  <TableCell>
                    <div className="campaignTitleRow">
                      <Avatar>
                        <MdPerson size={15} />
                      </Avatar>
                      <Typography variant="body1" className="title">
                        {p.Name || ""}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>
                    {__tr(`status_${p.CampaignStatus?.toLowerCase() || ""}`)}
                  </TableCell>
                  <TableCell>
                    <Link
                      to={Routes.viewCampaignApplicants(p.id)}
                      style={{
                        fontWeight: 500,
                        color: CssVariables.colorPrimary,
                      }}
                    >
                      View({p.CampaignStatus || 0})
                    </Link>
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
:<div>Hellow haider</div>}
        </Table>
      </TableContainer>
    </div>
  );
}
