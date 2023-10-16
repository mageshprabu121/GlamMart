import React from 'react'
import './Faq.css'
const Faq = () => {
  return (
    <section className="faq-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="faq-title text-center pb-3">
          <h2>FAQ</h2>
        </div>
      </div>
      <div className="col-md-8 offset-md-2">
        <div className="faq" id="accordion">
          <div className="card">
            <div className="card-header" id="faqHeading-1">
              <div className="mb-0">
                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                  <span className="badge">1</span>What types of beauty and fashion products does GlamMart offer?
                </h5>
              </div>
            </div>
            <div id="faqCollapse-1" className="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
              <div className="card-body">
                <p>Provide an overview of the product categories available on the website.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="faqHeading-2">
              <div className="mb-0">
                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="false" data-aria-controls="faqCollapse-2">
                  <span className="badge">2</span> Are the beauty products on GlamMart cruelty-free and eco-friendly?
                </h5>
              </div>
            </div>
            <div id="faqCollapse-2" className="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
              <div className="card-body">
                <p>Address concerns about the ethical and environmental aspects of the products</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="faqHeading-3">
              <div className="mb-0">
                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="false" data-aria-controls="faqCollapse-3">
                  <span className="badge">3</span>How can I find the latest fashion trends on GlamMart?
                </h5>
              </div>
            </div>
            <div id="faqCollapse-3" className="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
              <div className="card-body">
                <p>Explain how customers can discover the latest fashion trends and collections.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="faqHeading-4">
              <div className="mb-0">
                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-4" data-aria-expanded="false" data-aria-controls="faqCollapse-4">
                  <span className="badge">4</span> What is the return policy for beauty and fashion items?
                </h5>
              </div>
            </div>
            <div id="faqCollapse-4" className="collapse" aria-labelledby="faqHeading-4" data-parent="#accordion">
              <div className="card-body">
                <p>Detail the return and exchange policy for beauty and fashion products</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="faqHeading-5">
              <div className="mb-0">
                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-5" data-aria-expanded="false" data-aria-controls="faqCollapse-5">
                  <span className="badge">5</span> Can I get style recommendations or fashion tips on GlamMart?
                </h5>
              </div>
            </div>
            <div id="faqCollapse-5" className="collapse" aria-labelledby="faqHeading-5" data-parent="#accordion">
              <div className="card-body">
                <p> Mention if there are resources or guides available for customers seeking fashion advice.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="faqHeading-6">
              <div className="mb-0">
                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-6" data-aria-expanded="false" data-aria-controls="faqCollapse-6">
                  <span className="badge">6</span> Are the beauty products on GlamMart suitable for sensitive skin?
                </h5>
              </div>
            </div>
            <div id="faqCollapse-6" className="collapse" aria-labelledby="faqHeading-6" data-parent="#accordion">
              <div className="card-body">
                <p>Provide information about product suitability for different skin types.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="faqHeading-7">
              <div className="mb-0">
                <h5 className="faq-title" data-toggle="collapse" data-target="#faqCollapse-7" data-aria-expanded="false" data-aria-controls="faqCollapse-7">
                  <span className="badge">7</span>Do you offer personalized skincare or beauty product recommendations?
                </h5>
              </div>
            </div>
            <div id="faqCollapse-7" className="collapse" aria-labelledby="faqHeading-7" data-parent="#accordion">
              <div className="card-body">
                <p>Explain if there are tools or features to help customers find products tailored to their needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Faq