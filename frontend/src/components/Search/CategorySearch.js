import React, { useState, useEffect, useRef } from 'react'

const CategorySearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const catRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(()=>{
    const handleClickOutside = (event) =>{
      if(catRef.current && !catRef.current.contains(event.target)&& !buttonRef.current.contains(event.target)){
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return()=>{
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  
  return (
    <div className='flex flex-col bg-black text-white font-sans bg-gray-700 gap-x-5'>
      {/* left side */}
      <div className='flex flex-row font-white text-10xl text-2xl font-medium gap-x-7 justify-center items-center'>
        <h2 className='underline underline-offset-8 decoration-blue-950 decoration-4'>CATEGORIES</h2>
        <h2>And</h2>
        <h2 className='underline underline-offset-8 decoration-blue-950 decoration-4'>POPULAR TAGS</h2>
      </div>
      {/* right side */}
      <div className='mx-10 my-5'>
        <div>
          <div className='bg-black gap-x-10'>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Family and Friends</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Work and Professional</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Education and Learning</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Hobbies and Interest</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Events and Social Activities</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Community and Social Causes</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Business and Entrepreneurship</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Entertainment and Media</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Health and Wellness</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Religious and Spiritual</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Shopping and Deals</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Parenting and Family</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Coding and Programming</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Technology and Gaming</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Sports and Fitness</button>
            <button className="bg-stone-400	text-1xl font-medium px-1	py-1 mx-1 my-1 rounded-lg">Support Groups</button>
          </div>
        </div>
        <div>
          <div>
            <div className='bg-black gap-x-10'>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">community</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">gaming</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">roleplay</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">social</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">anime</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">chill</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">hangout</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">rp</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">roblox</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">friends</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">18+</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">friendly</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">fun</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">art</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">minecraft</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">music</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">sfw</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">games</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">active</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">chat</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">vc</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">lgbtq+</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">lgbtq</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">español</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">giveaways</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">memes</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">manga</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">valorant</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">egirls</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">fantasy</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">fortnite</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">lgbt</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">semi-toxic</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">chatting</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">femboy</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">genshin-impact</button>
              {isOpen && (
              <>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">comunidade</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">brasil</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">make-friends</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">system</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">nitro</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">deutsch</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">jogos</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">emotes</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">toxic</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">genshin</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">pokémon</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">events</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">kpop</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">gay</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">amizade</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">aesthetic</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">writing</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">politics</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">fivem</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">english</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">partnerships</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">rpg</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">league-of-legends</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">overwatch</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">safe-space</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">non-toxic</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">giveaway</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">youtube</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">emojis</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">13+</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">amigos</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">silly</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">mental-health</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">german</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">india</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">movies</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">oc</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">cute</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">4chan</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">sohbet</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">comunidad</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">twitch</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">debate</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">multifandom</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">trading</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">trans</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">religion</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">new</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">smp</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">horror</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">16+</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">christian</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">dnd</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">small</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">game</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">juegos</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">partnership</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">conversa</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">robux</button>
              <button className="bg-teal-700 text-sm font-semibold px-1	py-1 mx-1 my-1 rounded-lg">honkai-star-rail</button>
              </>
              )}
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className='flex justify-center items-center text-6xl'>
            {!isOpen && (
              <>
              <button className='my-2 px-6 py-1 min-h-3 hover:bg-slate-300 hover:text-blue-950' onClick={toggleDropdown} ref={buttonRef}>v</button>
              </>
            )}
            {isOpen && (
              <>
              <button className='my-2 px-6 py-1 min-h-3 hover:bg-slate-300 hover:text-blue-950' onClick={toggleDropdown} ref={buttonRef}>^</button>
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySearch
