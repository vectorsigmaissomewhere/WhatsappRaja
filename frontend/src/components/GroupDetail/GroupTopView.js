import React, { useState } from 'react';
import logo from '../../images/lanadelrey.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const GroupTopView = () => {
    const [value] = useState('Default value');
    const [copied, setCopied] = useState(false);
    const [groupdetail, setGroupDetail] = useState([]);
    const taglist = (tags) =>{
        return tags ? tags.split(',') : [];
    }
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get('http://127.0.0.1:8000/wgroupapi/');
                setGroupDetail(response.data);
                console.log(groupdetail);
            }
            catch(err){
                console.erro('Error fetching data:', err);
                setError('Failed to fetch group data.');
            }
        }
    });

    return (
        <div className='bg-slate-600'>
        <div className="flex flex-row bg-green-400 mx-60 gap-2">
            <div className="flex flex-col bg-green-400 mr-10 flex-shrink-0 ml-10 mt-2">
                <img src={logo} alt="Logo" className="h-20 w-40 rounded-3xl mr-2 object-cover flex-shrink-0" />
                <h2 className="flex justify-center items-center text-lg bg-slate-400 text-white">Group Logo</h2>
            </div>
            <div className="flex flex-col bg-green-400 mt-0">
                <div className="text-5xl font-sans text-white font-bold">
                    <h2>Manang ko Purple Haze</h2>
                </div>
                <div className="mt-4 flex flex-row gap-20">
                <div>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Manang</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Ko</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Purple</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">Haze</button>
                    <button className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium">FuuFuu</button>
                </div>
                <div className='text-black font-sans font-bold'>
                    <h3>Nepali</h3>
                </div>
                </div>
                <div className="max-w-md overflow-auto ml-2 mt-2 mb-20 text-1xl font-sans">
                    <p>
                        In the remote, rugged Himalayas of northern Nepal, Manang is a hidden gem known for its
                        breathtaking landscapes and high-altitude beauty...
                        In the remote, rugged Himalayas of northern Nepal, Manang is a hidden gem known for its
                        breathtaking landscapes and high-altitude beauty...
                    </p>
                </div>
                <div>
                    <input
                        value={value}
                        readOnly
                        className="border p-1 mx-2 w-60"
                    />
                    <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                        <button className='bg-gray-700 text-white px-1 py-1 mx-2'>Join Link</button>
                    </CopyToClipboard>
                    {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                </div>
                <div className="flex justify-end">
                    <img src={logo} alt="Logo" className="h-40 w-auto mr-2 object-cover flex-shrink-0" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default GroupTopView;

