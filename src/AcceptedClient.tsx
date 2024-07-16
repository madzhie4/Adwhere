import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './AcceptedClient.css';
import Header from './components/Header';

const AcceptedClient: React.FC = () => {
  const [numVehicles, setNumVehicles] = useState<number>(8);
  const [fullyFurbished, setFullyFurbished] = useState<number>(3);
  const [halfFurbished, setHalfFurbished] = useState<number>(3);
  const [littleFurbished, setLittleFurbished] = useState<number>(2);
  const [increasedSales, setIncreasedSales] = useState<boolean>(true);
  const [newCustomers, setNewCustomers] = useState<boolean>(false);
  const [adStartDate, setAdStartDate] = useState<string>('');
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [extraNote, setExtraNote] = useState<string>('');

  const handleIncrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => prev + 1);
  };

  const handleDecrement = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setDesignFile(event.target.files[0]);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
  };

  const hrStyles = {
      border: 'none',
      borderTop: '1px solid #ccc',
      margin: '10px 0',
  };

  return (
    <div className="container my-5">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="form-section">
        <h3 className="mb-4">Vehicle Refurbishment</h3>
        <hr style={hrStyles}/>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Number of vehicles</label>
          <div className="input-group">
            <button className="btn btn-primary" onClick={() => handleDecrement(setNumVehicles)}>-</button>
            <input type="number" className="form-control text-center" value={numVehicles} readOnly />
            <button className="btn btn-primary" onClick={() => handleIncrement(setNumVehicles)}>+</button>
          </div>
        </div>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Fully furbished</label>
          <div className="input-group">
            <button className="btn btn-primary" onClick={() => handleDecrement(setFullyFurbished)}>-</button>
            <input type="number" className="form-control text-center" value={fullyFurbished} readOnly />
            <button className="btn btn-primary" onClick={() => handleIncrement(setFullyFurbished)}>+</button>
          </div>
        </div>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Half furbished</label>
          <div className="input-group">
            <button className="btn btn-primary" onClick={() => handleDecrement(setHalfFurbished)}>-</button>
            <input type="number" className="form-control text-center" value={halfFurbished} readOnly />
            <button className="btn btn-primary" onClick={() => handleIncrement(setHalfFurbished)}>+</button>
          </div>
        </div>
        <div className="mb-3 vehicle-refurbishment">
          <label className="form-label">Little furbished</label>
          <div className="input-group">
            <button className="btn btn-primary" onClick={() => handleDecrement(setLittleFurbished)}>-</button>
            <input type="number" className="form-control text-center" value={littleFurbished} readOnly />
            <button className="btn btn-primary" onClick={() => handleIncrement(setLittleFurbished)}>+</button>
          </div>
        </div>

        <h3 className="mb-4">Customers</h3>
        <hr style={hrStyles}/>
        <div className="form-check mb-3 customer">
          <input className="form-check-input" type="checkbox" id="increasedSales" checked={increasedSales} onChange={() => setIncreasedSales(!increasedSales)} />
          <label className="form-check-label" htmlFor="increasedSales">
            Increased current customer sales
          </label>
        </div>
        <div className="form-check mb-3 customer">
          <input className="form-check-input" type="checkbox" id="newCustomers" checked={newCustomers} onChange={() => setNewCustomers(!newCustomers)} />
          <label className="form-check-label" htmlFor="newCustomers">
            Get new customers
          </label>
        </div>

        <h3 className="mb-4">Period of ad campaign</h3>
        <hr style={hrStyles}/>
        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input type="date" className="form-control" value={adStartDate} onChange={(e) => setAdStartDate(e.target.value)} />
        </div>
      </div>

      <div className="form-section">
        <h3 className="mb-4">Ad channel</h3>
        <hr style={hrStyles}/>
        <div className="form-check mb-3 ad-channel">
          <input className="form-check-input" type="checkbox" id="adIncreasedSales" checked={increasedSales} onChange={() => setIncreasedSales(!increasedSales)} />
          <label className="form-check-label" htmlFor="adIncreasedSales">
            Increased current customer sales
          </label>
        </div>
        <div className="form-check mb-3 ad-channel">
          <input className="form-check-input" type="checkbox" id="adNewCustomers" checked={newCustomers} onChange={() => setNewCustomers(!newCustomers)} />
          <label className="form-check-label" htmlFor="adNewCustomers">
            Get new customers
          </label>
        </div>

        <h3 className="mb-4">Design requirements</h3>
        <hr style={hrStyles}/>
        <div className="mb-3">
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>

        <h3 className="mb-4">Extra Note (Additional Notes)</h3>
        <hr style={hrStyles}/>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Example text" value={extraNote} onChange={(e) => setExtraNote(e.target.value)} />
        </div>

        <div className="button-container-4">
          <div className="button-row">
            <button type="submit" className="btn-submit">Submit</button>
            <button type="button" className="btn-submit-journey">Submit & Go to Journey</button>
          </div>
          <div className="button-row">
            <button type="button" className="btn-save">Save</button>
            <button type="button" className="btn-edit">Edit</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AcceptedClient;
