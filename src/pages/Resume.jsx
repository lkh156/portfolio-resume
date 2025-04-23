// src/pages/Resume.jsx
import React from 'react';
import { Container, Typography, Box, Grid, LinearProgress, Chip } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import resume from '../data/resume';

// Helper to parse dates, treating 'Present' as current date
const parseDate = (str) => {
  if (!str || str.toLowerCase() === 'present') return new Date();
  // expect formats like 'MMMM YYYY' or 'YYYY'
  return new Date(str);
};

export default function Resume() {
  // Sort experience by 'to' date descending
  const sortedExperience = [...resume.experience].sort((a, b) => {
    const dateA = parseDate(a.to);
    const dateB = parseDate(b.to);
    return dateB - dateA;
  });

  // Sort education by 'to' date descending
  const sortedEducation = [...resume.education].sort((a, b) => {
    const dateA = parseDate(a.to);
    const dateB = parseDate(b.to);
    return dateB - dateA;
  });

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Professional Experience
      </Typography>
      <Timeline position="alternate">
        {sortedExperience.map((exp, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent color="text.secondary">
              {exp.from} &ndash; {exp.to}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {idx < sortedExperience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{exp.role}</Typography>
              <Typography color="text.secondary">
                {exp.company}, {exp.location}
              </Typography>

              {Array.isArray(exp.description) ? (
                <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                  {exp.description.map((point, i) => (
                    <Typography key={i} component="li" variant="body2" gutterBottom>
                      {point}
                    </Typography>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" gutterBottom>
                  {exp.description}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        <Timeline position="alternate">
          {sortedEducation.map((edu, idx) => (
            <TimelineItem key={idx}>
              <TimelineOppositeContent color="text.secondary">
                {edu.from} &ndash; {edu.to}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {idx < sortedEducation.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6">{edu.degree}</Typography>
                <Typography color="text.secondary">
                  {edu.institution}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      <Box mt={6}>
        <Typography variant="h4" gutterBottom>
          Certifications
        </Typography>
        <Grid container spacing={2}>
          {resume.certifications.map((cert, idx) => (
            <Grid item key={idx}>
              <Chip
                label={`${cert.name} – ${cert.provider} (${cert.year})`}
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box mt={6}>
        <Typography variant="h4" gutterBottom>Skills</Typography>
        {resume.skills.map((group, idx) => (
          <Box key={idx} mt={4}>
            <Typography variant="h5" gutterBottom>{group.category}</Typography>
            <Grid container spacing={2}>
              {group.list.map((skill, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <Box>
                    <Typography gutterBottom>{skill.name}</Typography>
                    <LinearProgress variant="determinate" value={skill.level} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
