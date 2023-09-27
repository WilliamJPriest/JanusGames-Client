import 'react'

export default function currentReleases() {
  return (
    <>  
   <h2 className='bold text-2xl p-10'>Current Releases</h2>
   {/* red underline */}
   <section className='w-full flex justify-center gap-10 pb-20'> 
      
        <article className='w-64 h-80 flex border-2 rounded flex-col'>
          <img className="p-2" src="hellofeelow.png" alt="motherbase splash screen" />
            <div className='w-64 h-48 flex text-center flex-col '>

              <h2 className='text-2xl pb-2'>
                  Mother Base
              </h2>
              <p className='pb-2'> Release Date</p>
              <p className='flex text-left p-2'> A Miltitary sim where you can buy your own custom base, accept contracts, and lead your Milita to Victory</p>
            </div>
        </article>
        <article className='w-64 h-80 flex border-2 rounded flex-col'>
          <img className="p-2" src="hellofeelow.png" alt="motherbase splash screen" />
            <div className='w-64 h-48 flex text-center flex-col '>

              <h2 className='text-2xl pb-2'>
                  Mother Base
              </h2>
              <p className='pb-2'> Release Date</p>
              <p className='flex text-left p-2'> A Miltitary sim where you can buy your own custom base, accept contracts, and lead your Milita to Victory</p>
            </div>
        </article>
        <article className='w-64 h-80 flex border-2 rounded flex-col'>
          <img className="p-2" src="hellofeelow.png" alt="motherbase splash screen" />
            <div className='w-64 h-48 flex text-center flex-col '>

              <h2 className='text-2xl pb-2'>
                  Mother Base
              </h2>
              <p className='pb-2'> Release Date</p>
              <p className='flex text-left p-2'> A Miltitary sim where you can buy your own custom base, accept contracts, and lead your Milita to Victory</p>
            </div>
        </article>
   </section>
    </>
  )
}
