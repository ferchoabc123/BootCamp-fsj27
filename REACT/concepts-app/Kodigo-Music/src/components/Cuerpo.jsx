import React from 'react';
import { Link } from 'react-router';

const Cuerpo = () => {
  return (
    <div className="container-fluid mt-2 "> {/* Changed container to container-fluid */}
      <div className="row"> {/* Added background color to the row */}
        {/* First Column */}
        <div className="col-md-3  rounded-4 bg-dark">
          <div className="p-3 border text-start mt-5 rounded-4 bg-secondary bg-opacity-25 text-light"> {/* Changed text-center to text-start */}
            <h5>Crea tu playlist</h5>
            <Link to="/create-playlist">
              <button className="btn btn-primary mt-3">Crear</button>
            </Link>
          </div>
          <div className="p-3 border text-start mt-4 rounded-4 bg-secondary bg-opacity-25 text-light">
            <h5>Busquemos algunos podcasts para seguir</h5>
            <p>Te mantendremos al tanto de los nuevos episodios.</p>
            <button className="btn btn-light text-dark mt-3">Explorar Podcasts</button>
          </div>
          <footer className="mt-4 text-light">
            <ul className="list-unstyled">
              <li>Legal</li>
              <li>Seguridad y Centro de privacidad</li>
              <li>Política de Privacidad</li>
              <li>Cookies</li>
              <li>Sobre los anuncios</li>
              <li>Accesibilidad</li>
            </ul>
            <button className="btn btn-dark text-light w-100 mt-3 rounded-pill border border-white">Español de Latinoamérica</button>
          </footer>
        </div>
        {/* Second Column */}
        <div className="col-md-9 rounded-4">
          <div className="mb-3 text-light">
            <h4>Explora tus canciones favoritas</h4> {/* Added text above the row of cards */}
          </div>
          <div className="row">
            {/* Card 1 */}
            <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://i.scdn.co/image/ab67616d00001e026d96c503dcc2efc6c6dc07c7" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">De La Rose, Omar Courtz - NUBES</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">Un verano sin ti</p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://i.scdn.co/image/ab67616d00001e02e83df08dc5b90b0909566bd4" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">Don KBRN</p>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://i.scdn.co/image/ab67616d00001e02d4cef83f06fc615fe94aeaf5" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">MALA MÍA</p>
                </div>
              </div>
            </div>
            {/* Card 5 */}
            <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://lh3.googleusercontent.com/-tOODHuXHt7vMCroq0W-mRNHwg75QKEbp99QtaDKGB-u2MimQ0LnGoazZW9ROwUTIo50Yz6DV-Zkjmmy=w544-h544-l90-rj" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">Cry</p>
                </div>
              </div>
            </div>
            {/* Card 6 */}
            <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://lh3.googleusercontent.com/lP8PomOSrTeXkb_FCu8SzCJ2igMKPDVVxOqrXc5CxFvYqVCwg1yJWBRci0fO875AdOjIJnKDLce0lYo=w544-h544-l90-rj" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">Dark Red</p>
                </div>
              </div>
            </div>
            {/* Card 7 */}
            <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://lh3.googleusercontent.com/bcYCxpFj_cEQ8y2InNmez-fMWr_7kJ5lyolpzY31HzWvXfA7prhu8YKZCNP7TSSiTLQQTndeIjPKS7u3=w544-h544-l90-rj" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">Impacto(con lo Blondo)</p>
                </div>
              </div>
            </div>
              {/* Card 8 */}
              <div className="col-md-3 mt-3">
              <div className="card bg-transparent text-light">
                <img src="https://lh3.googleusercontent.com/SPHeXqlEhzw-pPbAx3AQU4HSD-XuSMlPtLsptfvHOjOTd6F_1ZbELaOYn1d8-jGZ5HW8O1R0pLqausuVZw=w544-h544-l90-rj" className="card-img-top" alt="Music 1" />
                <div className="card-body text-center">
                  <p className="card-text">Karma Police</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuerpo;
