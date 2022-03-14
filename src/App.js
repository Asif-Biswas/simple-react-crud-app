import { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TableRow from "./components/TableRow";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([
  ]);
  const [editItemId, setEditItemId] = useState(null);
  const [lastId, setLastId] = useState(0);

  const editItem = (id) => {
    setShowForm(true);
    setEditItemId(id);
  }

  const deleteItem = (id) => {
    setData(data.filter(item => item.id !== id));
  }


  if (data.length) {
    return (
      <div style={{margin:'8px'}}>
      <div style={{maxWidth:'800px', width:'100%', margin:'36px auto', position:'relative'}}>
        <button onClick={()=> setShowForm(!showForm)} className="button-green" style={{fontSize:'18px', fontWeight:'bold'}}>Add</button>
        <br/><br/>
        <table id="crud">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th style={{maxWidth:'220px'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => {
              return (
                <TableRow key={item.id} id={item.id} firstname={item.firstname} lastname={item.lastname} editItem={editItem} deleteItem={deleteItem} />
              )
            })}
            </tbody>
        </table>

        {showForm?(
          <Form editItemId={editItemId} setShowForm={setShowForm} showForm={showForm} data={data} setData={setData} editItemId={editItemId} setEditItemId={setEditItemId} lastId={lastId} setLastId={setLastId} />
        ): null}
        
      </div>
    </div>
    )
  } else {
    return (
      <div style={{margin:'8px'}}>
      <div style={{maxWidth:'800px', width:'100%', margin:'36px auto', position:'relative'}}>
        <button onClick={()=> setShowForm(!showForm)} className="button-green" style={{fontSize:'18px', fontWeight:'bold'}}>Add</button>
        <br/><br/>
        <table id="crud">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            </tbody>
        </table>

        {showForm?(
          <Form editItemId={editItemId} setShowForm={setShowForm} showForm={showForm} data={data} setData={setData} editItemId={editItemId} setEditItemId={setEditItemId} lastId={lastId} setLastId={setLastId} />
        ): null}
        
      </div>
    </div>
    );
  }
}

export default App;
