import { localService } from './local.service';

const serviceKey = 'faultTreeNodeDictionary';

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

const create = (faultTreeNodeDictionary) => {
  const newValue = [...state, faultTreeNodeDictionary];
  localService.setItem(serviceKey, newValue);
  updateState();
};

const update = (faultTreeNodeDictionary) => {
  const newValue = state.map((el) => {
    if (el.id === faultTreeNodeDictionary.id) {
      return {
        ...el,
        ...faultTreeNodeDictionary,
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

export const faultTreeNodeDictionaryService = {
  create,
  getAll,
  remove,
  update,
  getById,
};
