import React, {useState} from 'react';
import './OrderBasket.css';

const OrderBasket = () => {

    const [counterBanana, setCounterBanana] = useState(0);
    const [counterKiwi, setCounterKiwi] = useState(0);
    const [counterApple, setCounterApple] = useState(0);
    const [counterStrawberry, setCounterStrawberry] = useState(0);

    function resetAll() {
        setCounterStrawberry(0);
        setCounterKiwi(0);
        setCounterBanana(0);
        setCounterApple(0);
    }

    function DecreaseItem(name) {
        switch(name) {
            case "banana" :
                if (counterBanana !== 0) {
                    return setCounterBanana(counterBanana - 1);
                }
                break;
            case "kiwi" :
                if (counterKiwi !== 0) {
                    return setCounterKiwi(counterKiwi - 1);
                }
                break;
            case "apple" :
                if (counterApple !== 0) {
                    return setCounterApple(counterApple - 1);
                }
                break;
            case "strawberry" :
                if (counterStrawberry !== 0) {
                    return setCounterStrawberry(counterStrawberry - 1);
                }
                break;
            default:
                return true;
        }
    }

    function IncreaseItem(name) {

        switch (name) {
            case "banana" :
                return setCounterBanana(counterBanana + 1);
            case "kiwi" :
                return setCounterKiwi(counterKiwi + 1);
            case "apple" :
                return setCounterApple(counterApple + 1);
            case "strawberry" :
                return setCounterStrawberry(counterStrawberry + 1);
            default:
                return true;
        }
    }

    return (
        <>
            <div className="OrderBasket">
                <div className="basketItem"> <span>Banaan</span>
                    <button
                        onClick={() => DecreaseItem('banana')}> - </button>
                    {counterBanana}
                    <button
                        onClick={() => IncreaseItem('banana')}>+ </button>
                </div>

                <div className="basketItem"><span>Kiwi</span>
                    <button
                        onClick={() => DecreaseItem('kiwi')}> - </button>
                    {counterKiwi}
                    <button
                        onClick={() => IncreaseItem('kiwi')}>+ </button>
                </div>

                <div className="basketItem"><span>Appel</span>
                    <button
                        onClick={() => DecreaseItem('apple')}> - </button>
                    {counterApple}
                    <button
                        onClick={() => IncreaseItem('apple')}>+ </button>
                </div>

                <div className="basketItem"><span>Aardbei</span>
                    <button
                        onClick={() => DecreaseItem('strawberry')}> - </button>
                    {counterStrawberry}
                    <button
                        onClick={() => IncreaseItem('strawberry')}>+ </button>
                </div>

                <button value="reset" type="button" onClick={resetAll}>Reset</button>
            </div>
        </>
    );
}

export default OrderBasket;

