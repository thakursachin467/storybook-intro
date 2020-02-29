import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import PropTypes from "prop-types";

import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: {
      inline: false,
      text: `
    Description of the super cool button component we created

  `
    }
  }
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  danger: PropTypes.bool
};

export const Primary = () => (
  <Button
    buttonText={text("Button Text", "Primary Button")}
    primary={boolean("Primary button", true)}
  />
);

export const DangerButton = () => (
  <Button
    buttonText={text("Button Text", "Danger Button")}
    danger={boolean("Danger Button", true)}
  />
);
