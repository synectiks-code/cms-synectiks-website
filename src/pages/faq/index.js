import React,{useState, useEffect, useRef} from 'react';
import Layout from '../../components/Layout.js';
import styled from 'styled-components';
// import SEO from '../../components/seo.js';
import { Helmet } from 'react-helmet';
import '../../css/accordion.css'; 
import Chevron  from '../../img/chevron.svg';


export default function Faq() {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <Layout>
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>Lorem ipsum dolor sit amet.</span>
                <img 
                className={toggle && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
                </p>
            </div>
            
        </div>
        <div className="accordion">

<button 
onClick={toggleState}
className="accordion-visible">
    <span>Lorem ipsum dolor sit amet.</span>
    <img 
    className={toggle && "active"}
    src={Chevron} />
</button>

<div 
className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
style={{height: toggle ? `${heightEl}` : "0px"}}
ref={refHeight}
>
    <p aria-hidden={toggle ? "true" : "false"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, suscipit quae maiores sunt ducimus est dolorem perspiciatis earum corporis unde, dicta quibusdam aut placeat dignissimos distinctio vel quo eligendi ipsam.
    </p>
</div>

</div>
        </Layout>
    )
}
const FaqHeaderWrapper = styled.div`
color: white;
text-align: center;
padding: 2em;
`;
const FaqH1 = styled.h1`
    margin-bottom: 1em;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
`;
const FaqH2 = styled.h1`
    margin-bottom: 1em;
    font-size: 4rem;
    text-transform: capitalize;
    /* font-family: 'Lato', sans-serif; */
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
`;
const FaqBtnwrapper = styled.button`
background-color: #D8D8D8;
`; 
const FaqbodyWrapper = styled.div`
background-color: #E9E9E9;
`;
