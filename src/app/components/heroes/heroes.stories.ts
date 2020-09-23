// heroes.stories.ts
import {HeroesComponent} from './heroes.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Heroes',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  OnSelect: action('OnSelect'),
};

export const Default = () => ({
  component: HeroesComponent,
  props: {
    hero: {
      id: 1,
      name: 'Windstorm'
    },
  }
});

export const Selected = () => ({
  component: HeroesComponent,
  props: {
    hero: {
      id: 1,
      name: 'Windstorm'
    },
    selectedHero: {
    id: 15,
    name: 'Magneta'
    },
    OnSelect: actionsData.OnSelect
  }
  });
