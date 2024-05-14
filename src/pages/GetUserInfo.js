import Navbar from "../components/Navbar";
import useGetFetch from "../components/useGetFetch"
import ClientList from "../components/ClientList";
import TrainerList from "../components/TrainerList";
import { useState, useEffect } from "react";


export default function GetUserInfo() {
    const { errorCustomer, isPendingCustomer, data: customers } = useGetFetch('http://localhost:8080/applicant/viewAll')
    const { errorTrainer, isPendingTrainer, data: trainers } = useGetFetch('http://localhost:8080/instructor/viewAll')

    const [trainerName, setTrainerName] = useState('');
    const [customerName, setCustomerName] = useState('');

    const [filteredDataTrainer, setFilteredDataTrainer] = useState('');
    const [filteredDataCustomer, setFilteredDataCustomer] = useState('');


    useEffect(() => {
        console.log(customers);
        setFilteredDataCustomer(customers);
        setFilteredDataTrainer(trainers);
    }, [customers,trainers]); // Empty dependency array ensures this effect runs only once, on mount



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

    const handleSubmitTrainer = (e) => {
        e.preventDefault();
        let filteredData; 

        if(trainerName !== ""){
            filteredData = trainerName ? trainers.filter(item => (item.name + " " + item.surname).toLowerCase().includes(trainerName.toLowerCase()) ): trainers;
        }
        else{
            filteredData = trainers;
        }
        setFilteredDataTrainer(filteredData);
    }

    return (
        <>

            <Navbar />


            <div className="subTitles">

                <form onSubmit={handleSubmitCustomer}>
                    <label>Müşteri Bilgileri</label>

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

                <form onSubmit={handleSubmitTrainer}>
                    <label>Antrenör Bilgileri</label>

                    <div className="form_element">
                        <input 
                            type="text"  
                            value={trainerName}
                            placeholder="Name"
                            onChange={(e) => setTrainerName(e.target.value)}
                        />
                        <button>Ara</button>
                    </div>
                </form>


            </div>

            <div className="allUserInfo">

                <div className="sub" >
                    <div className="getUserInfo">
                        { errorCustomer && <div>{ errorCustomer }</div> }
                        { filteredDataCustomer && <ClientList clients={filteredDataCustomer} /> }
                    </div>
                </div>
                

                
    

                <div className="sub sub2" >

                    <div className="getUserInfo">
                        { errorTrainer && <div>{ errorCustomer }</div> }
                        { filteredDataTrainer && <TrainerList trainers={filteredDataTrainer} /> }
                    </div>

                </div>

            </div>

        </>
    );
}
