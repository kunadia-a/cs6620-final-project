import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import AboutSectionContent from "src/components/account/aboutSectionContent"

export const AboutPage = (props) => (
  <Card {...props}>
    <CardContent>
      <AboutSectionContent displayData={"groupMembers"}/>
      {/* <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.timezone}
        </Typography>
      </Box> */}
    </CardContent>
    <CardActions>
      {/* <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Upload picture
      </Button> */}
    </CardActions>
  </Card>
);
