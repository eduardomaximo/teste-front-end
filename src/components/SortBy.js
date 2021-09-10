import React from "react";

const SortBy = () => {
  return (
    <div>
      <p>Sort by</p>
      <select>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="fabricationDate">Fabrication Date</option>
        <option value="expirationDate">Expiration Date</option>
        <option value="perishable">Perishable Products</option>
        <option value="non-perishabel">Non-Perishable Products</option>
      </select>
      <p>Sorting Order</p>
      <select>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortBy;
