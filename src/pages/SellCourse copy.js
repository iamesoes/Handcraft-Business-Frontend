import Navbar from "../components/Navbar";
import useGetFetch from "../components/useGetFetch"
import CourseList from "../components/CourseList";

import { useState, useEffect } from "react";


export default function SellCourse() {
    const { errorCourse, isPendingCustomer, data: courses } = useGetFetch('http://localhost:8000/courses')

    const [filteredDataCourse, setFilteredDataCourse] = useState('');
    const [selectedDate, setSelecetedDate] = useState('');
    const [fee, setFee] = useState('');
    const [selectedHandcrafts, setSelectedHandcrafts] = useState([]);


    const handleHandcraftChange = (e) => {
        const options = e.target.options;
        const selectedValues = [];
        for (let i = 0; i < options.length; i++) {
          if (options[i].selected) {
            selectedValues.push(options[i].value);
          }
        }
        setSelectedHandcrafts(selectedValues); // Update selectedDate state with array of selected values
    };



    useEffect(() => {
        console.log("Filtered Data (Before):", filteredDataCourse); // Log before state update
        setFilteredDataCourse(courses);
    }, [courses]);
    
    useEffect(() => {
        console.log("Filtered Data (After):", filteredDataCourse); // Log after state update
    }, [filteredDataCourse]);


    const handleFilter = (e) => {
        e.preventDefault();
        let filteredData = [...courses]; // Copy original data to prevent mutating it
        
        // Filter by fee
        if (fee !== "") {
            filteredData = filteredData.filter(item => item.fee <= fee);
        }
        
        // Filter by selected handcrafts
        if (selectedHandcrafts.length > 0) {
            filteredData = filteredData.filter(item => selectedHandcrafts.every(handcraft => item.handcraft.includes(handcraft)));
        }

        // Filter by selected dates
        if (selectedDate.length > 0) {
            filteredData = filteredData.filter(item => selectedDate.includes(item.date));
        }



        setFilteredDataCourse(filteredData);

    }

    return (
        <>

            <Navbar />


            <div className="subTitles">

                <form onSubmit={handleFilter}>
                    <label>Kurs Satın Al </label>

                    <div className="form_element_2">

                        <div className="sub_form">

                        <select multiple value={selectedHandcrafts} onChange={handleHandcraftChange}>
                            <option value="option1">Ahşap Boyama</option>
                            <option value="option2">Kumaş Boyama</option>
                            <option value="option3">Vitray</option>
                            <option value="option3">Tahta Oymacılık</option>
                            <option value="option3">Rölyef</option>
                        </select>

                            <input 
                                type="text"  
                                value={fee}
                                placeholder="Bütçe"
                                onChange={(e) => setFee(e.target.value)}
                            />

                        </div>

                        <div className="sub_form">

                            <label>Uygun Olunan Zaman: </label>
                            

                            <select value={selectedDate} onChange={(e) => setSelecetedDate(e.target.value)} >
                                <option value="option1">Hafta İçi</option>
                                <option value="option2">Hafta Sonu</option>
                                <option value="option3">İkisi de</option>
                            </select>
                            

                        </div>

                    
                        <button>Filtrele</button>
                    </div>
                </form>

            </div>

            <div className="all_courses">

                <div className="sub" >
                    <div className="getUserInfo">
                        { errorCourse && <div>{ errorCourse }</div> }
                        { filteredDataCourse && <CourseList clients={filteredDataCourse} /> }
                    </div>
                </div>
                
            </div>

        </>
    );
}
