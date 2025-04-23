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
} from '@mui/material';

// 1) Give us a 3D context
const CardContainer = styled('div')`
  perspective: 1000px;
  cursor: pointer;
  display: inline-block; /* shrink‑wrap to card width */
`;

// 2) This wrapper *flips*
const CardInner = styled('div')(({ flipped }) => ({
  position: 'relative',
  width: '100%',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  transform: flipped ? 'rotateY(180deg)' : 'none',
}));

// 3) Front face—in flow, so it gives the wrapper its height
const CardFront = styled(Card)`
  backface-visibility: hidden;
`;

// 4) Back face—covers the front when flipped
const CardBack = styled(Card)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export default function ProjectCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const { title, image, blurb, liveLink, repoLink } = project;

  return (
    <CardContainer onClick={() => setFlipped((f) => !f)}>
      <CardInner flipped={flipped}>
        {/* FRONT */}
        <CardFront>
          {image && (
            <CardMedia
              component="img"
              height="140"
              image={`${process.env.PUBLIC_URL}/assets/${image}`}
              alt={title}
            />
          )}
          <CardContent>
            <Typography variant="h5">{title}</Typography>
          </CardContent>
        </CardFront>

        {/* BACK */}
        <CardBack>
          <CardContent>
            <Typography variant="body2">{blurb}</Typography>
          </CardContent>
          <CardActions>
            {liveLink && (
              <Button size="small" href={liveLink} target="_blank">
                Live
              </Button>
            )}
            {repoLink && (
              <Button size="small" href={repoLink} target="_blank">
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
    image: PropTypes.string,
    blurb: PropTypes.string,
    liveLink: PropTypes.string,
    repoLink: PropTypes.string,
  }).isRequired,
};
