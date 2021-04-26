import im1 from "./img/im3.jpg";
import im2 from "./img/im3.jpg";
import im3 from "./img/im3.jpg";
import im5 from "./img/im5.jpg";
import im6 from "./img/im6.jpg";
import im7 from "./img/im7.jpg";

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Leonardo Da Vinci
        </a>
        <button 
         class="navbar-toggler"
         type="button"
         data-toggle="collapse" 
         data-target="#navbarSupportedContent" 
         aria-controls="navbarSupportedContent"
         aria-expanded="false" 
         aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Arte
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Historia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      </nav>  
       
       {/*Empieza Carrusel*/}
        <div 
          id="carouselSlidesOnly" 
          className="carousel slide" 
          data-bs-ride="carousel"
       >
        <div class="carousel-inner">
          <div className="carousel-item active">
            <img
             src={im1} 
             className="d-block w-100"
             alt="Pintura uno" 
             />
          </div>
          <div className="carousel-item ">
            <img src={im2} className="d-block w-100"/>
          </div>
          <div className="carousel-item ">
            <img src={im3} className="d-block w-100" />
          </div>   
      </div> 
        <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div> 
    {/*Termina Carrusel*/}
    <div className="conteiner mt-4" id="arte">
      <div className="row justify-content-beetween">
          {/*Inicia Carta 1*/}
         <div className="card" style={{
      width:"20%",
       }}>
      <img src={im5}/>
      <div className="card-body">
        <h3>
          LA DAMA DEL ARMIÑO (1490)
        </h3>
      <p class="card-text">Se cree que la obra representa a Cecilia Gallerani,
       la amante de Ludovico Sforza, duque de Milán. La pintura es uno de los
        cuatro retratos de mujer pintados por Leonardo, siendo los otros tres 
        La Gioconda, el retrato de Ginevra de’ Benci y el de la Belle Ferronière.
        Algo muy peculiar de esta obra es que, de acuerdo a un investigador de 
         arte francés, el armiño no siempre estuvo en la pintura, sino que 
         fue añadido posteriormente por el artista. Este descubrimiento fue
          posible gracias a un análisis de luz reflectante, mediante el cual 
          es posible visualizar las capas de una pintura.</p>
      </div>
    </div>
    {/*Termian Carta 1*/}

    {/*Inicia Carta 2*/}
    <div className="card" style={{
      width:"20%",
      margin: 35
    }}
    >
      <img src={im6}/>
      <div className="card-body">
        <h3>
        SALVATOR MUNDI (1500)
        </h3>
      <p class="card-text">La pintura muestra a Cristo, con un vestido
       renacentista, dando una bendición con la mano derecha levantada
        y dedos cruzados mientras sostiene una esfera cristalina en 
        su mano izquierda, señalando su papel como salvador del mundo 
        y maestro del cosmos, y representando la ‘esfera celeste’ de los
         cielos, como se percibió durante el Renacimiento.​ Esta obra es una
          de las más conocidas de Da Vinci, y fue la única que permaneció
          en manos privadas. En 2005, esta impresionante obra fue restaurada,
           y en 2017 fue vendida por nada más y nada menos que 450 millones
            de dólares. Actualmente se encuentra en posesión de Mohamed bin 
            Salmán, príncipe heredero de Arabia Saudita. </p>
      </div>
    </div>
    {/*Termian Carta 2*/}
    {/*Inicia Carta 3*/}
    <div className="card" style={{
      width:"20%"
    }}>
      <img src={im7}/>
      <div className="card-body">
        <h3>
        SAN JUAN BAUTISTA (1513-1516)
        </h3>
      <p class="card-text">Fue una de las últimas pinturas del autor y, 
      sin duda, una de las más debatidas. Hay mucha polémica sobre el 
      significado de la mano del santo apuntando hacia arriba, su apariencia 
      andrógina y su sonrisa bastante peculiar. La pintura representa a Juan 
      el Bautista en la soledad del desierto. San Juan viste pieles y tiene
       pelo largo y rizado. Sostiene una cruz de junco en su mano izquierda
        mientras que la derecha apunta hacia el cielo. Estudios recientes 
        concluyeron que Leonardo utilizó como modelo a uno de sus discípulos
         predilectos, Gian Giacomo Caprotti, conocido como “el Salai”. Este 
         mítico cuadro se conserva en el Museo del Louvre de París, Francia.</p>
      </div>
    </div>
    {/*Termian Carta 3*/}
      </div>
      <div style={{
        backgroundColor:"cornflowerblue"
      }}>
        <footer className="container"
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
        }}
        >
        <div>
          <p>55-55-55-55-55</p>
          <p>correo@correo.com</p>
        </div>
        <div>
          <a>Facebook</a>
        </div>
      </footer>
      </div>
    </div>
  </div> 
  );
}

export default App;
