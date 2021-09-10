import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  name,
  price,
  fabrication,
  expiration,
  perishable,
  nonperishable,
} from "./store/ducks/sorter";

const SortBy = () => {
  const sorter = useSelector((state) => state.sorter.sortBy);
  const dispatch = useDispatch();

  const sortByHandler = (event) => {
    switch (event.target.value) {
      case "name":
        return dispatch(name());
      case "price":
        return dispatch(price());
      case "fabricationDate":
        return dispatch(fabrication());
      case "expirationDate":
        return dispatch(expiration());
      case "perishable":
        return dispatch(perishable());
      case "nonperishable":
        return dispatch(nonperishable());
      default:
        return event;
    }
  };
  console.log(sorter);
  return (
    <div>
      <form>
        <p>Sort by</p>
        <select onChange={sortByHandler}>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="fabricationDate">Fabrication Date</option>
          <option value="expirationDate">Expiration Date</option>
          <option value="perishable">Perishable Products</option>
          <option value="nonperishable">Non-Perishable Products</option>
        </select>
        <p>Sorting Order</p>
        <select>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
    </div>
  );
};

export default SortBy;
