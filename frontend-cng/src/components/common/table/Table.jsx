import { useState } from "react";
import { Menu, MenuItem} from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import "./Table.css";

const columns = [
  "Seleccionar",
  "Nombre",
  "Web",
  "Email",
  "Telefono",
  "Alcance",
  "Recomendacion",
  "Usuario",
  "Password"
];

const categories = ["Todos", "Argentina", "EEUU", "Global", "Buenos Aires"];

const Table = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (rowIndex) => {
    const newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(rowIndex)) {
      newSelectedRows.splice(newSelectedRows.indexOf(rowIndex), 1);
    } else {
      newSelectedRows.push(rowIndex);
    }
    setSelectedRows(newSelectedRows);
  };

  let dataFilter = selectedCategory === "Todos" ? data : data.filter(item => item.alcance === selectedCategory);

  return (
    <div className="table-container">
      <div className="dropdown-container">
        <button
          className="dropdown-button"
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          {selectedCategory ? selectedCategory : "Seleccionar"}
          <span className="dropdown-arrow"></span>
        </button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {categories.map((category, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                handleClose();
                setSelectedCategory(category);
              }}
            >
              {category}
            </MenuItem>
          ))}
          
        </Menu>
      </div>

      {/*//////////////TABLA///////////////*/}
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Votar</th>
          </tr>
        </thead>
        {/*/////////////////////////////*/}
        <tbody>

          {dataFilter.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input type="checkbox" checked={selectedRows.includes(rowIndex)} onChange={() => handleCheckboxChange(rowIndex)}/>
              </td>
    
              {columns.slice(1).map((column, colIndex) => (
                <td key={colIndex}>{row[column.toLowerCase()]}</td>
              ))}
              <td ><ThumbUpAltIcon className="voteIcon"></ThumbUpAltIcon></td>
            </tr>
          ))}
        </tbody>
        {/*/////////////////////////////*/}

      </table>
      {/*//////////////TABLA///////////////*/}

    </div>
  );
};

export default Table;
