import React from 'react';
import { LayoutGrid, Column } from 'gamut';
import gamut, { grid } from 'gamut-styles/utils/variables';

export default {
  component: LayoutGrid,
  title: 'Layout/LayoutGrid',
};

const Test = ({ color, children }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        color: 'white',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      {children}
    </div>
  );
};

const KitchenSinkColumns = ({ alt }) => (
  <>
    <Column sm={12}>
      <Test color="grey">12</Test>
    </Column>
    <Column sm={6}>
      <Test color="grey">6</Test>
    </Column>
    <Column sm={6}>
      <Test color="grey">6</Test>
    </Column>
    <Column sm={3}>
      <Test color="grey">3</Test>
    </Column>
    <Column sm={3}>
      <Test color="grey">3</Test>
    </Column>
    <Column sm={3}>
      <Test color="grey">3</Test>
    </Column>
    <Column sm={3}>
      <Test color="grey">3</Test>
    </Column>
    <Column sm={2}>
      <Test color="grey">2</Test>
    </Column>
    <Column sm={2}>
      <Test color="grey">2</Test>
    </Column>
    <Column sm={2}>
      <Test color="grey">2</Test>
    </Column>
    <Column sm={2}>
      <Test color="grey">2</Test>
    </Column>
    <Column sm={2}>
      <Test color="grey">2</Test>
    </Column>
    <Column sm={2}>
      <Test color="grey">2</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
    <Column sm={1}>
      <Test color="grey">1</Test>
    </Column>
  </>
);

export const smallGap = () => {
  return (
    <LayoutGrid sm={{ columnGap: 'sm', rowGap: 'sm' }}>
      <KitchenSinkColumns />
    </LayoutGrid>
  );
};

smallGap.story = {
  name: 'Small Gap',
};

export const mediumGap = () => {
  return (
    <LayoutGrid sm={{ columnGap: 'md', rowGap: 'md' }}>
      <KitchenSinkColumns />
    </LayoutGrid>
  );
};

mediumGap.story = {
  name: 'Medium Gap',
};

export const largeGap = () => {
  return (
    <LayoutGrid sm={{ columnGap: 'lg', rowGap: 'lg' }}>
      <KitchenSinkColumns />
    </LayoutGrid>
  );
};

largeGap.story = {
  name: 'Large Gap',
};

export const extraLargeGap = () => {
  return (
    <LayoutGrid sm={{ columnGap: 'xl', rowGap: 'xl' }}>
      <KitchenSinkColumns />
    </LayoutGrid>
  );
};

extraLargeGap.story = {
  name: 'X-Large Gap',
};

export const noGap = () => {
  return (
    <LayoutGrid>
      <KitchenSinkColumns alt />
    </LayoutGrid>
  );
};

noGap.story = {
  name: 'No Gap',
};

export const responsiveGridGap = () => {
  return (
    <LayoutGrid
      sm={{ columnGap: 'sm', rowGap: 'sm' }}
      md={{ columnGap: 'md', rowGap: 'md' }}
      lg={{ columnGap: 'lg', rowGap: 'lg' }}
    >
      <KitchenSinkColumns />
    </LayoutGrid>
  );
};

responsiveGridGap.story = {
  name: 'Responsive Gap',
};