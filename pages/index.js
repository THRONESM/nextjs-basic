import Navbar from "../src/Navbar"
import BasicButtons from "../src/BasicButtons"
import Card from "../src/Card"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function HomePage({posts}) {
  return <div>
      <Navbar  />
      <Container maxWidth="lg">
        <div style={{marginTop:'1em'}}>
          <Typography variant="h4" gutterBottom>
            Welcome to Next.js!
          </Typography>
          <Grid container spacing={3}>
            {posts.map((post) => (
              <Grid item xs={12} lg={4} key= {post.id}>
                <Card attraction = {post} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://www.melivecode.com/api/attractions')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {posts}
  }
}

export default HomePage