import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Library(props) {

    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <tr>
            <th scope="row">{props.idx + 1}</th>
                <td>
                    {
                    (props.lib.type) === "js" ? <i className="fab fa-js-square"></i> : <i className="fab fa-node"></i>
                    }
                    {" " + props.lib.name}
                    </td>
                <td><a href={props.lib.website}>{props.lib.name}</a></td>
                <td>
                <Button variant="outline-primary" onClick={handleShow}>
                    Pop up
                </Button>
                    </td>
                <td>
                    {
                        props.lib.tags.map(tag => {
                            return tag + " ";
                        })
                    }
                </td>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{props.lib.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{props.lib.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </tr>
    );
}

export default Library;