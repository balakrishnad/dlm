import React from 'react';
import { Layout } from '../../Components/index';
import { Button } from 'react-bootstrap';

const CreateNewList = ({ createAction }) => {
    return (
        <Layout width={50} height={15} customStyle={{ borderRadius: 13, padding: '1rem', boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-create-new-list-heading">New List Name</div>
            <div className="dlm-create-new-list-input" >
                <input
                    type="text"
                    name="create-new-list"
                />
            </div>
            <div className="dlm-create-new-list-create">
                <Button onClick={createAction}>Create</Button>
            </div>
        </Layout>
    );
};

export default CreateNewList;