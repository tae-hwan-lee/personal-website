import React from 'react';
import './App.css';
import linkedin from './images/underconstruction/linkedin.png';
import github from './images/underconstruction/github.png';

function App() {
  console.log(`
  what are you doing here...
                                    ,,
                             _,g╣╢Ñ╨╜╜╨╩╣@╖
                           ,@╣Ñ╜_        __╙╢H,
                         ╓╬╢╜_               _╙╣╖
                        ╫╢╜_                    \`╫,
                       ╣╢                         ╙%_
                      ╢╢                            ╙,,,,╖╖╥╖╥╥m╥╖,
                     ]╢[  ,         _ ,,╓,╓╖╥@@@╣╣╢╣╣Ñ╝╜╜╜╙╙╙"╙╙╙╜╜_
                      ╢╢╓▒▒╖m@@@ÑÑ╝╝╝╜╜╙╙"\` _____   ▒_
                       ║╢░__                         ▒
                      ]▒▒       ,              ╒▄    ╙_
                      ▒▒_       ▀▀              __    ▒
                      ▒▒                              ▒░
                      ▒▒_    _                      ╓@_▒
                      '▒▒     *╖                  ▄█▀__▒
                       _▒▒.     ╙▀▄,        _,▄▄█▀\`_  ]▒
                         ╙▒▒╖      _\`╙▀▀▀Ñ▀▀▀▀ __     ▒▒
                           _╙▒▒h,                    ▒▒_
                             @_\`╜▒▒╖╖._            ╓▒▒_
                            ]H    _\`╙╜▒▒▒∩╖╖╓╓╓╖H▒▒╜▒
                            ╟H          _ \`"╙"\`\`    ╢_
                            ╫_                      ╫_
                            ╣                       ╢
                           ]▓    ╫             ╢   _╣
                           ╟▌    ╣             ╫_  ]╣_
                           ╫[   j╣             ╫   ]╣_
                           ╫L   ]▓             ╫_  ╟▓_
                           ╫U   ╟▓             ╫H  ╟╣_
                          ]╣_   ╫▌             ╫[  ╟╢_
                          ]▓    ▓[             ╫H  ╟▓_
                          ]╣_   ╫[             ╢@,,▓╩
                           ▓▓ ,,╣[            _╫[_\`_
                           _╙╙╙_╣[            _▓@
                               j╣[              ∩
                               ]╣L       ]      [
                                ╙        ╟[     [
                                ╟_       ║[    ][
                                ╫_       ║╝    ][
                                ╢_       ]▒    ╟[
                                ▓        ╟╣    ╟C
                                ▓_       ╟╣    ╫L
                               ]▓_       ╟[    ▓C
                               ▐▓        ╫H    ▓U
                               ╟[        ▓_   _▓
                               ▓[       ]▓_    ▓_
                              j▓_       ╟▌     ▓∩
                              ╙╣        ╫▌    ]╢C
                               ▐,       ╓▄     ▀█▄
                                ▀▄       ▀█▄    _██_
                                 ╙▓,       ▀█,    ▀█
                                   ▀█,      ╙█▄    ▓▌
                                    _▀█,     _██N▄,▓▀
                                       ▀█▄    j█____
                                         \`▀██▄█▀_
                                             _
  `);

  return (
    <div className='App'>
      <a
        href='https://www.linkedin.com/in/tae-hwan-lee/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={linkedin}
          alt='LinkedIn'
          className='logos'
          id='linked-in'
        ></img>
      </a>
      <a
        href='https://github.com/tae-hwan-lee'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={github} alt='Github' className='logos' id='github'></img>
      </a>
    </div>
  );
}

export default App;
