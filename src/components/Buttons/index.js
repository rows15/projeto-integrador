import {Button } from 'react-bootstrap';
import './style.scss'
import Swal from "sweetalert2"

const Buttons = (props) => {

    const { type, action, product, text, paddindMargin, modal, ariaLabel } = props

    //types: success, outline-success, secondary

    const modalFire = (product) => {
        Swal.fire({
            imageUrl: product.imageUrl,
            imageHeight: 100,
            imageWidth: 120,
            imageAlt: product.title,
            title: 'Produto adicionado!',
            icon: 'success',
            iconColor: '#106b87',
            confirmButtonText: 'Continuar Comprando',
            buttonsStyling: false,
            width: 450,
            height: 350
        
        })
    }

    return (

        <Button
            variant={type}
            aria-label={ariaLabel}
            className={paddindMargin}
            onClick={() => {
                action(product)
                if (modal)
                    modalFire(product)
            }
            }
        >
            {text}
        </Button>
        
    )
}

export default Buttons;