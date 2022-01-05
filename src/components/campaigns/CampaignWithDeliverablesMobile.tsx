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
  
  export function CampaignWithDeliverablesMobile() {
    return (
      <div className="section" style={{ paddingTop: "15px",marginTop:"1rem",fontSize:"12px", padding:"0px 2px",width:"100%" }}>
        <TableContainer >
          <Table >
            <TableHead>
              {/* <TableRow>
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
              </TableRow> */}
            </TableHead>
            <TableBody >
              {appliedCampaigns.map((c) => {
                return (
                  <TableRow key={c.campaignId} >
                    <TableCell>
                      <Avatar className="avatar">
                        <MdPerson size={15} />
                      </Avatar>
                    </TableCell>
                    <TableCell style={{ fontSize: "12px"}}>
                      <div className="campaignTitleRow">{c.campaignName}
                      <div className="campaignStatus" style={{  backgroundColor:"rgba(39, 155, 68, 0.1)", width:"59px",height:"20px",borderRadius:"20px",  paddingLeft:"9px",marginTop:"7px",color:"#279B44"}}>
                                            Active</div>
                      </div>
                      
                    </TableCell>
                    
                    <TableCell style={{ fontSize: "12px" }}>
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
                    {/* <TableCell>
                      <IconButton size="small">
                        <MdMoreVert size={24} />
                      </IconButton>
                    </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  