import React from 'react';

function Footer() {

  return (
    <footer>
      <div className="items">
        <div>
            <h3>Liens utiles</h3>
            <ul>
                <li><a href="">Accessibilité</a></li>
                <li><a href="">Mentions légales</a></li>
                <li><a href="">Données personnelles</a></li>
                <li><a href="">Contactez-nous</a></li>
            </ul>
        </div>
        <div>
            <h3>Nos sites</h3>
            <ul>
                <li><a href=""><i className="bi bi-arrow-up-left"></i> gouvernement.fr</a></li>
                <li><a href=""><i className="bi bi-arrow-up-left"></i> data.gouv.fr</a></li>
                <li><a href=""><i className="bi bi-arrow-up-left"></i> service-public.fr</a></li>
                <li><a href=""><i className="bi bi-arrow-up-left"></i> legifrance.gouv.fr</a></li>
            </ul>
        </div>
    </div>
    <hr/>
    <div className="medias">
        <i className="bi bi-instagram"></i>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter-x"></i>
        <i className="bi bi-linkedin"></i>
    </div>
  </footer>
  );
}

export default Footer;
