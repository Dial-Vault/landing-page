import ChooseProgress1Data from '@/assets/jsonData/choose/ChooseProgress1Data.json';
import SingleChooseProgressV1 from '@/components/whyChoose/SingleChooseProgressV1';
import cmsLogo from '/assets/img/clients/7.png'
import csdirektLogo from '/assets/img/clients/csdirekt.png'
import suvidhaLogo from '/assets/img/clients/3.png'
import imperiumLogo from '/assets/img/clients/6.png'
import lemontreeLogo from '/assets/img/clients/4.png'
import kalyanLogo from '/assets/img/clients/5.png'
import sunburnLogo from '/assets/img/clients/sunburn (2).png'
import midtownLogo from '/assets/img/clients/2.png'
import hyundaiLogo from '/assets/img/clients/hyundai.png'

const TEXT_CONSTANTS = {
  experienceYears: 9,
  experienceTitle: "Years of trusted security service",
  mainHeading: "Partnering for a safer tomorrow",
  processSteps: [
    {
      step: "01",
      title: "Risk assessment",
      description: "We assess your location, needs, and vulnerabilities to develop a custom security strategy."
    },
    {
      step: "02",
      title: "Deployment planning",
      description: "Our experts plan staff deployment, patrol routes, and emergency protocols based on your site."
    },
    {
      step: "03",
      title: "24/7 Monitoring & Response",
      description: "We provide continuous protection with trained personnel and real-time support systems."
    }
  ]
};

const WhyChooseV1 = () => {
  return (
    <>
      <div className="choose-us-style-one-area overflow-hidden default-padding-top bg-gray">
        <div className="container">
          <div className="heading-left">
            <div className="row">
              <div className="col-lg-5 offset-lg-1">
                <div className="experience-style-one">
                  <h2>
                    <strong>{TEXT_CONSTANTS.experienceYears}+</strong> {TEXT_CONSTANTS.experienceTitle}
                  </h2>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="circle-progress">
                  {ChooseProgress1Data.map(progress =>
                    <SingleChooseProgressV1 progress={progress} key={progress.id} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container container-stage">
          <div className="choose-us-one-thumb">
            <div className="content">
              <div className="left-info">
                <h2 className="title">{TEXT_CONSTANTS.mainHeading}</h2>
              </div>
              <div className="process-style-one">
                {TEXT_CONSTANTS.processSteps.map(step => (
                  <div className="process-style-one-item" key={step.step}>
                    <span>{step.step}</span>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        <section className="logo-cloud-section" id="clients">
          <h2 className="section-title text-center text-dark">Trusted By</h2>
          <div className="logo-cloud">
            <img src={csdirektLogo} alt="Client 1" className="logo-item" />
            <img src={cmsLogo} alt="Client 2" className="logo-item" />
            <img src={sunburnLogo} alt="Client 3" className="logo-item" />
            <img src={hyundaiLogo} alt="Client 4" className="logo-item" />
            <img src={kalyanLogo} alt="Client 5" className="logo-item" />
            {/* <img src={lemontreeLogo} alt="Client 6" className="logo-item" /> */}
            <img src={imperiumLogo} alt="Client 7" className="logo-item" />
            <img src={midtownLogo} alt="Client 7" className="logo-item" />
            <img src={suvidhaLogo} alt="Client 7" className="logo-item" />
            {/* Add as many as you like */}
          </div>
        </section>
    </>
  );
};

export default WhyChooseV1;
