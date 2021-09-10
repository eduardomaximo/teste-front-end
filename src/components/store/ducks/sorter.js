const NAME = "name";
const PRICE = "price";
const FABRICATION = "fabrication";
const EXPIRATION = "expiration";
const PERISHABLE = "perishable";
const NONPERISHABLE = "nonperishable";

export const name = () => ({
  type: NAME,
});

export const price = () => ({
  type: PRICE,
});

export const fabrication = () => ({
  type: FABRICATION,
});

export const expiration = () => ({
  type: EXPIRATION,
});

export const perishable = () => ({
  type: PERISHABLE,
});

export const nonperishable = () => ({
  type: NONPERISHABLE,
});

const initialState = {
  sortBy: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAME:
      return { ...state, sortBy: "name" };
    case PRICE:
      return { ...state, sortBy: "price" };
    case FABRICATION:
      return { ...state, sortBy: "fabrication" };
    case EXPIRATION:
      return { ...state, sortBy: "expiration" };
    case PERISHABLE:
      return { ...state, sortBy: "perishable" };
    case NONPERISHABLE:
      return { ...state, sortBy: "nonperishable" };
    default:
      return state;
  }
};
