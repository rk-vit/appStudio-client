import "./Features.css"

function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">&#60;/&#62;</div>
            <h3 className="feature-title">Code</h3>
            <p className="feature-description">
              Write clean, efficient, and maintainable code using the latest technologies and best practices.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">&#9888;</div>
            <h3 className="feature-title">Test</h3>
            <p className="feature-description">
              Rigorously test your software to ensure reliability, performance, and user satisfaction.
            </p>
          </div>
          <div className="feature">
            <div className="feature-icon">&#128640;</div>
            <h3 className="feature-title">Deploy</h3>
            <p className="feature-description">
              Seamlessly deploy your applications to production with confidence and ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

