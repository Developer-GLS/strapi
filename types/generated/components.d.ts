import type { Schema, Attribute } from '@strapi/strapi';

export interface FunctionalComponentButton extends Schema.Component {
  collectionName: 'components_functional_component_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    isExternal: Attribute.Boolean;
    cssClasses: Attribute.String;
    buttonType: Attribute.String;
  };
}

export interface GraphicComponentsHero extends Schema.Component {
  collectionName: 'components_graphic_components_heroes';
  info: {
    displayName: 'hero';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    bgImage: Attribute.Media;
    overlayImage: Attribute.Media;
    cssClasses: Attribute.String;
    heroType: Attribute.String;
    heroTitle: Attribute.Component<'text-components.title'>;
    heroButtons: Attribute.Component<'functional-component.button', true>;
  };
}

export interface TextComponentsSection extends Schema.Component {
  collectionName: 'components_text_components_sections';
  info: {
    displayName: 'section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.Component<'text-components.title', true>;
    paragraph: Attribute.Text;
    sectionType: Attribute.String;
    cssClasses: Attribute.String;
    image: Attribute.Media;
    bgImage: Attribute.Media;
  };
}

export interface TextComponentsTitle extends Schema.Component {
  collectionName: 'components_text_components_titles';
  info: {
    displayName: 'title';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cssClasses: Attribute.String;
    titleSize: Attribute.String;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'functional-component.button': FunctionalComponentButton;
      'graphic-components.hero': GraphicComponentsHero;
      'text-components.section': TextComponentsSection;
      'text-components.title': TextComponentsTitle;
    }
  }
}
