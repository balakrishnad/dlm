import React from 'react';
import { Layout } from '../../Components/index';

const SearchList = ({ name, gpId, email, distributionCount }) => {
    return (
        <Layout width={50} height={15} customStyle={{ borderRadius: 13, padding: '1rem', boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-member-list-detail1">
                <div className="dlm-member-list-name">{name}</div>
                <div className="dlm-member-list-gpid">GPID: {gpId}</div>
            </div>
            <div className="dlm-member-list-email">{email}</div>
            <div className="dlm-member-list-seprator"></div>
            <div className="dlm-member-list-dist-count">Member is in {distributionCount} Distribution Lists</div>
        </Layout>
    );
};

export default SearchList;