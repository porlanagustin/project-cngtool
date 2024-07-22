import './Africa.css';
import { useState } from 'react';

const Africa = () => {
  const [selectedCountry, setSelectedCountry] = useState('Paises de Africa');
  const categories = ['Paises de Africa', 'Marruecos', 'Sudáfrica', 'Túnez', 'Zimbabue', 'Mozambique'];

  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn">{selectedCountry}</button>
        <div className='dropdown-content'>
          {categories.map((category, index) => (
            <a 
              key={index} 
              onClick={() => setSelectedCountry(category)}
              href="#"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Africa;

