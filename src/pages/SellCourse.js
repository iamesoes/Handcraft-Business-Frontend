import Navbar from "../components/Navbar";
import useGetFetch from "../components/useGetFetch"
import CourseList from "../components/CourseList";
import ClientList from "../components/ClientList";


import { useState, useEffect } from "react";


export default function SellCourse() {
    const { errorCourse, isPendingCourse, data: courses } = useGetFetch('http://localhost:8000/courses')
    const { errorCustomer, isPendingCustomer, data: customers } = useGetFetch('http://localhost:8000/customers')

    const [filteredDataCourse, setFilteredDataCourse] = useState('');
    const [selectedDate, setSelecetedDate] = useState('');
    const [fee, setFee] = useState('');
    const [selectedHandcrafts, setSelectedHandcrafts] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [filteredDataCustomer, setFilteredDataCustomer] = useState('');


    const [selectedCustomerID, setSelectedCustomer] = useState('');
    const [selectedCourseID, setSelectedCourse] = useState('');
  
    const handleClientClick = (id) => {
        let isChosen = false;

        // Perform actions or obtain information when the div is clicked
        console.log('Client Clicked', id);
        // You can add your logic here

        if(document.getElementById("client_"+id).classList.contains("selected")){
            isChosen = true;
        }
        
        const customerListElements = document.querySelectorAll('.customer_list');

        // Iterate over the NodeList and remove the class from each element
        customerListElements.forEach(element => {
            element.classList.remove('selected');
        });

        if(!isChosen){
            document.getElementById("client_"+id).classList.add("selected");
            setSelectedCustomer(id);
        }
        else{
            setSelectedCustomer("");
        }


    };

    const handleCourseClick = (id) => {
        let isChosen = false;
        // Perform actions or obtain information when the div is clicked
        console.log('Course Clicked', id);
        // You can add your logic here

        if(document.getElementById("course_"+id).classList.contains("selected")){
            isChosen = true;
        }
        
        const customerListElements = document.querySelectorAll('.course_list');

        // Iterate over the NodeList and remove the class from each element
        customerListElements.forEach(element => {
            element.classList.remove('selected');
        });

        if(!isChosen){
            setSelectedCourse(id);
            document.getElementById("course_"+id).classList.add("selected");
        }
        else{
            setSelectedCourse("");
        }
    };


    

    



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

    const handleSubmitCustomer = (e) => {
        e.preventDefault();
        let filteredData; 


        if(customerName !== ""){
            filteredData = customerName ? customers.filter(item => item.name.toLowerCase().includes(customerName.toLowerCase()) ): customers;
        }
        else{
            filteredData = customers;
        }
        setFilteredDataCustomer(filteredData);

    }



    useEffect(() => {
        setFilteredDataCourse(courses);
        setFilteredDataCustomer(customers);

    }, [courses,customers]);
    

    const handleFilter = (e) => {
        e.preventDefault();
        console.log(selectedHandcrafts);
        let filteredData = [...courses]; // Copy original data to prevent mutating it
        
        // Filter by fee
        if (fee !== "") {
            console.log("in fee");
            filteredData = filteredData.filter(item => parseInt(item.fee) <= parseInt(fee));
        }
        
        // Filter by selected handcrafts
        if (selectedHandcrafts.length > 0) {
            if(!selectedHandcrafts.includes("none")){
                filteredData = filteredData.filter(item => selectedHandcrafts.every(handcraft => item.handcrafts.includes(handcraft)));
            }
        }

        // Filter by selected dates
        if (selectedDate.length > 0) {
            if(selectedDate === "week" || selectedDate === "weekend" ){
                filteredData = filteredData.filter(item => selectedDate === item.time);
            }
        }

        setFilteredDataCourse(filteredData);

    }

    return (
        <>

            <Navbar />


            <div className="subTitles">

                <form onSubmit={handleFilter}>
                    <label>Kurs Bilgisi Filtrele </label>

                    <div className="form_element_2">

                        <div className="sub_form">

                            <input 
                                type="text"  
                                value={fee}
                                placeholder="Bütçe"
                                onChange={(e) => setFee(e.target.value)}
                            />

                            <select value={selectedDate} onChange={(e) => setSelecetedDate(e.target.value)} >
                                <option value="none">Zaman Seçiniz</option>
                                <option value="week">Hafta İçi</option>
                                <option value="weekend">Hafta Sonu</option>
                                <option value="both">İkisi de</option>
                            </select>

                        </div>

                        <div className="sub_form2">


                            <select className="select_2" multiple value={selectedHandcrafts} onChange={handleHandcraftChange}>
                                <option value="none">El İşi Seçiniz</option>
                                <option disabled value=""></option>
                                <option value="Ahşap Boyama">Ahşap Boyama</option>
                                <option value="Kumaş Boyama">Kumaş Boyama</option>
                                <option value="Vitray">Vitray</option>
                                <option value="Tahta Oymacılık">Tahta Oymacılık</option>
                                <option value="Rölyef">Rölyef</option>
                            </select>

                            

                        </div>

                    
                        <button>Filtrele</button>
                    </div>
                </form>

                <form onSubmit={handleSubmitCustomer}>
                    <label>Müşteri Bilgisi Filtrele</label>

                    <div className="form_element">
                        <input 
                            type="text"  
                            value={customerName}
                            placeholder="Name"
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                        <button>Ara</button>
                    </div>
                </form>

            </div>

            <div className="all_courses">

                <div className="sub" >
                    <div className="getUserInfo">
                        { errorCourse && <div>{ errorCourse }</div> }
                        { filteredDataCourse && <CourseList courses={filteredDataCourse} handleCourseClick={handleCourseClick} /> }
                    </div>
                </div>

                <div className="sub" >
                    <div className="getUserInfo">
                        { errorCustomer && <div>{ errorCustomer }</div> }
                        { filteredDataCustomer && <ClientList clients={filteredDataCustomer} handleClientClick={handleClientClick} /> }
                    </div>
                </div>
                
            </div>

            <div className="button_container">
            <button className="buy_button"> Nakit Satın Al </button>
            <button className="buy_button "> Kartla Satın Al </button>
            </div>




        </>
    );
}
