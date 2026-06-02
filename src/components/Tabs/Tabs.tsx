import React, { forwardRef } from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import {
  TabsComponent,
  TabsProps,
  TabComponent,
  TabProps,
  ContentComponent,
  ContentProps,
  ListComponent,
  ListProps,
} from "./Tabs.types";
import { Box } from "../Box";
import { Button } from "../Button";
import { cx } from "../../utils";
import { contentStyles, listStyles, rootStyles } from "./Tabs.styles";

const Tabs = forwardRef<TabsComponent, TabsProps>(
  ({ fullWidth, ...rest }, ref) => {
    const classes = cx(rootStyles({ fullWidth }), rest.className);

    return (
      <RadixTabs.Root {...rest} ref={ref} asChild>
        <Box className={classes}>{rest.children}</Box>
      </RadixTabs.Root>
    );
  }
);

const $ = Tabs;

const Tab = forwardRef<TabComponent, TabProps>((props, ref) => {
  const classes = cx(
    ["data-[state=active]:border-mono-border"],
    props.className
  );
  return (
    <RadixTabs.Trigger {...props} ref={ref} asChild>
      <Button className={classes} intent="plain">
        {props.children}
      </Button>
    </RadixTabs.Trigger>
  );
});

// const List = RadixTabs.List;
const List = forwardRef<ListComponent, ListProps>(
  ({ fullWidth, ...rest }, ref) => {
    const classes = cx(listStyles({ fullWidth }), rest.className);
    return <RadixTabs.List {...rest} className={classes} ref={ref} />;
  }
);

const Content = forwardRef<ContentComponent, ContentProps>(
  ({ fullWidth, ...rest }, ref) => {
    const classes = cx(contentStyles({ fullWidth }), rest.className);
    return (
      <RadixTabs.Content {...rest} ref={ref} asChild>
        <Box className={classes}>{rest.children}</Box>
      </RadixTabs.Content>
    );
  }
);

export { $, Tab, Tabs, List, Content };
