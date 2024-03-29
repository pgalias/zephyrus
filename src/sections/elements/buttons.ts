import { faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { BasicButton } from '../../components/elements/buttons';
import { Block } from '../types';

export const Buttons: Block = {
  title: 'Buttons',
  icon: faMousePointer,
  components: [
    {
      name: 'Basic',
      url: '/buttons/basic',
      variants: [{ name: 'Basic', component: BasicButton }],
    },
  ],
};
