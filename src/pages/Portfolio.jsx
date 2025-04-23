import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Box } from '@mui/material';
import projects from '../data/projects';

export default function Portfolio() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const random = projects[Math.floor(Math.random() * projects.length)];
    setFeatured(random);
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Portfolio
      </Typography>

      {featured && (
        <Box mb={6}>
          <Typography variant="h5" gutterBottom textAlign="center">
            Featured Project
          </Typography>
          <Card sx={{ maxWidth: 800, mx: 'auto' }}>
            {featured.image && (
              <CardMedia
                component="img"
                height="280"
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

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card
              onClick={() => setFeatured(project)}
              sx={{ cursor: 'pointer', boxShadow: featured?.title === project.title ? 6 : 1 }}
            >
              {project.image && (
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  alt={project.title}
                />
              )}
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description?.slice(0, 80)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
