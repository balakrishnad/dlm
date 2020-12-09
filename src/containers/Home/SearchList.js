import React from 'react';
import { Layout, DropDown } from '../../Components/index';
import { Button } from 'react-bootstrap';

const SearchList = ({opts, action, goAction}) => {
    return (
        <Layout width={50} height={15} customStyle={{ borderRadius: 13, padding: '1rem', boxShadow: '0 1px 1px 0 rgba(94,81,81,0.5)' }}>
            <div className="dlm-home-search-heading">Search for a Member or Distribution List</div>
            <DropDown options={opts} onChange={action}/>
            <div className="dlm-home-search-go">
                <Button onClick={goAction}>Go</Button>
            </div>
        </Layout>
    );
};

export default SearchList;