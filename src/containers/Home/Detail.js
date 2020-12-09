import React, { useState, useRef } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import AddIcon from '../../styles/images/add.png';
import RemoveIcon from '../../styles/images/remove.png';
import { Form } from 'react-bootstrap'

const sampleData = [
    {
        col1: 'Alex Jacobs - GPID: 4560987',
        col2: 'alex@gmail.com',
        action: 'remove'
    }
]
const actionIcon = (type) => {
    if (type == 'add') {
        return AddIcon;
    } else {
        return RemoveIcon;
    }
}
const Detail = ({ headerTitle, subHeader, data = sampleData, doneAction, filter = false, status }) => {
    const [originalData, setoriginalDataa] = useState(data);
    const [inputData, setInputData] = useState(originalData);
    const [filterData, setFilterData] = useState(filter);
    const selectRef = useRef(null);
    const [selectValue, setSelectValue] = useState('');
    let optionList = [];
    if (filter) {
        let options = filterData.map((obj, i) => {
            {
                Object.keys(obj).map((key, index) => {
                    optionList.push(<option key={key} value={key}>{obj[key]}</option>)

                })
            }

        })
    }
    const handleSelectChange = event => {
        setInputData(originalData);
        setSelectValue('');
    }
    const handleInputChange = event => {
        let searchKey = event.target.value;
        if (status === "distributionList") {
            let selectedValue = selectRef.current.value;
            setSelectValue(searchKey);
            const capitalize = (string) => {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            let inputString = capitalize(searchKey);
            let results = [];
            for (var i = 0; i < originalData.length; i++) {
                for (var key in originalData[i]) {
                    if (originalData[i][selectedValue].indexOf(inputString) != -1) {
                        results.push(originalData[i]);
                    }
                }
            }
            let newArray = [];
            let uniqueObject = {};
            for (let i in results) {
                let objTitle = results[i]['GPID'];
                uniqueObject[objTitle] = results[i];
            }
            for (i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
            setInputData(newArray);
        } else if (status === "editList" || "AddRemove") {
            setSelectValue(searchKey);
            let inputString = searchKey.toUpperCase();
            let results = [];
            for (var i = 0; i < originalData.length; i++) {
                for (var key in originalData[i]) {
                    if (originalData[i].col1.indexOf(inputString) != -1) {
                        results.push(originalData[i]);
                    }
                }
            }
            let newArray = [];
            let uniqueObject = {};
            for (let i in results) {
                let objTitle = results[i]['id'];
                uniqueObject[objTitle] = results[i];
            }
            for (i in uniqueObject) {
                newArray.push(uniqueObject[i]);
            }
            console.log(newArray)
            setInputData(newArray);
        }
    };
    return (
        <div>
            <div className='dlm-detail-header-title'>
                {headerTitle}
            </div>
            <div className='dlm-detail-sub-header'>
                {subHeader.name1 && <span className='dlm-detail-sub-header-part1'><span className='dlm-detail-sub-header-name1'>{subHeader.name1}</span>: <span className='dlm-detail-sub-header-value1'>{subHeader.value1}</span></span>}
                {subHeader.name2 && <span className='dlm-detail-sub-header-part2'><span className='dlm-detail-sub-header-name2'>{subHeader.name2}</span>: <span className='dlm-detail-sub-header-value2'>{subHeader.value2}</span></span>}
                {subHeader.action && <span className='dlm-detail-sub-header-part3' onClick={subHeader.actionHandler}>{subHeader.action}</span>}
            </div>
            <div className={'dlm-detail-container ' + (status)}>
                {filter && <div className='dlm-detail-char'>
                    <div>


                        {status === "distributionList" &&
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Control as="select"
                                            ref={selectRef}
                                            onChange={handleSelectChange}
                                            defaultValue="Select Field">
                                            {optionList}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col} >
                                        <Form.Control
                                            type="text"
                                            value={selectValue}
                                            placeholder="Search Participant"
                                            onChange={handleInputChange} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        }
                        {status === "editList" &&
                            <Form  className="singeleSearch">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            type="text"
                                            value={selectValue}
                                            placeholder="Search List"
                                            onChange={handleInputChange} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        }
                        {status === "AddRemove" &&
                            <Form className="singeleSearch">
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            type="text"
                                            value={selectValue}
                                            placeholder="Search Owner’s Distribution Lists"
                                            onChange={handleInputChange} />
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        }
                    </div>
                </div>
                }

                <Container className='dlm-detail-grid'>

                    {inputData.map((obj, i) => {
                        return <Row key={'row' + i} className='dlm-detail-grid-row'>
                            {Object.keys(obj).map((key, index) => {
                                if (key !== 'action') {
                                    return <Col key={'col-' + index} className='dlm-detail-grid-col'>{obj[key]}</Col>
                                } else {
                                    return <Col key={'col-' + index} md={1}><img src={actionIcon(obj[key])} /></Col>
                                }
                            })}
                        </Row>
                    })}
                </Container>
                <div className='dlm-detail-done-button'>
                    <Button onClick={doneAction}>Done</Button>
                </div>
            </div >
        </div >
    );
}

export default Detail;