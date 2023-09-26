import 'react'

export default function currentReleases() {
  return (
    <>  
   <h2 className='bold text-2xl p-10'>Current Releases</h2>
   {/* red underline */}
   <section className='w-full flex pl-20 py-10'> 
      
        <article className='w-64 h-64 flex justify-center border-2 rounded'>
         
            <div className='w-48 h-48 flex align-center flex-col'>
              <img src="" alt="motherbase splash screen" />
              <h2>
                  Mother Base
              </h2>
              <p> Release Date</p>
              <p> A Miltitary sim where you can buy your own custom base, accept contracts, and lead your Milita to Victory</p>
            </div>
        </article>
   </section>
    </>
  )
}
