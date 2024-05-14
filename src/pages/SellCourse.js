import Navbar from "../components/Navbar";
import useGetFetch from "../components/useGetFetch"
import CourseList from "../components/CourseList";
import ClientList from "../components/ClientList";


import { useState, useEffect } from "react";


export default function SellCourse() {
    const { errorCourse, isPendingCourse, data: courses } = useGetFetch('http://localhost:8080/course/allViews')
    const { errorCustomer, isPendingCustomer, data: customers } = useGetFetch('http://localhost:8080/applicant/viewAll')

    const [filteredDataCourse, setFilteredDataCourse] = useState('');
    const [selectedDate, setSelecetedDate] = useState('');
    const [fee, setFee] = useState('');
    const [selectedHandcrafts, setSelectedHandcrafts] = useState([]);
    const [customerName, setCustomerName] = useState('');
    const [filteredDataCustomer, setFilteredDataCustomer] = useState('');


    const [selectedCustomerID, setSelectedCustomer] = useState('');
    const [selectedCourseID, setSelectedCourse] = useState('');

    // Define the URL you want to send the POST request to
    const url = 'http://localhost:8080/course/addApplicant';

    // Define the data you want to send in the request body


    const sellSubscription = () => { 
        console.log("Selling, customer id: " + selectedCustomerID + ", course id: " + selectedCourseID);
        const data = {
            applicantId: selectedCustomerID,
            courseId: selectedCourseID
        };
    
        // Define the options for the fetch request, including method and headers
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data), // Convert the data to JSON format
            //mode: 'no-cors' // Set mode to 'no-cors'
        };
    
        // Send the fetch request
        fetch(url, options)
        .then(response => {
            // Check if the response is successful (status code in the range 200-299)
            if (response.ok) {
                console.error("kurs eklendi");
            // If successful, parse the JSON response
            return response.json();
            } else {
            // If not successful, throw an error with the status text
            throw new Error('Something went wrong: ' + response.statusText);
            }
        })
        .then(data => {
            // Handle the data received from the server
            console.log('Response from server:', data);
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch request
            console.error('Error:', error);
        });
    }

  
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
            filteredData = customerName ? customers.filter(item => (item.userView.name + " " +item.userView.surname).toLowerCase().includes(customerName.toLowerCase()) ): customers;
        }
        else{
            filteredData = customers;
        }
        setFilteredDataCustomer(filteredData);

    }



    useEffect(() => {
        setFilteredDataCourse(courses);
        setFilteredDataCustomer(customers);

        setSelectedHandcrafts("");
        setSelecetedDate("none");
        setFee("");

    }, [courses,customers]);
    

    const handleFilter = (e) => {
        e.preventDefault();

        let filteredData = [...courses]; // Copy original data to prevent mutating it
        
        // Filter by fee
        if (fee !== "") {
            console.log("in fee");
            filteredData = filteredData.filter(item => parseInt(item.currentCourseFee) <= parseInt(fee));
        }
        
        // Filter by selected handcrafts V1
        // if (selectedHandcrafts.length > 0) {
        //     if(!selectedHandcrafts.includes("none")){
        //         filteredData = filteredData.filter(item => selectedHandcrafts.every(handcraft => item.handicrafts.includes(handcraft)));
        //     }
        // }

        if (selectedHandcrafts !== "") {

            filteredData = filteredData.filter(item => {
                // Check if any handcraft name contains the selectedHandcraft (case-insensitive)
                return item.handicrafts.length > 0 && item.handicrafts.some(handcraft => {
                    

                    // Check if the handcraft name exists and contains the selectedHandcraft (case-insensitive)
                    return handcraft.handicraftTypeName && handcraft.handicraftTypeName.toLowerCase().includes(selectedHandcrafts.toLowerCase());
                });
            });
        }

        // Filter by selected dates
        // if (selectedDate.length > 0 ) {
        //     if(selectedDate === "week" || selectedDate === "weekend" ){
        //         filteredData = filteredData.filter(item => selectedDate === item.time);
        //     }
        // }

        if (selectedDate.length > 0 && selectedDate !== "none") {
            
            filteredData = filteredData.filter(item => {

                // Check if any handcraft name contains the selectedHandcraft (case-insensitive)
                return item.days.length > 0 && item.days.some(day => {
                    

                    // Check if the handcraft name exists and contains the selectedHandcraft (case-insensitive)
                    return day && day.toLowerCase().includes(selectedDate.toLowerCase());
                });
            });
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
                                <option value="MONDAY">Pazartesi</option>
                                <option value="TUESDAY">Salı</option>
                                <option value="WEDNESDAY">Çarşamba</option>
                                <option value="THURSDAY">Perşembe</option>
                                <option value="FRIDAY">Cuma</option>
                                <option value="SATURDAY">Cumartesi</option>
                                <option value="SUNDAY">Pazar</option>
                            </select>

                        </div>

                        <div className="sub_form2">

                            <input 
                                type="text"  
                                value={selectedHandcrafts}
                                placeholder="El İşi Seçiniz"
                                onChange={(e) => setSelectedHandcrafts(e.target.value)}
                            />


                            {/* <select className="select_2" multiple value={selectedHandcrafts} onChange={handleHandcraftChange}>
                                <option value="none">El İşi Seçiniz</option>
                                <option disabled value=""></option>
                                <option value="Ahşap Boyama">Ahşap Boyama</option>
                                <option value="Kumaş Boyama">Kumaş Boyama</option>
                                <option value="Vitray">Vitray</option>
                                <option value="Tahta Oymacılık">Tahta Oymacılık</option>
                                <option value="Rölyef">Rölyef</option>
                            </select> */}

                            

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
            <button className="buy_button" onClick={sellSubscription}> Nakit Satın Al </button>
            <button className="buy_button " onClick={sellSubscription}> Kartla Satın Al </button>
            </div>




        </>
    );
}
