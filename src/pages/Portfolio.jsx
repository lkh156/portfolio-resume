import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Portfolio
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
