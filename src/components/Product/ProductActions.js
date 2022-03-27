import { Button } from 'primereact/button';

export function ProductActions(props) {

    return (
        <div className='product-actions'>
            <span
                className="product-wishlistFlex product-actionsButton product-wishlist">
                <Button
                    icon="pi pi-shopping-cart" iconPos="left"
                    label="ADD TO CART" className="p-button-outlined" />
            </span>

        </div>
    )
}
