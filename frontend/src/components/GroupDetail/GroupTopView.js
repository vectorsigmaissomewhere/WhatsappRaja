import React from 'react';
import logo from '../../images/lanadelrey.jpg';

const GroupTopView = () => {
    return (
        <div className="flex flex-row bg-red-600 mx-60 gap-2">
            <div className="flex flex-col bg-blue-200 mr-10 flex-shrink-0 ml-10">
                <img src={logo} alt="Logo" className="h-20 w-40 rounded-3xl mr-2 object-cover flex-shrink-0" />
                <h2 className="text-lg bg-slate-400 text-white">group logo</h2>
            </div>
            <div className="flex flex-col bg-green-200 mt-0">
                <div className='text-5xl font-sans text-white font-bold'>
                    <h2>Manang ko Purple Haze</h2>
                </div>
                <div className='mt-4'>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Manang</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Ko</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Purple</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Haze</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">FuuFuu</button>
                </div>
                <div className="max-w-md overflow-auto ml-2 mt-2 mb-20 text-1xl font-sans">
                    <p>
                        In the remote, rugged Himalayas of northern Nepal, Manang is a hidden gem known for its
                        breathtaking landscapes and high-altitude beauty...
                        In the remote, rugged Himalayas of northern Nepal, Manang is a hidden gem known for its
                        breathtaking landscapes and high-altitude beauty...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GroupTopView;
