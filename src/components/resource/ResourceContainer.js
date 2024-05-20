import React, { useEffect, useState } from 'react';

async function generateResourceContent(resource) {
    let content = '';
    const url = process.env.REACT_APP_API_URL;

    try {
      switch (resource.format.id) {
        case 1:
          const videoResponse = await fetch(`${url}/api/file/${resource.id}/${resource.files[0].id}`);
          if (!videoResponse.ok) {
            throw new Error('Server not responding');
          }
          const videoBlob = await videoResponse.blob();
          const videoUrl = URL.createObjectURL(videoBlob);
          content = <video src={videoUrl} controls />;
          break;

        case 2:
          const pdfResponse = await fetch(`${url}/api/file/${resource.id}/${resource.files[0].id}`);
          if (!pdfResponse.ok) {
            throw new Error('Server Not Responding');
          }
          const pdfBlob = await pdfResponse.blob();
          const pdfUrl = URL.createObjectURL(pdfBlob);
          content = <embed src={pdfUrl} type="application/pdf" width="100%" height="400px" />;
          break;

        case 3:
          content = resource.content.length > 100
            ? <><p>{resource.content.substring(0, 200)}</p><button>Afficher plus</button></>
            : <p>{resource.content}</p>;
          break;

        case 4:
          content = <><p>Règles du jeu <br />{resource.content}</p><button>Démarrer le chat en direct</button></>;
          break;

        case 5:
          content = <div className="card">{resource.content}</div>;
          break;

        default:
          content = '';
      }
    } catch (error) {
      console.error(error);
      content = <p>Erreur lors du chargement du contenu.</p>;
    }
    return content;
}
  
function ResourceContainer({ resource }){
    const [content, setContent] = useState('');

    useEffect(() => {
        const loadContent = async () => {
        const generatedContent = await generateResourceContent(resource);
        setContent(generatedContent);
        };
        loadContent();
    }, [resource]);

    return (
    <>
    
<div className="row resource-container">
    <div className="col-10 col-lg-7 alert alert-light mx-auto my-3">
        <div className="row header-ressource">
            <div className="col">
                <p className={`m-0 mb-2 fw-light fst-italic ${resource.active ? 'd-none' : ''}`}>
                    Non publiée
                </p>
                <div className="row mb-2">
                    <div className="col">
                        <p className="btn category m-0">{resource.category.name}</p>
                    </div>

                    <div className="col text-end">
                        <p className="link"></p>
                    </div>
                </div>
                <h3 className="title">{resource.title}</h3>
            </div>
        </div>

        <div className="row body-ressource">
            <div className="col">
                <hr/>
                <div className="row content-resource px-3">
                    {content}
                </div>    
            </div>
            <p className="text-end fst-italic author">
                {resource.user.login}
            </p>
            <div className="interactions-btn">
                <button><i className="bi bi-heart"></i></button>
                <button><i className="bi bi-bookmark"></i></button>
            </div>
        </div>

        <div className="row footer-ressource">
            <div className="col">
                <hr/>
                <div className="row">
                    <div className="col">0 like</div>
                    <div className="col text-end">0 commentaire</div>
                </div>
            </div>
        </div>
        
    </div>
</div>
    </>
    )
}

export default ResourceContainer;