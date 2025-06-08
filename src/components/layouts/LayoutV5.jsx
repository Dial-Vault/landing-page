import FooterV1 from '../footer/FooterV1';
import HeaderV1 from '../header/HeaderV1';
import BreadCrumb from '../breadCrumb/BreadCrumb';

const LayoutV5 = ({ children, breadCrumb, title }) => {
    return (
        <>
            <HeaderV1 />
            {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV5;