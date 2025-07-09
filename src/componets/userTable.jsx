import React, { useState } from 'react';
import Details from './Details';
import ProductDetails from './Details/productDetails';


const UserTable = ({ dataToShow, type }) => {
  const [detail, setDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRowClick = (item) => {
    setSelectedItem(item);
    setDetail(true);
  };

  return (
    <>
     
      {detail && selectedItem && (
        type === 'users' ? (
          <Details data={selectedItem} onClose={() => setDetail(false)} />
        ) : (
          <ProductDetails data={selectedItem} onClose={() => setDetail(false)} />
        )
      )}

      <table className="w-full font-sans text-xl text-white text-center">
        <thead className="bg-slate-900 text-white text-center">
          {type === 'users' ? (
            <tr className="h-12 border-b-1 border-gray-400 w-60">
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          ) : (
            <tr className="h-12 border-b-1 border-gray-400">
              <th>#</th>
              <th>Category</th>
              <th>Title</th>
              <th>Price</th>
              <th>Gender</th>
              <th>Size</th>
            </tr>
          )}
        </thead>

        <tbody>
          {dataToShow.map((item, index) => (
            <tr
              className="w-96 border-b-1 border-gray-400 h-10 bg-slate-800 cursor-pointer"
              key={index}
              onClick={() => handleRowClick(item)}
            >
              <td>{index + 1}</td>
              {type === 'users' ? (
                <>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.address?.city}</td>
                </>
              ) : (
                <>
                  <td>{item.category?.name}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.gender}</td>
                  <td>{item.size?.join(',')}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;