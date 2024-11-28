import { Box, Container, Typography } from "@mui/material";
import Layout from "../component/Layout";
import useHome from "../features/courses/hooks/useHome";
import FeaturedSection from "../features/home/component/FeaturedSection";
import { Spinner } from "../styles/Course.module";
import { Helmet } from "react-helmet";
import { TailSpin } from "react-loader-spinner";

// Function to dynamically configure awsconfig

export default function Home() {
  const [home, isLoading] = useHome();

  const displayResult = () => {
    return (
      <Layout>
        <Box>
          <Helmet>
          <meta property="og:image" content="https://example.com/ogp.jpg" />
          <meta
            property="og:image:secure_url"
            content="https://secure.example.com/ogp.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="400" />
          <meta property="og:image:height" content="300" />
          <meta
            property="og:image:alt"
            content="A shiny red apple with a bite taken out"
          />
          </Helmet>
          {home.map((homeItem) => (
            <Container key={homeItem.key} sx={{ mb: 8 }}>
              <Typography component="span" variant="h5" gutterBottom>
                {homeItem.desc}
              </Typography>
              <Box>
                <FeaturedSection section={homeItem} />
              </Box>
            </Container>
          ))}
        </Box>
      </Layout>
    );
  };

  const loadSpinner = () => {
    return (
      <Spinner>
        <TailSpin />
      </Spinner>
    );
  };

  return (
    <Typography component="span">
      {isLoading ? loadSpinner() : displayResult()}
    </Typography>
  );
}
