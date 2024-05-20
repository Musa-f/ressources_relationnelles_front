import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Banner from '../components/homepage/Banner';
import Resource from '../components/resource/ResourceContainer';

function Homepage() {
  const [resources, setResources] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) headers['Authorization'] = `Bearer ${token}`;

    fetch(`${apiUrl}/api/resources`, {
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setResources(data.data);
      })
      .catch(error => {
        console.error('Error fetching resources:', error);
      });
  }, [apiUrl]);

  return (
    <div>
      <Header />
      <Banner/>
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-5 text-center">
                <hr/>
            </div>
        </div>

        <div className="container-resource">
          {resources.length > 0 ? (
            resources.map(resource => (
              <Resource key={resource.id} resource={resource} />
            ))
          ) : (
            <p className='text-center'>Aucune ressource disponible.</p>
          )}
        </div>

        <div className="text-center mb-4">
            <button 
                id="load-more-button" 
                className="btn button-primary" 
            >Afficher plus</button>
        </div>  
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
