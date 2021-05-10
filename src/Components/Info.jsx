import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import collectingData from '../images/collecting-data.png';

const Info = () => {
    let history = useHistory();
    function goHome(){
        history.push('/');
    }
    return (
        <>
            <div className="title-explanation">
                ¿Cómo se generan los datos necesarios para poder hacer los gráficos?
            </div>
            <div className="body-explanation">
                La presente aplicación, lo único que hace es organizar datos y graficarlos, razón por la que el usuario se debe hacer con ellos.
            Para poder hacerse con los datos, el usuario tiene que descargarse el <a href="https://github.com/guibla236/ML-extractor/">extractor de datos</a>, la cual desplegará un servicio web capaz de buscar y recorrer los artículos web de Mercado Libre y armar el conjunto de datos entendible para la presente app.
                <div className="image-explanation">
                    <img src={collectingData} alt="Selección de datos" width="50%"></img>
                </div>
            </div>

            <div className="title-explanation">
                ¿Por qué no es posible desde esta misma web?
            </div>
            <div className="body-explanation">
                Por cada búsqueda se pueden obtener centenas de artículos. Si el servicio web fuera desplegado en un servidor externo, el mismo correría riesgo de ser bloqueado por abusar de las peticiones.
                La mejor alternativa es que cada usuario, desde su dispositivo, realice tales búsquedas, siempre haciendo el esfuerzo de no abusar de la extracción de los datos.
                <div className="image-explanation">
                    <img src={collectingData} alt="Extracción de datos" width="50%"></img>
                </div>
            </div>
            <div className="title-explanation">
                ¿Hay otra solución que sea fácil para el usuario?
            </div>
            <div className="body-explanation">
                En el futuro se piensa implementar una app móvil que junte ambas funcionalidades en una sola app y que, al encontrarse instalada en el dispositivo del usuario, evite las limitaciones de las app webs y pueda recolectar los datos y graficarlos sin tener que cambiar de entorno.
            </div>
            <div className="title-explanation">
                <Button onClick={goHome}>Volver al inicio</Button>
            </div>
        </>
    )
}

export default Info;