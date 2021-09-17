import { localService } from './local.service';

const serviceKey = 'faultTreeNode';

const getState = () => {
  return localService.getItem(serviceKey);
};

let state = getState();

const updateState = () => {
  state = getState();
};

const getAll = () => {
  return state;
};

const create = (faultTreeNode) => {
  const newValue = [...state, faultTreeNode];
  localService.setItem(serviceKey, newValue);
  updateState();
};

const update = (faultTreeNode) => {
  const newValue = state.map((el) => {
    if (el.id === faultTreeNode.id) {
      return {
        ...el,
        ...faultTreeNode,
      };
    }
    return el;
  });
  localService.setItem(serviceKey, newValue);
  updateState();
};

const remove = (id) => {
  const newValue = state.filter((el) => el.id !== id);
  localService.setItem(serviceKey, newValue);
  updateState();
};

const getById = (id) => {
  return state.find((el) => el.id === id);
};

export const getByFaultTreeId = (faultTreeId) => {
  return state.find((el) => el.faultTreeId === faultTreeId);
};

export const faultTreeNodeService = {
  create,
  getAll,
  remove,
  update,
  getById,
  getByFaultTreeId,
};
