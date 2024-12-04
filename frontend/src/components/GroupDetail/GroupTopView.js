import React, { useState, useEffect } from 'react';
import logo from '../../images/lanadelrey.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GroupTopView = () => {
    const [value] = useState('');
    const [copied, setCopied] = useState(false);
    const [groupdetail, setGroupDetail] = useState([]);
    const { group_id } = useParams();
    const taglist = (tags) => {
        return tags ? tags.split(',') : [];
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/wgroupapi/${group_id}/`);
                console.log(group_id);
                setGroupDetail(response.data);
                console.log(response.data);
                console.log(groupdetail);
            }
            catch (err) {
                console.log('Error fetching data:', err);
                setError('Failed to fetch group data.');
            }
        }
        fetchData();
    }, [group_id]);

    return (
        <div className='bg-slate-600'>
            <div className="flex flex-row bg-green-400 mx-60 gap-2">
                <div className="flex flex-col bg-green-400 mr-10 flex-shrink-0 ml-10 mt-2">
                    <img src={groupdetail.group_image ? groupdetail.group_image : logo} alt="Logo" className="h-20 w-40 rounded-3xl mr-2 object-cover flex-shrink-0" />
                    <h2 className="flex justify-center items-center text-lg bg-slate-400 text-white">{groupdetail.category}</h2>
                </div>
                <div className="flex flex-col bg-green-400 mt-0">
                    <div className="text-5xl font-sans text-white font-bold">
                        <h2>{groupdetail.group_name}</h2>
                    </div>
                    <div className="mt-4 flex flex-row gap-20">
                        <div>
                            {taglist(groupdetail.tags || '').map((tag, idx) => (
                                <button
                                    key={idx}
                                    className="text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium"
                                >
                                    {tag.trim()}
                                </button>
                            ))}
                        </div>
                        <div className='text-black font-sans font-bold'>
                            <h3>{groupdetail.language}</h3>
                        </div>
                    </div>
                    <div className="max-w-md overflow-auto ml-2 mt-2 mb-20 text-1xl font-sans">
                        <p>{groupdetail.description}</p>
                    </div>
                    <div>
                        <input
                            value={groupdetail.whatsapplink || ''}
                            readOnly
                            className="border p-1 mx-2 w-60"
                        />
                        <CopyToClipboard text={groupdetail.whatsapplink || ''} onCopy={() => setCopied(true)}>
                            <button className='bg-gray-700 text-white px-1 py-1 mx-2'>Join Link</button>
                        </CopyToClipboard>
                        {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                    </div>

                    <div className="flex justify-end">
                        <img src={groupdetail.qr_code ? groupdetail.qr_code : logo} alt="Logo" className="h-40 w-auto mr-2 object-cover flex-shrink-0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupTopView;

