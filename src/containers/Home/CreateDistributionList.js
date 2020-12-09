import React from 'react';
import { Layout } from '../../Components/index';
import MenuIcon from '../../styles/images/menu.png';

const CreateDistributionList = () => {
    return (
        <Layout width={10} height={15} customStyle={{ borderRadius: 8, boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-home-create-dl-list-icon">
                <img src={MenuIcon} />
            </div>
            <div className="dlm-home-create-dl-list-text">
                Create a New Distribution List
              </div>
        </Layout>
    );
};

export default CreateDistributionList;