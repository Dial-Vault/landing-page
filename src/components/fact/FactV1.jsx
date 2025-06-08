import CountUp from 'react-countup';

// Constants for labels and values
const FACTS = [
    {
        value: 120,
        suffix: '+',
        label: 'Clients Secured',
    },
    {
        value: 50,
        suffix: '+',
        label: 'Emergency SOS Responses',
    },
    {
        value: 12,
        suffix: '+',
        label: 'Cities Covered',
    },
    {
        value: 650,
        suffix: '+',
        label: 'Guards Deployed',
    },
];

const FactV1 = ({ sectionClass }) => {
    return (
        <div className={`fun-factor-area default-padding-bottom ${sectionClass || ''}`}>
            <div className="container">
                <div className="fun-fact-style-one-items text-center">
                    <div className="row">
                        {FACTS.map((fact, index) => (
                            <div className="col-lg-3 col-md-6 funfact-style-one-item" key={index}>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer">
                                            <CountUp end={fact.value} enableScrollSpy={true} />
                                        </div>
                                        <div className="operator">{fact.suffix}</div>
                                    </div>
                                    <span className="medium">{fact.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FactV1;
