import { ProductCard } from 'components/Product/ProductCard';

import 'primeflex/primeflex.css';

export default function App() {
    return (
        <ul className='result-base'>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li><ProductCard /></li>
            <li class="results-liDummy"></li>
        </ul>
    );
}
