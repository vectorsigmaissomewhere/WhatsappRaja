import React from 'react'
import logo from '../images/lanadelrey.jpg';

const Footer = () => {
    return (
        <>
            <div className='bg-gray-700'>
                <div className="flex justify-end w-full bg-gray-700 p-4">
                    <div className="px-10 py-2 inline-flex bg-slate-50 text-black rounded-lg">
                        <img src={logo} alt="Logo" className="h-10 w-auto rounded-full mr-2" />
                        <span className='text-lg'>whatraja</span>
                    </div>
                </div>
                <div className='grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-2.5 p-2.5 bg-gray-700 text-white font-normal'>
                    <div className='text-sm'>
                        <button className='mx-2 hover:underline'>. Home .</button>
                        <button className='mx-2 hover:underline'>. Search .</button>
                        <button className='mx-2 hover:underline'>. Public WHATSAPPRAJA Servers .</button>
                        <button className='mx-2 hover:underline'>. WHATSAPPRAJA Server Reviews .</button>
                        <button className='mx-2 hover:underline'>. Official WHATSAPPRAJA Server .</button>
                        <button className='mx-2 hover:underline'>. Twitter .</button>
                        <button className='mx-2 hover:underline'>. Terms of Service .</button>
                        <button className='mx-2 hover:underline'>. Guidelines .</button>
                        <button className='mx-2 hover:underline'>. Bot Status .</button>
                        <button className='mx-2 hover:underline'>. Logout .</button>
                    </div>
                    <div className='text-sm'>
                        <p>WHATSAPPRAJA was made to make everyone enjoy WHATSAPPRAJA more.
                            We hope you find awesome WHATSAPPRAJA servers and friends here 😊.</p>
                    </div>
                </div>
                <div className='flex items-center justify-center font-semibold text-lg text-white'>
                    <h2>© 2024 WHATSAPPRAJA</h2>
                </div>
            </div>
        </>
    )
}

export default Footer
