/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const HEIGHTS = {
  large: 24,
  medium: 12,
  small: 8,
};

const BaseWrapper = styled.div`
  progress[value] {
    --background-color: ${COLORS.transparentGray15};
    --bar-color: ${COLORS.primary};

    /* reset default styles */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;

    width: 370px;
    height: var(--height);
    background: var(--background-color);
    border-radius: 4px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  }

  progress[value]::-moz-progress-bar {
    background: var(--bar-color);
    border-radius: 4px var(--border-right-radius) var(--border-right-radius) 4px;
  }

  progress[value]::-webkit-progress-bar {
    background: var(--background-color);
    border-radius: 4px;
  }

  progress[value]::-webkit-progress-value {
    background: var(--bar-color);
    border-radius: 4px var(--border-right-radius) var(--border-right-radius) 4px;
  }
`;

const LargeWrapper = styled(BaseWrapper)`
  progress[value] {
    padding: 4px;
    border-radius: 8px;
  }
`;

const RIGHT_RADIUS_START = 98;
const MAX_BORDER_RADIUS = 4;

const ProgressBar = ({ value, size }) => {
  const height = HEIGHTS[size];
  let Wrapper = BaseWrapper;
  if (size === "large") {
    Wrapper = LargeWrapper;
  }

  const clampedValue = Math.min(Math.max(value, 0), 100);
  let rightRadius = 0;
  if (clampedValue > RIGHT_RADIUS_START) {
    rightRadius =
      (1 - (100 - clampedValue) / (100 - RIGHT_RADIUS_START)) *
      MAX_BORDER_RADIUS;
  }
  return (
    <Wrapper
      style={{
        "--height": height + "px",
        "--fill-width": clampedValue + "%",
        "--border-right-radius": rightRadius + "px",
      }}
    >
      <progress value={clampedValue} max={100} min={0} />
    </Wrapper>
  );
};

export default ProgressBar;
