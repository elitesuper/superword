import { useTheme } from 'next-themes';

export default function Extensive(){
    
  const { systemTheme, theme, setTheme } = useTheme();

  const Modechange = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    console.log(currentTheme);
    if(currentTheme == "dark")
    {
      setTheme("light");
    }else{
      setTheme("dark");
    }
    
  }
  return (
    <>
      <main className="h-screen dark:bg-bgdark flex">
        <div className='w-full my-auto'>
          <div className='w-full md:flex py-4 max-w-5xl mx-auto pt-5'>
            <div className='sm:w-full md:w-1/2 px-8 sm:mb-5 md:mb-0'>
              <button className='rounded bg-bgdark dark:bg-white text-white dark:text-bgdark px-2 py-1' onClick={()=>{Modechange()}}>Mode</button>
            </div>
            <div className='sm:w-full md:w-1/2 px-8'>
              <div>
                <div className='flex rounded bg-bgdark dark:bg-white py-1 tag-desc rounded-full'>
                  <img src="superwordicon.svg" width="21px" className='mx-auto'></img>
                  <img src="clip.svg" className='mx-auto'></img>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:flex py-4 max-w-5xl mx-auto'>
            <div className='sm:w-full md:w-1/2 px-8'>
              <p className='text-black dark:text-white pb-3'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. <span className='bg-orange-200 text-black dark:text-white'>An example of text being highlighted.</span>
              </p>
              <div className='w-full flex justify-end'>
                <div className='dropdown bg-bgdarkdrop dark:bg-white px-1 py-1 mx-2 rounded'>
                  <ul>
                    <li className='text-white dark:text-black py-0.5 px-1 bg-bgdarkactivedrop dark:bg-white rounded'>Rewrite</li>
                    <li className='text-slate-400 py-0.5 px-1'>Expand</li>
                    <li className='text-slate-400 py-0.5 px-1'>Shorten</li>
                    <li className='text-slate-400 py-0.5 px-1'>Correct</li>
                    <li className='text-slate-400 py-0.5 px-1'>Translate</li>
                  </ul>
                </div>
                <div className='dropdown bg-bgdarkdrop dark:bg-white  px-1 py-1 mx-2 rounded '>
                  <ul>
                    <li className='text-white dark:text-black py-0.5 px-1 bg-bgdarkactivedrop dark:bg-white rounded'>English</li>
                    <li className='text-slate-400 py-0.5 px-1'>Spanish</li>
                    <li className='text-slate-400 py-0.5 px-1'>French</li>
                    <li className='text-slate-400 py-0.5 px-1'>Chinese</li>
                    <li className='text-slate-400 py-0.5 px-1'>German</li>
                  </ul>
                </div>
                <div className='dropdown bg-bgdarkdrop dark:bg-white px-1 py-1 mx-2 rounded'>
                  <ul>
                    <li className='text-white dark:text-black py-0.5 px-1 bg-bgdarkactivedrop dark:bg-white rounded'>Friendly</li>
                    <li className='text-slate-400 py-0.5 px-1'>Formal</li>
                    <li className='text-slate-400 py-0.5 px-1'>Angry</li>
                    <li className='text-slate-400 py-0.5 px-1'>Professional</li>
                    <li className='text-slate-400 py-0.5 px-1'>Witty</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='sm:w-full md:w-1/2 px-8'>
              <p className='text-black dark:text-white sm:mt-5 md:mt-0'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. <span className='text-slate-400'>Press <span className='bg-grey dark:bg-white text-black px-0.5 py-0.5 rounded'>tab</span> for AI assist.</span>
              </p>
              <div className='w-full pt-3'>
                <div className='flex rounded bg-bgdark dark:bg-white py-1 rounded-full'>
                  <img src="superwordicon.svg" width="21px" className='ml-2'></img>
                  <span className='ml-2 text-slate-400'> Write an email to cancel my subscription</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}