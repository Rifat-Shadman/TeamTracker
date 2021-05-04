import { Alert } from 'react-bootstrap';
import React from 'react';

const NotFound = () => {
    return (
        <div>

            <Alert variant="danger" dismissible>
                <Alert.Heading>Error. 404 Not Found</Alert.Heading>
                <p>
                    Change the url and try again. Sorry for this inconvenience.
                </p>
            </Alert>
        </div>
    );
};

export default NotFound;