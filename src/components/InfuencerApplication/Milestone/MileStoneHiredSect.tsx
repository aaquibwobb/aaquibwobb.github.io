import {
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    Button,
    Paper
  } from "@material-ui/core";
  import { __tr } from "../../../i18n";
  import { MdPerson, MdMoreVert } from "react-icons/md";
  import "../../../styles/CampaignTable.module.css";
  import influencerdata from "../../../core/api/influencerdata.json";
  import { Stars } from '../../ui/Stars';
  import Checkbox from '@material-ui/core/Checkbox';
import { useEffect, useState } from "react";



  export function MileStoneHiredSect() {

    return (
      <div className="section" style={{ paddingTop: "15px" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                
                <TableCell>
                  <label style={{textTransform:"uppercase", fontSize:"16px",}}>Influencer</label>
                  </TableCell>
                <TableCell>
                  <label style={{textTransform:"uppercase",fontSize:"16px"}}>status</label>
                </TableCell>
                <TableCell>
                  <label style={{textTransform:"uppercase",fontSize:"16px"}}>action required</label>
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {influencerdata.map((c) => {
                return (
                  <TableRow key={c.influencerid} hover >
                   
                    <TableCell style={{ fontSize: "16px" }}>
                      <Box display='flex'> 
                      <Checkbox/>
                      <Avatar className="avatar">
                        <MdPerson size={15} />
                      </Avatar> 
                      <Box>
                      <div className="campaignTitleRow">{c.influencerName}</div>
                      <span  style={{ fontSize: "10px" }}>{c.instaAccountName}</span>
                      </Box>
                      </Box>
                    </TableCell>
                    <TableCell style={{ fontSize: "16px",color:' #848484' }}>
                      {c.status}
                    </TableCell>
                    {/* <TableCell style={{ fontSize: "1rem" }}>
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
                    </TableCell> */}
                    <TableCell>
                        { c.btn==='Milestone Acivated'?(
                    <Button  variant="outlined" 
                    style={{ fontSize: "16px",
                    color:' green' ,
                    border:'2px solid green',
                    textTransform:'capitalize'}}>
                        {c.btn}
                    </Button> ):(<Button  variant="outlined" disabled
                    style={{ fontSize: "16px",
                    color:' ' ,
                    border:'',
                    textTransform:'capitalize'}}>
                        {c.btn}
                    </Button>)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      // </Paper>
    );
  }
  