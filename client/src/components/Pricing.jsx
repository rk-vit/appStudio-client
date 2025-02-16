import "./Pricing.css"

function Pricing() {
  const plans = [
    { name: "Basic", price: "$29", features: ["1 Project", "5 Users", "Basic Support", "1GB Storage"] },
    { name: "Pro", price: "$99", features: ["5 Projects", "20 Users", "Priority Support", "10GB Storage"] },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited Projects", "Unlimited Users", "24/7 Support", "Unlimited Storage"],
    },
  ]

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <h2 className="section-title">Pricing Plans</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-plan">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-price">{plan.price}</p>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary">
                Choose Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

