import { observer } from "mobx-react-lite";
import NavBar from "../components/NavBar"
import React from 'react';

import Footer from '../components/Footer';


const Delivery = observer(() => {
    return (
        <>

            <div className='flex flex-col justify-between h-screen'>
                <NavBar />
                <div className="fixed">
                </div>

                <div className="fixed w-auto  flex justify-center items-center self-center my-44">
                    <div>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A5cfa30580e073ab81dba39dba92fe290c029a022522a0047867c96a412874513&amp;source=constructor" className="absolute" width="630" height="510px"></iframe>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
});

export default Delivery