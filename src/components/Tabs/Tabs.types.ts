import { ComponentPropsWithoutRef, ElementRef } from "react";
import { VariantProps } from "class-variance-authority";
import * as $ from "@radix-ui/react-tabs";
import { contentStyles, rootStyles, listStyles } from "./Tabs.styles";

// Root or Tabs
interface TabsComponent extends ElementRef<typeof $.Root> {}

type TabsProps = ComponentPropsWithoutRef<typeof $.Root> &
  VariantProps<typeof rootStyles> & {};

// List
interface ListComponent extends ElementRef<typeof $.List> {}

type ListProps = ComponentPropsWithoutRef<typeof $.List> &
  VariantProps<typeof listStyles> & {};

// Tab
interface TabComponent extends ElementRef<typeof $.Trigger> {}

type TabProps = ComponentPropsWithoutRef<typeof $.Trigger> & {};

// Content
interface ContentComponent extends ElementRef<typeof $.Content> {}

type ContentProps = ComponentPropsWithoutRef<typeof $.Content> &
  VariantProps<typeof contentStyles> & {};

export type {
  TabComponent,
  TabProps,
  ListComponent,
  ListProps,
  TabsProps,
  TabsComponent,
  ContentComponent,
  ContentProps,
};
