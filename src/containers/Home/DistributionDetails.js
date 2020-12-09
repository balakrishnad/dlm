import React from 'react';
import { Layout } from '../../Components/index';

const DistributionDetails = ({ name, date, email, owner, listCount }) => {
    return (
        <Layout width={50} height={15} customStyle={{ borderRadius: 13, padding: '1rem', boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-distribution-detail1">
                <div className="dlm-distribution-name">{name}</div>
                <div className="dlm-distribution-date">{date}</div>
            </div>
            <div className="dlm-distribution-seprator"></div>
            <div className="dlm-distribution-detail2">
                <div className="dlm-distribution-owner">Owner: {owner}</div>
                <div className="dlm-distribution-email">{email}</div>
            </div>
            <div className="dlm-distribution-owner-list">Lists Owned: {listCount}</div>
        </Layout>
    );
};

export default DistributionDetails;