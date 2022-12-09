import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';




const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    return (
        <header className='mt-20'>
            <div className="hero" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className="p-5 lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className=''>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;