import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div style={{color: 'white', textAlign:'center'}}>
            <h4>Bienvenue dans notre plateforme de gestion de produits !</h4>
            <p>Dernière mise à jour 22/09/2023.</p>
            <nav>
                <ul style={{display: 'flex'}}> 
                <li><Link to="/" style={{color: 'white', textDecoration:'none', backgroundColor:'green', padding: '3px', borderRadius:'4px', borderColor:'black'}}>Accueil</Link></li>
                <li><Link to="/products" style={{color: 'white', textDecoration:'none', backgroundColor:'green', padding: '3px', borderRadius:'4px', borderColor:'black'}}>Liste des Produits</Link></li>
                </ul>
            </nav>
           
        </div>
    )
}

export default Home