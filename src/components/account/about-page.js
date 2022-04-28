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
    </CardContent>
    <CardActions>
    </CardActions>
  </Card>
);
