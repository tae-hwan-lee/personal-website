import React from 'react';
import linkedin from '../images/linkedin.svg'
import mail from '../images/mail.svg'
import github from '../images/github.svg'

const Logos = () => {

    return(
        <div id='logos'>
            <a href='https://www.linkedin.com/in/tae-hwan-lee/' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='LinkedIn' className='logos' id='linked-in'></img></a>
            <a href='https://github.com/otaeotay' target='_blank' rel='noopener noreferrer'><img src={github} alt='Github' className='logos' id='github'></img></a>
            <a href="mailto:15leetaehwan@gmail.com"><img src={mail} alt='Email' className='logos' id='mail'></img></a>
        </div>
    )
}

export default Logos;