import { Box, Button } from "@material-ui/core";
import { useState } from "react";
import { UppercaseSbText } from "../ui/custom";
import { IconEdit } from "../ui/Icons";
import { __tr } from "../../i18n";
import styles from "../../styles/NewCampaign.module.scss";
import { CreateCampaign } from "./create/CreateCampaign";
import { useHistory } from "react-router-dom";
import { Routes } from "../../routes";
export function BoxNewCampaign() {
  const [isCreating, setIsCreating] = useState(false);
  const history = useHistory();

  return (
    <Box className={styles.region}>
      <Box padding={2} className={styles.header} style={{marginTop:"0.7rem"}}>
        <Box>
          <IconEdit size={18} />
        </Box>
        <Box marginX={1}>
          <UppercaseSbText style={{fontSize:"1rem",fontWeight:"600"}}>{__tr("newCampaign")}</UppercaseSbText>
        </Box>
      </Box>
      <Box className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: __tr("newCampaignText") }}></p>
      </Box>
      <Box padding={2} width="75%" margin="auto">
        <Button
          style={{ textTransform: "capitalize" }}
          onClick={()=>history.push(Routes.CreateCampaign)}
          fullWidth
          variant="outlined"
         
          color="primary"
        >
          {__tr("postCampaign")}
        </Button>
      </Box>
      {/* <CreateCampaign
        // open={isCreating}
        // scroll="paper"
        maxWidth="md"
        fullWidth
        onClose={() => setIsCreating(false)}
      /> */}
    </Box>
  );
}
