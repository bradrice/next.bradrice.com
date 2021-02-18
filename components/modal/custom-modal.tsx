import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import styles from './custommodal.module.scss'



export const CustomModal = (props: any) => {

    const { show, image, title} = props;

    const [showModal, setShowModal] = useState<boolean>();

    useEffect(() => {
        setShowModal(show);
    }, [show])

    

    return (

        <div>
                <Modal show={props.show} image={props.image} title={props.title}>

                    <Modal.Header>
                        <Modal.Title>
                            {props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                       <img className={`img-fluid ${styles.modalImage}`} src={`images/portfolio/${props.image}`} />

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.close}>Close</Button>
                    </Modal.Footer>

                </Modal>
        </div>
    );
}

// export function getStaticProps() {
//     // const allPostsData = getSortedPostsData()
//     return {
//       props: {
//         show : show,
//         title: title,
//         image: image,
//         close: close
//       }
//     }
//   }