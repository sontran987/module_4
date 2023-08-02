export default function Footer (){
    return(
      <>
          <div className="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
              <div className="container">
                  <div className="copyright">
                      <div className="row">
                          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                              <p>Web written by comrade Thanh Son <span className="made-with-love"><i>♥</i>
               </span></p>
                          </div>
                          <div className="col-md-6 text-center text-md-end">
                              <div className="footer-menu">
                                  <a href>Home</a>
                                  <a href>Cookies</a>
                                  <a href>Help</a>
                                  <a href>FQAs</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}