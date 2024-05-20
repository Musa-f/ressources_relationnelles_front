import { Route,Routes } from 'react-router-dom';

function Banner() {
  return (
    <>
<div className="bg-homepage">

<button className="btn d-none d-md-block" data-bs-toggle="modal" data-bs-target="#modalNewRessource">Créer une ressource</button>

<div className="banner"></div>

<div className="research-box col-10 col-lg-5" data-controller="ressource--searchResource">
    <div className="row text-center">
        <h3>Rechercher une ressource</h3>
    </div>
    <div className="row search-text m-2">
        <div className="col input-group">
            <input type="text" className="form-control" placeholder="Mot-clé" />
            <div className="input-group-append">
                <input 
                    type="submit"
                    className="input-group-text filter-btn" 
                    value="Valider"
                />
            </div>
        </div>
    </div>
    <div className="row filters m-2">
        <div className="col-lg col-sm-10 my-2">
            <select className="form-select select-category">
                <option value>Catégorie</option>
            </select>
        </div>
        <div className="col-lg col-sm-10 my-2">
            <select className="form-select select-link">
                <option value>Relation</option>
            </select>
        </div>
        <div className="col-lg col-sm-10 my-2">
            <select className="form-select">
                <option value>Filtrer par</option>
                <option value="1">Popularité</option>
                <option value="1">Croissant</option>
                <option value="1">Décroissant</option>
            </select>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Banner;