import React from "react";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import clsx from "clsx";

// Define the type for the StyledBox component props
interface StyledBoxProps {
  ellipsis?: boolean;
  component?: React.ElementType;
}

// Create the StyledBox component with ellipsis styles
const StyledBox = styled(Box)<StyledBoxProps>(({ ellipsis }) => ({
  textTransform: "none",
  ...(ellipsis && {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
}));

// Define the prop types for the heading components
interface HeadingProps extends React.ComponentProps<typeof StyledBox> {
  ellipsis?: boolean;
  className?: string;
}

// H1 Component
export const H1: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h1"
      fontSize="28px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// H2 Component
export const H2: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h2"
      fontSize="24px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// H3 Component
export const H3: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h3"
      fontSize="18px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// H4 Component
export const H4: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h4"
      fontSize="16px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// H5 Component
export const H5: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h5"
      fontSize="14px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// H6 Component
export const H6: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="h6"
      fontSize="13px"
      fontWeight="500"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// Paragraph Component
export const Paragraph: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      mb={0}
      mt={0}
      component="p"
      fontSize="14px"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// Small Component
export const Small: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      fontSize="12px"
      fontWeight="500"
      lineHeight="1.5"
      component="small"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// Span Component
export const Span: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      component="span"
      lineHeight="1.5"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};

// Tiny Component
export const Tiny: React.FC<HeadingProps> = ({ children, className, ellipsis, ...props }) => {
  return (
    <StyledBox
      fontSize="10px"
      lineHeight="1.5"
      component="small"
      ellipsis={ellipsis}
      className={clsx({ [className || ""]: true })}
      {...props}>
      {children}
    </StyledBox>
  );
};
