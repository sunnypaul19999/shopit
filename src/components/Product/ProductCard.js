import { Card } from 'primereact/card';

import { ProductImage } from 'components/Product/ProductImage';
import { ProductMetaInfo } from 'components/Product/ProductMetaInfo';

import 'assets/Product/Product-Card.scss';
import { ProductActions } from './ProductActions';

export function ProductCard(props) {
    return (
        <div className='shopit'>
            <div class='product-base'>
                <Card
                    className='shopit-product-card'>
                    <a target={'noreferrer'} href={'/'}>
                        <ProductImage />
                        <ProductMetaInfo />
                    </a>
                </Card>
                <ProductActions />
            </div>
        </div>
    );
}