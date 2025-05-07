import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Box
} from '@mui/material';

// Resize as needed
const CARD_WIDTH = 480;
const CARD_HEIGHT = 700;

const CardContainer = styled('div')`
  perspective: 1000px;
  cursor: pointer;
  width: ${CARD_WIDTH}px;
  height: ${CARD_HEIGHT}px;
  margin: auto;
`;

const CardInner = styled('div')(({ flipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  transform: flipped ? 'rotateY(180deg)' : 'none',
}));

const FaceCard = styled(Card)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CardFront = styled(FaceCard)``;

const CardBack = styled(FaceCard)`
  transform: rotateY(180deg);
`;

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const { title, blurb, screenshots, liveLink, repoLink } = project;

  return (
    <CardContainer onClick={() => setFlipped((prev) => !prev)}>
      <CardInner flipped={flipped}>
        {/* FRONT */}
        <CardFront>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="h5" gutterBottom>{title}</Typography>
            <Typography variant="body2" color="text.secondary">{blurb}</Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center', mb: 1 }}>
            <Typography variant="caption">Click to view screenshots</Typography>
          </CardActions>
        </CardFront>

        {/* BACK */}
        <CardBack>
          <CardContent sx={{ flexGrow: 1 }}>
            {/* Always show title */}
            <Typography variant="h6" gutterBottom textAlign="center">
              {title}
            </Typography>

            {/* Grid of first 4 images */}
            <Grid container spacing={1}>
              {screenshots?.slice(0, 4).map((src, idx) => (
                <Grid item xs={6} key={idx}>
                  <CardMedia
                    component="img"
                    height="110"
                    image={src}
                    alt={`Screenshot ${idx + 1}`}
                    loading="lazy"
                    style={{ objectFit: 'cover', borderRadius: 4 }}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Final large image (screenshot 5) */}
            {screenshots?.[4] && (
              <Box mt={2}>
                <CardMedia
                  component="img"
                  height="140"
                  image={screenshots[4]}
                  alt="Screenshot 5"
                  loading="lazy"
                  style={{ objectFit: 'cover', width: '100%', borderRadius: 4 }}
                />
              </Box>
            )}
          </CardContent>

          <CardActions sx={{ justifyContent: 'space-around', pb: 2 }}>
            {liveLink && (
              <Button size="small" href={liveLink} target="_blank" rel="noopener noreferrer">
                Live
              </Button>
            )}
            {repoLink && (
              <Button size="small" href={repoLink} target="_blank" rel="noopener noreferrer">
                Code
              </Button>
            )}
          </CardActions>
        </CardBack>
      </CardInner>
    </CardContainer>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    blurb: PropTypes.string,
    screenshots: PropTypes.arrayOf(PropTypes.string),
    liveLink: PropTypes.string,
    repoLink: PropTypes.string,
  }).isRequired,
};
