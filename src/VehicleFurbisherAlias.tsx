import React, { useState } from 'react';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';

const VehicleFurbisherAlias = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <div className="page-container">
      <div className="navbar justify-between items-center mb-8">
        <Link to='#' className='menu-bars'>
            {sidebar ? (
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            ) : (
              <FaIcons.FaBars onClick={showSidebar} />
            )}
        </Link>
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
      </nav>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-lime-500">Vehicle furbisher</h1>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="furbish-container">
          <h2 className="text-xl font-bold mb-4">Vehicles to furbish</h2>
          <div className="vehicle-no">
            26
          </div>
        </div>

        <div className="col-span-2">
          <div className="vehicle-container">
            <h2 className="text-xl font-bold mb-4">Vehicles requirements</h2>
            <div className="vehicle-req flex items-center space-x-2 mb-4">
              <span className="Toyota section text-white px-2 py-1 rounded">Toyota XR</span>
              <span className="Woolworths section text-white px-2 py-1 rounded">Woolworths</span>
              <span className="Design section text-white">Design</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 text-[var(--foreground)]">
                  <FaFolderOpen className="icon" title="Folder View All" />
                  <span>View all</span>
                </button>
                <button className="flex items-center space-x-1 text-[var(--foreground)]">
                  <FaDownload className="icon" />
                  <span>Download all</span>
                </button>
              </div>
              <button className="flex items-center space-x-1 text-[var(--foreground)]">
                <FaArrowRight className="icon" />
                <span>Next</span>
              </button>
            </div>
          </div>

          <div className="confirmation-container">
            <h2 className="text-xl font-bold mb-4">Confirm complete vehicles</h2>
            <div className="vehicle-req flex items-center space-x-2 mb-4">
              <span className="Toyota section text-white px-2 py-1 rounded">Toyota XR</span>
              <span className="Woolworths section text-white px-2 py-1 rounded">Woolworths</span>
              <span className="Design section text-white">Design</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <button className="flex items-center">
                  <FaFolderOpen className="icon" title="Folder View All" />
                  <span>View all</span>
                </button>
                <button className="flex items-center">
                  <FaCheckCircle className="icon" />
                  <span>Confirm all complete</span>
                </button>
              </div>
              <button className="flex items-center">
                <FaArrowRight className="icon" />
                <span>Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="p-2">Car</th>
              <th className="p-2">Car owner</th>
              <th className="p-2 bg-purple-500">Client</th>
              <th className="p-2 bg-black">Car owner address</th>
              <th className="p-2">Phone Number</th>
              <th className="p-2">Design</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Toyota XR</td>
              <td className="p-2">Greg</td>
              <td className="p-2">Woolworths</td>
              <td className="p-2">Port Beulah, Iowa 89712, United States of America</td>
              <td className="p-2"> 905-068-8439</td>
              <td className="p-2"> </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Rollin Fadel</td>
              <td className="p-2">Steuber LLC</td>
              <td className="p-2">Rollin_Fadel@gmail.com</td>
              <td className="p-2">Lake Matilde, Tennessee 74052, United States of America</td>
              <td className="p-2"> (217) 057-6055</td>
              <td className="p-2"> </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Lera Stroman</td>
              <td className="p-2">Konopelski Group</td>
              <td className="p-2">Lera_Stroman39@gmail.com</td>
              <td className="p-2">Vicentview, Mississippi 47516-9630, United States of America</td>
              <td className="p-2"> 166-619-2267</td>
              <td className="p-2"></td>
            </tr>
            <tr>
              <td className="p-2">Adan Schiller</td>
              <td className="p-2">Harber Inc</td>
              <td className="p-2">Adan_Schiller19@yahoo.com</td>
              <td className="p-2">Yorunlenberg, Delaware 90074-0032, United States of America</td>
              <td className="p-2"> (899) 824-5724</td>
              <td className="p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleFurbisherAlias;
