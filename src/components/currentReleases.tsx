import 'react'

export default function currentReleases() {
  return (
    <>  
   <h2 className='bold text-2xl p-10'>Current Releases</h2>
   {/* red underline */}
   <section className='flex justify-center align-center flex-col mx-auto pt-2 md:grid md:grid-cols-3 gap-3 w-max'> 
        <article className='w-64 h-96 flex border-2 rounded flex-col'>
          <img className="p-2 2 h-40" src="military-placeholder.jpg" alt="motherbase splash screen" />
            <div className='w-64 h-48 flex text-center flex-col '>

              <h2 className='text-2xl pb-2'>
                  Mother Base
              </h2>
              <p className='pb-2'> Coming Soon</p>
              <p className='flex text-left p-2'> A Miltitary sim where you can buy your own custom base, accept contracts, and lead your miltitary to Victory</p>
            </div>
        </article>
        <article className='w-64 h-96 flex border-2 rounded flex-col'>
          <img className="p-2 2 h-40" src="military-placeholder.jpg" alt="motherbase splash screen" />
            <div className='w-64 h-48 flex text-center flex-col '>

              <h2 className='text-2xl pb-2'>
                  Mother Base
              </h2>
              <p className='pb-2'> Coming Soon</p>
              <p className='flex text-left p-2'> A Miltitary sim where you can buy your own custom base, accept contracts, and lead your miltitary to Victory</p>
            </div>
        </article>
        <article className='w-64 h-96 flex border-2 rounded flex-col'>
          <img className="p-2 2 h-40" src="military-placeholder.jpg" alt="motherbase splash screen" />
            <div className='w-64 h-48 flex text-center flex-col '>

              <h2 className='text-2xl pb-2'>
                  Mother Base
              </h2>
              <p className='pb-2'> Coming Soon</p>
              <p className='flex text-left p-2'> A Miltitary sim where you can buy your own custom base, accept contracts, and lead your miltitary to Victory</p>
            </div>
        </article>
   </section>
    </>
  )
}
