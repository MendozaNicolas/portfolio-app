import React, { useEffect, useRef, useState } from 'react'
import { Pedestal1, Pedestal2, Pedestal3 } from '../components/Pedestal';
import { JSIcon, CSSIcon, PHPIcon, HTMLIcon, Carpincho, MySQLIcon, MongoDBIcon, GraphQLIcon, UnknownIcon, ReactIcon, BootstrapIcon, NodeJSIcon, LaravelIcon, GitIcon, GithubIcon, BashIcon, SASSIcon, Arrow, LaravelFicus } from '../components/Icons';

export default function Home() {

  const webButton = useRef(null);
  const DBMSButton = useRef(null);
  const frameworksButton = useRef(null);
  const tecnologiasButton = useRef(null);

  const webIcon = useRef(null);
  const DBMSIcon = useRef(null);
  const frameworksIcon = useRef(null);
  const tecnologiasIcon = useRef(null);


  const [isWeb, setIsWeb] = useState(false);
  const [isDBMS, setIsDBMS] = useState(false);
  const [isFramework, setIsFrameworks] = useState(false);
  const [isTecnologias, setIsTecnologias] = useState(false);



  useEffect(() => {
    setIsWeb(true);
    webButton.current.addEventListener('click', () => {
      setIsWeb(true);
      setIsDBMS(false);
      setIsFrameworks(false);
      setIsTecnologias(false);
    });
    DBMSButton.current.addEventListener('click', () => {
      setIsDBMS(true);
      setIsWeb(false);
      setIsFrameworks(false);
      setIsTecnologias(false);
    });
    frameworksButton.current.addEventListener('click', () => {
      setIsFrameworks(true);
      setIsWeb(false);
      setIsDBMS(false);
      setIsTecnologias(false);
    });
    tecnologiasButton.current.addEventListener('click', () => {
      setIsTecnologias(true);
      setIsWeb(false);
      setIsDBMS(false);
      setIsFrameworks(false);
    });
  });

  return (
    <div id='content-wrapper' className='overflow-y-auto overflow-x-hidden w-100 h-100'>
      <section className='d-flex align-items-center' style={{ minHeight: '100vh', width: '100vw' }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 mx-auto" >
              <div className='text-center'>
                <p className='h1'>Hola mundo! <Carpincho /></p>
                <p className='h1'>Soy <span className='text-primary fw-bold'>Nicolás</span> <span className='text-secondary-emphasis fw-bold'>Mendoza.</span></p>
                <p className='fw-bold text-primary'>Un simple artesano web y técnico en informatica</p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-100 start-50 translate-middle">

          <a href='#tecnologias' className="btn mb-5"><Arrow /></a>
        </div>
      </section>
      <section id='tecnologias' className='d-flex align-items-center overflow-hidden' style={{ minHeight: '100vh', width: '100vw' }}>
        <div className="container text-center">
          <div className='row mb-5 pb-5'><span className='h1'>Mis conocimientos</span></div>
          <div className="row">
            <div className="col-lg-6">
              <div className='text-start'>

                <ul className='knowledge'>
                  <li className='knowledge-option'><a ref={webButton}>Web</a></li>
                  <li className='knowledge-option'><a ref={DBMSButton} >Data Management</a></li>
                  <li className='knowledge-option'><a ref={frameworksButton}>Frameworks</a></li>
                  <li className='text-center knowledge-option'><a ref={tecnologiasButton}>Tecnologías</a></li>
                </ul>

              </div>
            </div>
            <div className="col-lg-6">
              <div className='d-flex align-items-end'>
                <div className='mx-3 d-inline'>
                  <div className='levitate mb-2'>



                    <div ref={webIcon} className={`${!isWeb && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#ec8255', zIndex: '-1' }}>blur</div>
                      <HTMLIcon />
                    </div>

                    <div ref={DBMSIcon} className={`${!isDBMS && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#f8b055', zIndex: '-1' }}>blur</div>
                      <MySQLIcon />
                    </div>

                    <div ref={frameworksIcon} className={`${!isFramework && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#95eefe', zIndex: '-1' }}>blur</div>
                      <ReactIcon />
                    </div>

                    <div ref={tecnologiasIcon} className={`${!isTecnologias && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#ee7b6b', zIndex: '-1' }}>blur</div>
                      <GitIcon />
                    </div>

                  </div>
                  <Pedestal1 />
                </div>
                <div className='mx-3 d-inline'>
                  <div className='levitate mb-2'>
                    <div ref={webIcon} className={`${!isWeb && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#83c2ff', zIndex: '-1' }}>blur</div>
                      <CSSIcon />
                    </div>

                    <div ref={DBMSIcon} className={`${!isDBMS && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#49ba75', zIndex: '-1' }}>blur</div>
                      <MongoDBIcon />
                    </div>

                    <div ref={frameworksIcon} className={`${!isFramework && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#b67ef1', zIndex: '-1' }}>blur</div>
                      <BootstrapIcon />
                    </div>

                    <div ref={tecnologiasIcon} className={`${!isTecnologias && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#7d15f4', zIndex: '-1' }}>blur</div>
                      <GithubIcon />
                    </div>

                  </div>
                  <Pedestal2 />
                </div>
                <div className='mx-3 d-inline'>
                  <div className='levitate mb-2'>


                    <div ref={webIcon} className={`${!isWeb && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#f7e65a', zIndex: '-1' }}>blur</div>
                      <JSIcon />
                    </div>


                    <div ref={DBMSIcon} className={`${!isDBMS && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#e55fb9', zIndex: '-1' }}>blur</div>
                      <GraphQLIcon />
                    </div>

                    <div ref={frameworksIcon} className={`${!isFramework && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#73a964', zIndex: '-1' }}>blur</div>
                      <NodeJSIcon />
                    </div>

                    <div ref={tecnologiasIcon} className={`${!isTecnologias && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#95eefe', zIndex: '-1' }}>blur</div>
                      <BashIcon />
                    </div>

                  </div>
                  <Pedestal3 />
                </div>
                <div className='mx-3 d-inline '>
                  <div className='levitate mb-2 '>

                    <div ref={webIcon} className={`${!isWeb && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#8c8eb3', zIndex: '-1' }}>blur</div>
                      <PHPIcon />
                    </div>

                    <div ref={DBMSIcon} className={`${!isDBMS && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#fff', zIndex: '-1' }}>blur</div>
                      <UnknownIcon />
                    </div>

                    <div ref={frameworksIcon} className={`${!isFramework && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#de725d', zIndex: '-1' }}>blur</div>
                      <LaravelIcon />
                    </div>

                    <div ref={tecnologiasIcon} className={`${!isTecnologias && 'visually-hidden'}`}>
                      <div className='blur h-100 w-100' style={{ position: 'absolute', top: 0, left: 0, background: '#cd67a9', zIndex: '-1' }}>blur</div>
                      <SASSIcon />
                    </div>

                  </div>
                  <Pedestal1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='d-flex flex-column align-items-center overflow-hidden p-5' style={{ minHeight: '100vh', width: '100vw' }}>
        <h2>Proyectos</h2>
        <div className='w-100 h-100 d-flex p-5 '>
          <a href="/laravel-ficus" className='link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' style={{ textDecoration: 'none' }}>
            <div className='container d-flex flex-column align-items-center overflow-hidden mt-5'>
              <LaravelFicus />
              <h4>Laravel Ficus</h4>
            </div>
          </a>
        </div>
      </section>
      <script src="../particle.min.js"></script>
    </div >
  );
}


