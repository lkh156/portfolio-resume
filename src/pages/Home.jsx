// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Stack, Card, CardContent, CardActions, CardMedia, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import projects from '../data/projects';

export default function Home() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const random = projects[Math.floor(Math.random() * projects.length)];
    setFeatured(random);
  }, []);

  return (
    <Container sx={{ py: 10 }}>
      <Box textAlign="center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/profile/linkedin-photo.jpg`}
          alt="Loran Hendricks"
          style={{ borderRadius: '50%', height: 120, marginBottom: 16 }}
        />
        <Typography variant="h2" gutterBottom>
          Loran Hendricks
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          AI Product Manager | Cloud Security Engineer | Full-Stack Developer
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
          I build AI-driven solutions, lead security initiatives, and bridge technical depth with business clarity. My mission is to create tools that empower teams, secure systems, and deliver real value.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" component={RouterLink} to="/resume">
            View Resume
          </Button>
          <Button variant="outlined" component={RouterLink} to="/portfolio">
            View Projects
          </Button>
          <Button variant="text" component={RouterLink} to="/contact">
            Get in Touch
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <IconButton component="a" href="https://github.com/lkh156" target="_blank" rel="noopener" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/loranhendricks/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <LinkedInIcon />
          </IconButton>
        </Stack>

        {/* Tech Stack Icons */}
        <Typography variant="h6" sx={{ mt: 8, mb: 2 }}>Tech Stack</Typography>
        <Stack direction="row" spacing={3} justifyContent="center" flexWrap="wrap">
          <img src={`${process.env.PUBLIC_URL}/assets/icons/react.svg`} alt="React" height="40" />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/python.svg`} alt="Python" height="40" />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/aws.svg`} alt="AWS" height="40" />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/azure.svg`} alt="Azure" height="40" />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/terraform.svg`} alt="Terraform" height="40" />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/langchain.jpg`} alt="LangChain" height="40" />
          <img src={`${process.env.PUBLIC_URL}/assets/icons/github.svg`} alt="GitHub" />

        </Stack>

        {/* Featured Project */}
        {featured && (
          <Box mt={10}>
            <Typography variant="h4" gutterBottom>
              Featured Project
            </Typography>
            <Card sx={{ maxWidth: 600, mx: 'auto' }}>
              {featured.image && (
                <CardMedia
                  component="img"
                  height="240"
                  image={featured.image}
                  alt={featured.title}
                />
              )}
              <CardContent>
                <Typography variant="h5" gutterBottom>{featured.title}</Typography>
                <Typography variant="body2" color="text.secondary">{featured.description}</Typography>
              </CardContent>
              <CardActions>
                {featured.live && (
                  <Button size="small" href={featured.live} target="_blank">Live</Button>
                )}
                {featured.repo && (
                  <Button size="small" href={featured.repo} target="_blank">Repo</Button>
                )}
              </CardActions>
            </Card>
          </Box>
        )}

        {/* About Me Section */}
        <Box mt={10} maxWidth={800} mx="auto" textAlign="left">
          <Typography variant="h4" gutterBottom textAlign="center">
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            With over two decades of experience spanning IT auditing, legal operations, and software development, I bring a unique blend of analytical precision and creative problem-solving to every project I take on. My foundation in law has shaped my commitment to data ethics, compliance, and clear communication.
          </Typography>
          <Typography variant="body1" paragraph>
            I’m especially passionate about AI’s potential to empower—not replace—people. Whether I’m leading audit teams, building secure cloud architectures, or crafting prompt chains for LLMs, my focus is always on building systems that are scalable, responsible, and human-centered.
          </Typography>
          <Typography variant="body1">
            Outside of work, I enjoy tabletop RPG design, lore-building, and applying AI to gaming and storytelling experiences. I'm always exploring new ways to combine technical depth with imaginative design.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
