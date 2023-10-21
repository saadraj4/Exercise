import React, { useState } from 'react';
import sampleData from './Data';

const TableHeaderRow = () => {
  return <tr><th>id</th><th>Name</th><th>Age</th><th>City</th><th>Occupation</th></tr>;
}

function TableRow({ filteredData }) {
  return filteredData.map(item =>
    <tr key={item.id}>
      <td>{item.id}</td><td>{item.name}</td><td>{item.age}</td><td>{item.city}</td><td>{item.occupation}</td>
    </tr>
  );
}

function Table() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [city, setCity] = useState('')
  const [occupation, setOccupation] = useState('')
  const [filteredData, setFilteredData] = useState(sampleData)

  const handleSearch = () => {
    // Filter the data based on selected criteria
    const filteredResults = sampleData.filter((item) => {
      return (
        (name === '' || item.name.toLowerCase().includes(name.toLowerCase())) &&
        (age === '' || item.age == age) &&
        (city === '' || item.city === city) &&
        (occupation === '' || item.occupation === occupation)
      );
    });

    // Update the state with the filtered results
    setFilteredData(filteredResults);
  };

  const handleReset = () =>{
    // Reset the filters and show the original data
    setName('');
    setAge('');
    setCity('');
    setOccupation('');
    setFilteredData(sampleData);
  }

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />

        <label>City:</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">City</option>
                 <option value="New York">New York</option>
                 <option value="San Francisco">San Francisco</option>
                 <option value="Chicago">Chicago</option>
                 <option value="Los Angeles">Los Angeles</option>
                 <option value="Houston">Houston</option>
                 <option value="Miami">Miami</option>
                 <option value="Seattle">Seattle</option>
                 <option value="Boston">Boston</option>
                 <option value="Denver">Denver</option>
                 <option value="Atlanta">Atlanta</option>
        </select>
        <br />
        <label>Occupation:</label>
        <select value={occupation} onChange={(e) => setOccupation(e.target.value)}>
                  <option value="">Occupation</option>
                 <option value="Engineer">Engineer</option>
                 <option value="Designer">Designer</option>
                 <option value="Accountant">Accountant</option>
                 <option value="Teacher">Teacher</option>
                 <option value="Doctor">Doctor</option>
                 <option value="Artist">Artist</option>
                 <option value="Software Engineer">Software Engineer</option>
                 <option value="Lawyer">Lawyer</option>
                 <option value="Marketing Manager">Marketing Manager</option>
                 <option value="Entrepreneur">Entrepreneur</option>
        </select>
        <br /><br />
        <button onClick={handleSearch}>Search</button><br /><br />
        <button onClick={handleReset}>Reset</button><br />
      </div>

      <table>
        {TableHeaderRow()}
        {TableRow({ filteredData })}
      </table>
    </div>
  );
}

export default Table;
