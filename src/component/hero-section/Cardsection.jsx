import React, {use} from 'react';


const Cardsection = ({cardPromise}) => {
    console.log(cardPromise);
    const data = use(cardPromise);
    console.log(data)
    return (
        <div>
            cards: {data.length}
        </div>
    );
};

export default Cardsection;