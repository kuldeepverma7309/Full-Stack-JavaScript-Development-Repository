import React, { useState, useEffect } from 'react';

type DataItem = {
  id: number;
  name: string;
  age: number;
};

const App: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const data: DataItem[] = [
    {
      id: 1,
      name: 'John Doe',
      age: 25
    },
    {
      id: 2,
      name: 'Jane Jones',
      age: 30
    },
    {
      id: 3,
      name: 'John Smith',
      age: 35
    },
    {
      id: 4,
      name: 'Smith Das',
      age: 40,
    },
    {
      id: 5,
      name: 'Ram',
      age: 45
    },
    {
      id: 6,
      name: 'Kuldeep',
      age: 21,
    },
    {
      id: 7,
      name: 'Rahul',
      age: 22
    }
  ];

  const [filteredData, setFilteredData] = useState<DataItem[] | null>([]);
  console.log(filteredData)
  useEffect(() => {
    if (search.trim() === '') {
      setFilteredData(null);
      return;
    }
    const filtered_data = data.filter((item) => {
      return item.name.toLowerCase().trim().includes(search.toLowerCase());
    });
    setFilteredData([...filtered_data]);
  }, [search]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Filtered Search</h1>
        <form className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
        </form>
        {
          filteredData && filteredData?.length > 0 && (
            <ul className="list-disc pl-5">
              {
                filteredData.map((item) => (
                  <li key={item.id} className="mb-2">
                    <span className="font-semibold">{item.name}</span> - {item.age}
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default App;