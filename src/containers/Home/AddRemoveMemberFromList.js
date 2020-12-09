import React from 'react';
import { Layout } from '../../Components/index';
import CancelIcon from '../../styles/images/cancel.png';
import PlusIcon from '../../styles/images/plus.png';

const AddRemoveMemberFromList = () => {
    return (
        <Layout width={10} height={15} customStyle={{ borderRadius: 8, boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-home-add-remove-member-icon">
                <img src={PlusIcon} />
                <img src={CancelIcon} />
            </div>
            <div className="dlm-home-add-remove-member-text">
                Add/Remove Member from Lists
              </div>
        </Layout>
    );
};

export default AddRemoveMemberFromList;