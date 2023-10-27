import Carousel from 'react-bootstrap/Carousel';


const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/HD-wallpaper-boca-juniors-tevez.jpg" alt="" />
        <Carousel.Caption>
          <h3>Camiseta boca juniors 2020</h3>
          <p>son un plato icónico de la gastronomía mexicana. Se componen de tortillas de maíz o harina que se rellenan con una deliciosa variedad de ingredientes. Estos tacos son conocidos por su versatilidad y sabor auténtico que los hace irresistibles para cualquier amante de la comida.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/fondo.jpg" alt="" />
        <Carousel.Caption>
          <h3>Camiseta titular temp 2014/15</h3>
          <p>es un icono de la comida rápida que ha conquistado corazones en todo el mundo. Se compone de una jugosa carne de res o una alternativa vegetariana, colocada entre dos suaves panes de hamburguesa y aderezada con una variedad de ingredientes deliciosos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/juan-roman-riquelme.webp" alt="" />
        <Carousel.Caption>
          <h3>Camiseta suplente Boca Juniors 2012/13</h3>
          <p>
          es una delicia culinaria que ha conquistado el paladar de personas de todo el mundo. Se compone de una fina masa de pan horneada y cubierta con una variedad de ingredientes, incluyendo salsa de tomate, queso y otros ingredientes de tu elección.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;