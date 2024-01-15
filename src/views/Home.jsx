import React from 'react'
import Skills from './Skills';
import { Pedestal1, Pedestal2, Pedestal3 } from '../components/Pedestal';
import { ReactIcon, JSIcon, CSSIcon, PHPIcon } from '../components/Icons';

export default function Home() {

  return (
    <div id='content-wrapper' className='overflow-auto' style={{ width: '100%', height: '100%' }}>
      <section className='d-flex align-items-center' style={{ minHeight: '100vh', width: '100vw' }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-6" >
              <div className='text-start'>
                <p className='h1'>Hola mundo! <span className='wave' role='img' aria-labelledby='wave'>👋🏽</span></p>
                <p className='h1'>Soy <span className='text-primary fw-bold'>Nicolás</span> <span className='text-secondary-emphasis fw-bold'>Mendoza.</span></p>
              </div>
            </div>
            <div className="col-lg-6">
              Column
            </div>
          </div>
        </div>
      </section>
      <section className='d-flex align-items-center' style={{ minHeight: '100vh', width: '100vw' }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-6" >
              <div className='text-start'>
                <p className='h1'>Hola mundo! <span className='wave' role='img' aria-labelledby='wave'>👋🏽</span></p>
                <p className='h1'>Soy <span className='text-primary fw-bold'>Nicolás</span> <span className='text-secondary-emphasis fw-bold'>Mendoza.</span></p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className='d-flex align-items-end'>
                <div className='mx-3 d-inline'>
                  <div className='levitate mb-2'>
                    <ReactIcon />
                  </div>
                  <Pedestal1 />
                </div>
                <div className='mx-3 d-inline'>
                  <div className='levitate mb-2'>
                    <CSSIcon />
                  </div>
                  <Pedestal2 />
                </div>
                <div className='mx-3 d-inline'>
                  <div className='levitate mb-2'>
                    <JSIcon />
                  </div>
                  <Pedestal3 />
                </div>
                <div className='mx-3 d-inline'>
                  <div className='levitate mb-2'>
                    <PHPIcon />
                  </div>
                  <Pedestal1 />
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
      <script src="../particle.min.js"></script>
    </div >
  );
}


