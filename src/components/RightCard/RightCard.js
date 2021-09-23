import React from 'react';
import './RightCard.css'

const RightCard = () => {
    return (
        <div>
            <RightCard1></RightCard1>
            <RightCard2
                head="Recent Videos"
                li={[
                    <li>Video 1</li>,
                    <li>Video 2</li>,
                    <li>Video 3</li>,
                    <li>Video 4</li>
                ]}
            ></RightCard2>
            
        </div>
    );
};

const RightCard1 = () =>{
    return(
        <div>
            <h2>Personal Training</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores, eligendi a non sequi illum.</p>
        </div>
    );
}
const RightCard2 = (props) =>{
    return(
        <div>
            <h2>{props.head}</h2>
            <p>{props.li}</p>
        </div>
    );
}

export default RightCard;