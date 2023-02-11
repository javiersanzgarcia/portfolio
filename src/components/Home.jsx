import '../CSS/Home.css'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <h3>Hello!</h3>
          <h2>
            I Am <span>Javier Sanz </span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
            mollitia alias amet earum, obcaecati numquam nesciunt vero
            reprehenderit veniam, quas repellat in ratione.
          </p>
        </div>

        <div className="social">
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
