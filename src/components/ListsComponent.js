import React from "react";

function ListsComponent() {
  return (
    <div className="ListsComponent">
      <h2>Ordered List</h2>
      <ol className="ordered-list">
        <li>
          Первый элемент
          <ol className="nested-list">
            <li>Вложенный элемент</li>
            <li>Вложенный элемент</li>
            <li>Вложенный элемент</li>
          </ol>
        </li>
        <li>Второй элемент</li>
        <li>
          Третий элемент
          <ol className="nested-list">
            <li>Вложенный элемент</li>
            <li>Вложенный элемент</li>
          </ol>
        </li>
      </ol>
      <h2>Unordered List</h2>
      <ul>
        <li>
          Первый элемент
          <ul>
            <li>Вложенный элемент</li>
            <li>Вложенный элемент</li>
            <li>Вложенный элемент</li>
          </ul>
        </li>
        <li>Второй элемент</li>
        <li>Третий элемент</li>
      </ul>
    </div>
  );
}

export default ListsComponent;
