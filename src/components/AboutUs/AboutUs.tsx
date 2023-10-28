import { Button, Card} from "react-bootstrap";
import './AboutUs.css';
const AboutUs = () => {
    return (
        <>
        <div>
        <h2>Sobre nosotros</h2>
        <p>
            Boca Sports
        </p>
        <p>
        Nuestra tienda ofrece una amplia gama de camisetas, pantalones cortos y medias, todos con los colores característicos del club, azul y amarillo. Los fans pueden encontrar tanto las camisetas de juego utilizadas por los jugadores como las réplicas para los seguidores. También hay opciones para hombres, mujeres y niños.
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
