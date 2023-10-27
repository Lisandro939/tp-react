import { Button, Card} from "react-bootstrap";
import './AboutUs.css';
const AboutUs = () => {
    return (
        <>
        <div>
        <h2>Sobre nosotros</h2>
        <p>
        EspiSport es el lugar perfecto para los apasionados seguidores del Club Atlético Boca Juniors que desean mostrar su orgullo por uno de los equipos de fútbol más icónicos de Argentina y del mundo. Esta tienda de ropa deportiva se encuentra estratégicamente ubicada cerca del estadio La Bombonera, en el corazón de Buenos Aires, convirtiéndola en una parada obligatoria para los hinchas que buscan las últimas novedades en indumentaria y accesorios relacionados con el club.
        </p>
        <p>
        Nuestra tienda ofrece una amplia gama de camisetas, pantalones cortos y medias, todos con los colores característicos del club, azul y amarillo. Los fans pueden encontrar tanto las camisetas de juego utilizadas por los jugadores como las réplicas para los seguidores. También hay opciones para hombres, mujeres y niños.
        </p>
        <p>
          No dude en contactarnos en espisport@gmail.com para cualquier consulta o comentario.
        </p>
      </div>
      <div className="container">
      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/images/casacaVenta3.jpg" />
            <Card.Body>
              <Card.Title>Camiseta</Card.Title>
              <Card.Text>
                Camiseta titular Boca Juniors temporada 2020
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/images/casacaVenta.jpg" />
            <Card.Body>
              <Card.Title>Camiseta</Card.Title>
              <Card.Text>
                Camiseta titular Boca Juniors 2023.
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/images/casacaVenta5.jpg" />
            <Card.Body>
              <Card.Title>Camiseta</Card.Title>
              <Card.Text>
                Camiseta retro suplente Boca Juniors 96/97
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="src/assets/images/casacaVenta4.jpg" />
            <Card.Body>
              <Card.Title>Camiseta</Card.Title>
              <Card.Text>
                Camiseta suplente Boca Juniors 2020
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      </div>
      </>
    )

}

export default AboutUs;