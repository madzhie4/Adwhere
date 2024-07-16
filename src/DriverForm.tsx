import React, { useState } from 'react';
import './DriverForm.css';
import Header from './components/Header2';
import Footer from './components/Footer';

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

    return (
        <div className="driver-form-container">
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
                    <div className="form-buttons">
                        <button type="submit">Submit</button>
                        <button type="submit">Submit & Go to journey</button>
                        <button type="button">Save</button>
                        <button type="button" disabled>Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DriverForm;
