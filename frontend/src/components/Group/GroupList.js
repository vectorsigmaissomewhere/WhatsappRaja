import React from 'react'

const GroupList = () => {
  return (
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-600'>
        <div className='bg-gray-700 text-white text-2xl flex flex-col justify-center items-center h-[200px] rounded-lg p-4'>
          <div className='flex flex-row justify-items-end items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div className='flex flex-row mt-4'>
            <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
            <div>
              <h2>Ecom warriors</h2>
              <button>9891 user</button>
              <button>category name</button>
            </div>
          </div>
        </div>

        <div className='bg-gray-700 text-white text-2xl flex flex-col justify-center items-center h-[200px] rounded-lg p-4'>
          <div className='flex flex-row justify-items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div className='flex flex-row mt-4'>
            <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
            <div>
              <h2>Ecom warriors</h2>
              <button>9891 user</button>
              <button>category name</button>
            </div>
          </div>
        </div>

        <div className='bg-gray-700 text-white text-2xl flex flex-col justify-center items-center h-fit rounded-lg p-4'>
          <div className='flex flex-row justify-items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div className='flex flex-row mt-4'>
            <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
            <div>
              <h2 className='mx-1'>Ecom warriors</h2>
              <button className='mx-1 bg-indigo-700 px-2 py-1 rounded-lg'>9891 user</button>
              <button className='mx-1'>category name</button>
            </div>
          </div>
          {/*tags*/}
          <div>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>CHILL</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>ACTIVE</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VOICE-CHAT</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VC</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VOICE-CALLS</button>
          </div>
          <div className='text-base whitespace-pre-line'>
            🎌𝗧𝗼𝗸𝘆𝗼 𝗥𝗲𝘃𝗲𝗻𝗴𝗲𝗿𝘀🎌 東京卍リベンジャーズ
            [ discord.gg/tokyorevengers ]
            [ official r/TokyoRevengers Subreddit Server ]

            - Discord server dedicated to Tokyo Revengers Anime/Manga
            - TR Discussions with a great community!
            - ACTIVE CHAT and FRIENDLY STAFF!
            - LEVEL 3 BOOST
            - BEST TOKYO REVENGERS EMOTES RIGHT HERE!
            - BEST TOKYO REVENGERS SERVER RIGHT HERE!

            NOTE:
            ⚠️𝗜𝗳 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗳𝗮𝗺𝗶𝗹𝗶𝗮𝗿 𝘄𝗶𝘁𝗵 𝗧𝗵𝗲 𝗧𝗼𝗸𝘆𝗼 𝗥𝗲𝘃𝗲𝗻𝗴𝗲𝗿𝘀 𝗺𝗮𝗻𝗴𝗮 𝘀𝗲𝗿𝗶𝗲𝘀, 𝘁𝗵𝗲 卍 𝘀𝘆𝗺𝗯𝗼𝗹 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗮𝗺𝗲 𝗼𝗳 𝘁𝗵𝗶𝘀 𝘀𝗲𝗿𝘃𝗲𝗿 𝗶𝘀 𝗻𝗼𝘁 𝗶𝗻𝘁𝗲𝗻𝗱𝗲𝗱 𝘁𝗼 𝗯𝗲 𝘁𝗵𝗲 𝗡𝗮𝘇𝗶 𝘀𝘆𝗺𝗯𝗼𝗹. 𝗜𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗠𝗮𝗻𝗷𝗶 𝘀𝘆𝗺𝗯𝗼𝗹, 𝘂𝘀𝗲𝗱 𝗶𝗻 𝗕𝘂𝗱𝗱𝗵𝗶𝘀𝘁 𝘁𝗲𝗺𝗽𝗹𝗲𝘀 𝗼𝗳 𝗝𝗮𝗽𝗮𝗻. 𝗪𝗲 𝗱𝗼 𝗻𝗼𝘁 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝗡𝗮𝘇𝗶𝘀𝗺 𝗶𝗻 𝗮𝗻𝘆 𝘄𝗮𝘆. ⚠️
            [ Join today. ] 🇯🇵
          </div>
        </div>
        {/*This is it */}
        <div className='bg-gray-700 text-white text-2xl flex flex-col justify-center items-center h-fit rounded-lg p-4'>
          <div className='flex flex-row justify-items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div className='flex flex-row mt-4'>
            <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
            <div>
              <h2 className='mx-1'>Ecom warriors</h2>
              <button className='mx-1 bg-indigo-700 px-2 py-1 rounded-lg'>9891 user</button>
              <button className='mx-1'>category name</button>
            </div>
          </div>
          {/*tags*/}
          <div>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>CHILL</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>ACTIVE</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VOICE-CHAT</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VC</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VOICE-CALLS</button>
          </div>
          <div className='text-base whitespace-pre-line'>
            🎌𝗧𝗼𝗸𝘆𝗼 𝗥𝗲𝘃𝗲𝗻𝗴𝗲𝗿𝘀🎌 東京卍リベンジャーズ
            [ discord.gg/tokyorevengers ]
            [ official r/TokyoRevengers Subreddit Server ]

            - Discord server dedicated to Tokyo Revengers Anime/Manga
            - TR Discussions with a great community!
            - ACTIVE CHAT and FRIENDLY STAFF!
            - LEVEL 3 BOOST
            - BEST TOKYO REVENGERS EMOTES RIGHT HERE!
            - BEST TOKYO REVENGERS SERVER RIGHT HERE!

            NOTE:
            ⚠️𝗜𝗳 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗳𝗮𝗺𝗶𝗹𝗶𝗮𝗿 𝘄𝗶𝘁𝗵 𝗧𝗵𝗲 𝗧𝗼𝗸𝘆𝗼 𝗥𝗲𝘃𝗲𝗻𝗴𝗲𝗿𝘀 𝗺𝗮𝗻𝗴𝗮 𝘀𝗲𝗿𝗶𝗲𝘀, 𝘁𝗵𝗲 卍 𝘀𝘆𝗺𝗯𝗼𝗹 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗮𝗺𝗲 𝗼𝗳 𝘁𝗵𝗶𝘀 𝘀𝗲𝗿𝘃𝗲𝗿 𝗶𝘀 𝗻𝗼𝘁 𝗶𝗻𝘁𝗲𝗻𝗱𝗲𝗱 𝘁𝗼 𝗯𝗲 𝘁𝗵𝗲 𝗡𝗮𝘇𝗶 𝘀𝘆𝗺𝗯𝗼𝗹. 𝗜𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗠𝗮𝗻𝗷𝗶 𝘀𝘆𝗺𝗯𝗼𝗹, 𝘂𝘀𝗲𝗱 𝗶𝗻 𝗕𝘂𝗱𝗱𝗵𝗶𝘀𝘁 𝘁𝗲𝗺𝗽𝗹𝗲𝘀 𝗼𝗳 𝗝𝗮𝗽𝗮𝗻. 𝗪𝗲 𝗱𝗼 𝗻𝗼𝘁 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝗡𝗮𝘇𝗶𝘀𝗺 𝗶𝗻 𝗮𝗻𝘆 𝘄𝗮𝘆. ⚠️
            [ Join today. ] 🇯🇵
          </div>
        </div>
        <div className='bg-gray-700 text-white text-2xl flex flex-col justify-center items-center h-fit rounded-lg p-4'>
          <div className='flex flex-row justify-items-end'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <p>(14 reviews)</p>
          </div>
          <div className='flex flex-row mt-4'>
            <img src={serverpic} alt="serverpic" className="h-10 w-auto rounded-xl mr-2" />
            <div>
              <h2 className='mx-1'>Ecom warriors</h2>
              <button className='mx-1 bg-indigo-700 px-2 py-1 rounded-lg'>9891 user</button>
              <button className='mx-1'>category name</button>
            </div>
          </div>
          {/*tags*/}
          <div>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>CHILL</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>ACTIVE</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VOICE-CHAT</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VC</button>
            <button className='text-xs mx-2 px-1 py-1 font-sans bg-gray-700 text-sm font-medium'>VOICE-CALLS</button>
          </div>
          <div className='text-base whitespace-pre-line'>
            🎌𝗧𝗼𝗸𝘆𝗼 𝗥𝗲𝘃𝗲𝗻𝗴𝗲𝗿𝘀🎌 東京卍リベンジャーズ
            [ discord.gg/tokyorevengers ]
            [ official r/TokyoRevengers Subreddit Server ]

            - Discord server dedicated to Tokyo Revengers Anime/Manga
            - TR Discussions with a great community!
            - ACTIVE CHAT and FRIENDLY STAFF!
            - LEVEL 3 BOOST
            - BEST TOKYO REVENGERS EMOTES RIGHT HERE!
            - BEST TOKYO REVENGERS SERVER RIGHT HERE!

            NOTE:
            ⚠️𝗜𝗳 𝘆𝗼𝘂 𝗮𝗿𝗲 𝗻𝗼𝘁 𝗳𝗮𝗺𝗶𝗹𝗶𝗮𝗿 𝘄𝗶𝘁𝗵 𝗧𝗵𝗲 𝗧𝗼𝗸𝘆𝗼 𝗥𝗲𝘃𝗲𝗻𝗴𝗲𝗿𝘀 𝗺𝗮𝗻𝗴𝗮 𝘀𝗲𝗿𝗶𝗲𝘀, 𝘁𝗵𝗲 卍 𝘀𝘆𝗺𝗯𝗼𝗹 𝗶𝗻 𝘁𝗵𝗲 𝗻𝗮𝗺𝗲 𝗼𝗳 𝘁𝗵𝗶𝘀 𝘀𝗲𝗿𝘃𝗲𝗿 𝗶𝘀 𝗻𝗼𝘁 𝗶𝗻𝘁𝗲𝗻𝗱𝗲𝗱 𝘁𝗼 𝗯𝗲 𝘁𝗵𝗲 𝗡𝗮𝘇𝗶 𝘀𝘆𝗺𝗯𝗼𝗹. 𝗜𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗠𝗮𝗻𝗷𝗶 𝘀𝘆𝗺𝗯𝗼𝗹, 𝘂𝘀𝗲𝗱 𝗶𝗻 𝗕𝘂𝗱𝗱𝗵𝗶𝘀𝘁 𝘁𝗲𝗺𝗽𝗹𝗲𝘀 𝗼𝗳 𝗝𝗮𝗽𝗮𝗻. 𝗪𝗲 𝗱𝗼 𝗻𝗼𝘁 𝘀𝘂𝗽𝗽𝗼𝗿𝘁 𝗡𝗮𝘇𝗶𝘀𝗺 𝗶𝗻 𝗮𝗻𝘆 𝘄𝗮𝘆. ⚠️
            [ Join today. ] 🇯🇵
          </div>
        </div>
    </div>
  )
}

export default GroupList
