import React from 'react';
import { Layout } from '../../Components/index';

const DistributionCard = ({ dlName, dlMembers, clickHandler }) => (
    <div className="dlm-home-dl-list-container" onClick={clickHandler}>
        <Layout width={14} height={8} customStyle={{ borderRadius: 8, boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-home-dl-list-name">
                {dlName}
            </div>
            <div className="dlm-home-dl-list-members">
                {dlMembers}
                {' '}
                Members
            </div>
            <div className="dlm-home-dl-list-details">
                Details
            </div>
        </Layout>
    </div>

);

export default DistributionCard;