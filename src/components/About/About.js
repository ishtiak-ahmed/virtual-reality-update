import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className='container my-5 py-5'>
      <div className="row">
        <div className="col-md-5">
          <div class="p-header d-flex">
            <img src="https://www.dnavr.co.uk/img/q.svg" alt="" />
            <h1 class="p-title fw-bold mx-4">Press <br /> about us</h1>
          </div>

        </div>

        <div className="col-md-7">

          <div className="is-grid js-elements-container d-flex row">

            <div className="is-grid__item js-item col-6 mb-3">
              <div className="press-item wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="press-item__img">
                  <img alt="Daily Mail" className="responsive-img lazy loaded" data-ll-status="loaded" src="https://www.dnavr.co.uk/upload/resize_cache/iblock/262/72_72_1/xeoo8j52rz5alovmfydugmeamkfchbfb.jpg" />
                </div>
                <div className="press-item__content">
                  <p className="press-item__preview-text paragraph">
                    "Immersive and exclusive"                                      </p>
                  <a target="_blank" href="https://www.dailymail.co.uk/tvshowbiz/article-10109909/Olivia-Bowen-cosies-husband-Alex-Halloween-bash.html" className="is-link press-item__link"><span className="text">Daily Mail</span>
                    <svg fill="none" height={9} viewBox="0 0 5 9" width={5} xmlns="http://www.w3.org/2000/svg">
                      <path d="m1 1 3 3.5-3 3.5" stroke="#c4c4c4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="is-grid__item js-item col-6 mb-3">
              <div className="press-item wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="press-item__img">
                  <img alt="Evening Standard" className="responsive-img lazy loaded" data-ll-status="loaded" src="https://www.dnavr.co.uk/upload/resize_cache/iblock/e2f/72_72_1/e2f4fa10fb3c9f65f1b11c4ad07e6b55.png" />
                </div>
                <div className="press-item__content">
                  <p className="press-item__preview-text paragraph">
                    Getting transported into a wholly immersive world...                                      </p>
                  <a target="_blank" href="https://www.standard.co.uk/reveller/attractions/halloween-london-events-2021-things-to-do-b961081.html" className="is-link press-item__link"><span className="text">Evening Standard</span>
                    <svg fill="none" height={9} viewBox="0 0 5 9" width={5} xmlns="http://www.w3.org/2000/svg">
                      <path d="m1 1 3 3.5-3 3.5" stroke="#c4c4c4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="is-grid__item js-item col-6 mb-3">
              <div className="press-item wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="press-item__img">
                  <img alt="Forbes" className="responsive-img lazy loaded" data-ll-status="loaded" src="https://www.dnavr.co.uk/upload/resize_cache/iblock/6d6/72_72_1/dgecxkyfsv9jeojnx78lwrclr1nwodnw.jpeg" />
                </div>
                <div className="press-item__content">
                  <p className="press-item__preview-text paragraph">
                    DNA VR Blends The Virtual And Physical Worlds                                      </p>
                  <a target="_blank" href="https://www.forbes.com/sites/bennyhareven/2022/07/24/dna-vr-in-london-blends-the-virtual-and-physical-worlds/?sh=3713e8fd75c1" className="is-link press-item__link"><span className="text">Forbes</span>
                    <svg fill="none" height={9} viewBox="0 0 5 9" width={5} xmlns="http://www.w3.org/2000/svg">
                      <path d="m1 1 3 3.5-3 3.5" stroke="#c4c4c4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="is-grid__item js-item col-6 mb-3">
              <div className="press-item wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="press-item__img">
                  <img alt="The Sun" className="responsive-img lazy loaded" data-ll-status="loaded" src="https://www.dnavr.co.uk/upload/resize_cache/iblock/f1d/72_72_1/f1d211f62600fb45f9e4bde683497cfa.jpg" />
                </div>
                <div className="press-item__content">
                  <p className="press-item__preview-text paragraph">
                    One of the best kid-friendly experiences                                      </p>
                  <a target="_blank" href="https://www.thesun.co.uk/travel/15591200/kid-friendly-experiences-uk-holiday/" className="is-link press-item__link"><span className="text">The Sun</span>
                    <svg fill="none" height={9} viewBox="0 0 5 9" width={5} xmlns="http://www.w3.org/2000/svg">
                      <path d="m1 1 3 3.5-3 3.5" stroke="#c4c4c4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button className='btn btn-outline-dark rounded-pill border-2 fw-bold px-4 my-1'>Show more</button>


        </div>
      </div>

    </div>
  );
};

export default About;