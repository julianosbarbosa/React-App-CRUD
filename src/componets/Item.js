import React from "react";
import PropTypes from "prop-types";

const Item = ({ item, onDelete }) => (
  <li>
    {item}
    <button onClick={onDelete}>Remover</button>
  </li>
);

Item.propTypes = {
  item: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default Item;
