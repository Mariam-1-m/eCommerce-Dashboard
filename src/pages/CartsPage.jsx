import CartSec1 from '../components/cart/sec1'
import CartContainer from '../components/cart/CartContainer';
function CartsPage(){
    return(
<div className='flex flex-col  items-center justify-center px-3 py-5'>
    <CartSec1/>
    <CartContainer/>
</div>
    );
}

export default CartsPage;