import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);
addDecorator(withKnobs);
