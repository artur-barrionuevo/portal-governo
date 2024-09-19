import { LIST_SECRETARIAS } from '../../constants/ActionTypes';

export function listSecretarias() {
  return {
    type: LIST_SECRETARIAS,
    request: {
      op: 'get',
      path: '@secretarias',
    },
  };
}
