import React from 'react';

const Signup = () => {
  return (
    <div className="container">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-6">
          <h1 className="text-center">S'inscrire</h1>
          <hr className="mb-5"/>

          <div className="alert alert-{{flash_type}}"></div>

          <div className="mb-3">
              <label for="login">Nom d'utilisateur</label>
              <input type="text" />
          </div>

          <div className="mb-3">
              <label for="email">Email</label>
              <input type="text" />
          </div>
                    
          <div className="mb-3">
            <label for="password">
              Mot de passe
              <button 
                  data-bs-toggle="tooltip" 
                  data-bs-placement="right"
                  data-bs-class="tooltip-custom"
                  className="btn mb-1"
                  data-bs-title="Le mot de passe doit comporter au moins 8 caractères et inclure des lettres majuscules, des lettres minuscules ainsi que des caractères spéciaux."
              >
                      <i className="bi bi-info-circle"></i>
                  </button>
              </label>
              <input type="password" />
          </div>

          <div className="text-center mt-3">
              <button className="btn button-secondary" type="submit">
                  Valider
              </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Signup;