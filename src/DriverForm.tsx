import React, { useState } from 'react';
import './index.css';
import Header from './components/Header2';
import Footer from './components/Footer';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaFolderOpen, FaDownload, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './components/SidebarData';
import './components/Navbar';

const DriverForm: React.FC = () => {
    const [drivingTimes, setDrivingTimes] = useState({ start: '00:00', end: '23:59' });
    const [specialNote, setSpecialNote] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDrivingTimes({
            ...drivingTimes,
            [name]: value,
        });
    };

    const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setSpecialNote(e.target.value);
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!drivingTimes.start) newErrors.start = 'Start time is required';
        if (!drivingTimes.end) newErrors.end = 'End time is required';
        if (!specialNote) newErrors.specialNote = 'Special note is required';
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted:', { drivingTimes, specialNote });
            // Add your form submission logic here
        }
    };

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className="driver-form-container">
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

            <div className="driver-form-page">
                <h2 className="title">Driver</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Driving times</label>
                        <div className="time-inputs">
                            <input
                                type="time"
                                name="start"
                                value={drivingTimes.start}
                                onChange={handleTimeChange}
                                required
                            />
                            <input
                                type="time"
                                name="end"
                                value={drivingTimes.end}
                                onChange={handleTimeChange}
                                required
                            />
                        </div>
                        {errors.start && <span className="error">{errors.start}</span>}
                        {errors.end && <span className="error">{errors.end}</span>}
                    </div>
                    <div className="form-group">
                        <label>Special note</label>
                        <textarea
                            name="specialNote"
                            placeholder="Any other preference you may need we have not thought about"
                            value={specialNote}
                            onChange={handleNoteChange}
                            required
                        />
                        {errors.specialNote && <span className="error">{errors.specialNote}</span>}
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
                </form>
            </div>
        </div>
    );
};

export default DriverForm;
