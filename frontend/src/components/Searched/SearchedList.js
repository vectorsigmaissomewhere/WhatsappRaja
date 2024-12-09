import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import serverpic from '../../images/lanadelrey.jpg';

const SearchedList = () => {
    const location = useLocation();
    const results = location.state?.results || []; // Default to an empty array if no results

    return (
        <div className="p-6 bg-slate-800 min-h-screen">
            {results.length === 0 ? (
                <p className="text-white text-2xl text-center mt-10">No results found</p> // Display a message if no results
            ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 text-white rounded-lg shadow-lg p-6 space-y-4 transform hover:scale-105 transition-transform duration-300"
                        >
                            {/* Rating Section */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    {[...Array(result.rating || 0)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400">({result.reviews || 0} reviews)</p>
                            </div>

                            {/* Main Details */}
                            <div className="flex items-center space-x-4">
                                <img
                                    src={serverpic}
                                    alt="serverpic"
                                    className="h-14 w-14 rounded-full object-cover border-2 border-gray-700"
                                />
                                <div>
                                    <h2 className="text-lg font-semibold">{result.name || 'No Name'}</h2>
                                    <p className="text-sm text-gray-400">{result.category || 'No Category'}</p>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="text-sm text-gray-300">
                                <p><strong>Users:</strong> {result.users || 'N/A'}</p>
                                <p><strong>Description:</strong> {result.description || 'No Description'}</p>

                                {/* Tags */}
                                {result.tags && (
                                    <div className="mt-2">
                                        <strong>Tags:</strong>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {(Array.isArray(result.tags)
                                                ? result.tags
                                                : (result.tags || '').split(',')).map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-gray-700 px-3 py-1 rounded-full text-xs"
                                                >
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Language */}
                                <p><strong>Language:</strong> {result.language || 'Not Specified'}</p>

                                {/* NSFW Status */}
                                <p>
                                    <strong>NSFW:</strong>{' '}
                                    <span
                                        className={`font-bold ${
                                            result.nsfw ? 'text-red-500' : 'text-green-500'
                                        }`}
                                    >
                                        {result.nsfw ? 'Yes' : 'No'}
                                    </span>
                                </p>

                                {/* WhatsApp Link */}
                                {result.whatsappLink && (
                                    <p>
                                        <strong>WhatsApp:</strong>{' '}
                                        <a
                                            href={result.whatsappLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 underline"
                                        >
                                            Open Chat
                                        </a>
                                    </p>
                                )}

                                {/* QR Code */}
                                {result.qrCode && (
                                    <div className="mt-4">
                                        <strong>QR Code:</strong>
                                        <img
                                            src={result.qrCode || serverpic}
                                            alt="QR Code"
                                            className="h-24 w-24 mt-2 rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchedList;
