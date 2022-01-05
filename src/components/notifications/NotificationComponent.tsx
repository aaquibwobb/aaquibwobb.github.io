import { css } from "@emotion/css";
import { Box, Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { TextTransformNoneButton } from "../ui/TextTransformNoneButton";
import { isMobile } from 'react-device-detect';

export function NotificationActions() {
    return <>
        <TextTransformNoneButton variant="outlined" color="primary" size="small">View Review</TextTransformNoneButton>
    </>
}

export function NotificationComponent() {
    return <ListItem className='root'>
        <ListItemAvatar className='icon'>
          <Avatar  src='https://material-ui.com/static/images/avatar/1.jpg' />
        </ListItemAvatar>
        <ListItemText className='text'>
            <p>Bibo reviewed your 3 posts. <span className='time'>3h</span> </p>
        </ListItemText>
        <div className={`actions  ${isMobile?'hide':''}`}>
            <NotificationActions/>
        </div>
    </ListItem>
}