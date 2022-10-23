import Navbar from "../src/Navbar"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



function Attraction(props) {
    const attraction = props.attraction
  return <div>
      <Navbar  />
      <Container maxWidth="sm">
        <div style={{marginTop:'1em'}}>
          <Typography variant="h4" gutterBottom>
            {attraction.name}
          <Card sx={{ maxWidth: "345" }}>
        
            <CardMedia
                component="img"
                height="315"
                image={attraction.coverimage}
                alt="green iguana"
            />
        
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {attraction.detail}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Latitude: {attraction.latitude}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Longitude: {attraction.longitude}
        </Typography>
      </CardContent>
    </Card>
          </Typography>
        </div>
      </Container>
    </div>
}

export default Attraction