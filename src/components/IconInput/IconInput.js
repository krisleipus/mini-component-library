import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    fontSize: "0.85rem",
    iconSize: 16,
  },
  large: {
    fontSize: "1.15rem",
    iconSize: 24,
  },
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`;

const IconWrapper = styled.div`
  position: absolute;

  left: 0;
  top: 0;

  pointer-events: none;
`;

const InputWrapper = styled.input`
  width: 100%;

  padding-left: var(--padding-left);

  font-family: "Roboto", sans-serif;
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:hover {
    color: ${COLORS.black};
  }

  border: none;
  border-bottom: 2px solid ${COLORS.black};
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const iconSize = SIZES[size].iconSize;
  const paddingLeft = iconSize + 8;

  return (
    <Wrapper
      style={{ "--padding-left": paddingLeft + "px", "--width": width + "px" }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={SIZES[size].iconSize} />
      </IconWrapper>
      <InputWrapper
        style={{ "--font-size": SIZES[size].fontSize }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default IconInput;
