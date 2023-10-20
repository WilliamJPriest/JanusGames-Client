import 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function nav() {

  const youtube = faYoutube as IconProp;
  const github = faGithub as IconProp;
  const twitter = faTwitter as IconProp;
  return (
    <>
        <div>
            <nav className='flex flex-row justify-between p-2'>
                <a href="/"><h1 className='text-3xl font-bold hover:text-sky-500'>Janus Games Studio</h1></a>
                <div className='flex gap-2'>
                  <a className="hover:text-sky-500" href="https://www.youtube.com/@ThePercOffense?sub_confirmation=1"><FontAwesomeIcon icon ={youtube}  /></a>
                  <a className="hover:text-sky-500" href="https://github.com/WilliamJPriest"><FontAwesomeIcon icon ={github}  /></a>
                  <a className="hover:text-sky-500" href=""><FontAwesomeIcon icon ={twitter}  /></a>
                </div>
            </nav>
        </div>
    </>
  )
}
