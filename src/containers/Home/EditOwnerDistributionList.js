import React from 'react';
import { Layout } from '../../Components/index';
import EditIcon from '../../styles/images/edit.png';

const EditOwnerDistributionList = () => {
    return (
        <Layout width={10} height={15} customStyle={{ borderRadius: 8, boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-edit-owner-distribution-list-icon">
                <img src={EditIcon} />
            </div>
            <div className="dlm-edit-owner-distribution-list-text">
                Edit Owner’s Distribution Lists
            </div>
        </Layout>
    );
};

export default EditOwnerDistributionList;