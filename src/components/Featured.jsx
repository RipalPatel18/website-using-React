export default function Featured() {
  return (
    <section id="projects" className="featured">
      <h2>My Featured Projects</h2>
      <div className="columns">
        <article className="column">
          <img src="./images/project1.jpg" alt="Grow Go app" />
          <h3>Grow Go WaterPlant Project</h3>
          <p>A fun, interactive front-end project demonstrating visual design and responsiveness using HTML, CSS and JavaScript.</p>
        </article>

        <article className="column">
          <img src="./images/project2.jpg" alt="FashionFolio" />
          <h3>FashionFolio</h3>
          <p>FashionFolio is a simple, user-friendly web app designed to help you keep track of your clothes and personal fashion style with ease.</p>
        </article>

        <article className="column">
          <img src="/images/project3.jpg" alt="Dashboard app" />
          <h3>Clients Dashboard</h3>
          <p>This project is a simple web application built using PHP, MySQL, and Bootstrap.</p>
        </article>
      </div>
    </section>
  );
}
