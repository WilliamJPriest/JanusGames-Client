import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function nav() {

  const youtube = faYoutube as IconProp;
  const github = faGithub as IconProp;
  const tiktoc = faTiktok as IconProp;
  return (
    <>
        <div>
            <nav className='flex flex-row justify-between p-2'>
                <h1 className='text-3xl font-bold'>Janus Games Studio</h1>
                <div className='flex gap-2'>
                  <a href=""><FontAwesomeIcon icon ={youtube}  /></a>
                  <a href=""><FontAwesomeIcon icon ={github}  /></a>
                  <a href=""><FontAwesomeIcon icon ={tiktoc}  /></a>
                </div>
            </nav>
        </div>
    </>
  )
}
