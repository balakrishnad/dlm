import React, { useState, useEffect, useReducer } from 'react';
import { AppLogo } from '../../Components/index';
import './Home.scss';
import axios from 'axios';
import DistributionCard from './DistributionCard';
import DailyActivityText from './DailyActivityText';
import CreateDistributionList from './CreateDistributionList';
import SearchList from './SearchList';
import MemberDetails from './MemberDetails';
import DistributionDetails from './DistributionDetails';
import AddRemoveMemberFromList from './AddRemoveMemberFromList';
import EditOwnerDistributionList from './EditOwnerDistributionList';
import CreateNewList from './CreateNewList';
import { Modal } from 'react-bootstrap'
import Detail from './Detail';
import ProfilePic from '../../styles/images/Profile_pic.jpg';
import { First } from 'react-bootstrap/PageItem';

const Home = () => {
  const [searchList, setSearchList] = useState([]);
  const [myDlList, setMyDlList] = useState([]);
  const [dlListOwner, setdlListOwner] = useState([]);
  const [dailyActivity, setDailyActivity] = useState([]);
  const [memberDetail, setMemberDetail] = useState({});
  const [distributionDetail, setDistributionDetail] = useState({});
  const [changeView, setChangeView] = useState(false);
  const [showDlmModal, setShowDlmModal] = useState(false);
  const [modalProps, setModalProps] = useState({});


  const changeSearchOption = (data) => {
    setSearchOptions({
      type: data.target.value.type,
      payLoad: data.target.value
    });
  }

  const createDistributionList = () => {
    setSearchOptions({
      type: 'create',
      payLoad: {}
    });
    setChangeView(true);
  }

  const searchOptionReducer = (state, action) => {
    switch (action.type) {
      case 'member':
        return { type: 'member', id: action.payLoad.id, value: action.payLoad.value, api: 'member-detail.json' };
      case 'distribution':
        return { type: 'distribution', id: action.payLoad.id, value: action.payLoad.value, api: 'distribution-detail.json' };
      case 'create':
        return { type: 'create', id: null, value: null, api: '' };
      default:
        setChangeView(false);
      // throw new Error();
    }
  }

  const [searchOptions, setSearchOptions] = useReducer(searchOptionReducer, { type: '', id: '', value: '', api: '' });

  const searchAction = () => {
    if (searchOptions.type !== '') {
      axios.get(`./../../../mockdata/${searchOptions.api}`).then((response) => {
        searchOptions.type === 'member' ? setMemberDetail(response.data) : setDistributionDetail(response.data);
        setChangeView(true);
      }).catch(() => {
        throw new Error();
      });
    }
  }

  const distributionListClick = (e) => {
    axios.get(`./../../../mockdata/dl-detail.json`).then((response) => {
      setModalProps({
        headerTitle: 'Distribution List Details and Participant List',
        subHeader: {
          name1: 'List Name',
          value1: 'SPA - IT UCC Collaboration Assistance',
          action: 'Rename',
          actionHandler: () => { console.log('Rename') }
        },
        data: response.data,
        status: "distributionList",
        filter: [
          { firstName: "First Name", },
          { lastName: "Last Name" },
          { GPID: "GPID" },
          { email: "E-mail" }
        ]
      })
      setShowDlmModal(!showDlmModal);
    }).catch(() => {
      throw new Error();
    });
  }

  const addOrRemoveMemberFromList = (e) => {
    axios.get(`./../../../mockdata/add-remove-member-detail.json`).then((response) => {
      setModalProps({
        headerTitle: 'Add/Remove Member from Lists',
        subHeader: {
          name1: 'Member',
          value1: 'Smithy, Steven',
          name2: 'GPID',
          value2: '4560987'
        },
        data: response.data,
        status: "AddRemove",
        filter: [
          { col1: "Title", }
        ]

      })
      setShowDlmModal(!showDlmModal);
    }).catch(() => {
      throw new Error();
    });
  }

  const editOwnerDLList = (e) => {
    axios.get(`./../../../mockdata/edit-dl-list.json`).then((response) => {
      setModalProps({
        headerTitle: 'Edit Owner’s Distribution Lists',
        subHeader: {
          name1: 'Owner',
          value1: 'Patten, Mike',
          name2: 'GPID',
          value2: '4560987'
        },
        data: response.data,
        status: "editList",
        filter: [
          { col1: "Title", }
        ]
      })
      setShowDlmModal(!showDlmModal);
    }).catch(() => {
      throw new Error();
    });
  }

  const handleClose = () => setShowDlmModal(false);

  useEffect(() => {
    const searchList = axios.get('./../../../mockdata/search-list.json');
    const dlList = axios.get('./../../../mockdata/my-dl-list.json');
    const dailyActvityList = axios.get('./../../../mockdata/daily-activity.json');
    const dlListIOwn = axios.get('./../../../mockdata/dl-list-i-won.json');

    axios.all([dlList, dailyActvityList, searchList, dlListIOwn]).then(axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      const responseThree = responses[2];
      const responseFour = responses[3];

      if (responseOne.data) {
        setMyDlList(responseOne.data)
      } else {
        console.log('Error')
      }

      if (responseTwo.data) {
        setDailyActivity(responseTwo.data)
      } else {
        console.log('Error')
      }

      if (responseThree.data) {
        setSearchList(responseThree.data)
      } else {
        console.log('Error')
      }
      if (responseFour.data) {
        setdlListOwner(responseFour.data)
      } else {
        console.log('Error')
      }
    })).catch((errors) => {
      console.log('Error')
    })
  }, [])

  return (
    <div className="dlm-home-container">
      <div className="dlm-home-head">
        {changeView && <div className="dlm-home-link" onClick={() => setChangeView(false)}>Home</div>}
        
        <div className="dlm-home-logo">
          <AppLogo w='150%' h='150%' />
        </div>
      </div>
      <div className="dlm-home-contents">
        <div className="dlm-home-greetings">
          {!changeView &&
            <div>
              <img alt="Profile_Pic" src={ProfilePic} />
              <span>Good afternoon user</span>
            </div>
          }
          {changeView && searchOptions.type === 'member' && 'Member Details'}

        </div>
        <div className="dlm-home-sub-container-1">
          <div className="dlm-home-dynamic-container">
            {!changeView && <SearchList opts={searchList} action={changeSearchOption} goAction={searchAction} />}
            {changeView && searchOptions.type === 'member' && <MemberDetails {...memberDetail} />}
            {changeView && searchOptions.type === 'distribution' && <DistributionDetails {...distributionDetail} />}
            {changeView && searchOptions.type === 'create' && <CreateNewList />}
          </div>
          {changeView && searchOptions.type === 'member' && <div className="dlm-home-add-remove-member-container" onClick={addOrRemoveMemberFromList}>
            <AddRemoveMemberFromList />
          </div>}
          {changeView && searchOptions.type === 'distribution' && <div className="dlm-edit-owner-dl-list-container" onClick={editOwnerDLList}>
            <EditOwnerDistributionList />
          </div>}
          <div className="dlm-home-create-dl-list-container" onClick={createDistributionList}>
            <CreateDistributionList />
          </div>
        </div>
        <div className="dlm-home-my-dl-list-text">
          My Distribution Lists
        </div>
        <div className="dlm-home-my-dl-list-container">
          {myDlList.map((dl, i) => (
            <div key={i} className="dlm-home-my-dl">
              <DistributionCard dlName={dl.name} dlMembers={dl.members} clickHandler={distributionListClick} />
            </div>
          ))}
        </div>
        <div className="dlm-home-dl-list-i-own">
          Own Distribution Lists
        </div>
        <div className="dlm-home-my-dl-list-i-own-container">
          {dlListOwner.map((dl, i) => (
            <div key={i} className="dlm-home-my-dl">
              <DistributionCard dlName={dl.name} dlMembers={dl.members} clickHandler={distributionListClick} />
            </div>
          ))}
        </div>
        <div className="dlm-home-daily-activity-text">
          Daily Activity
        </div>
        <div className="dlm-home-daily-activity-container">
          {dailyActivity.map((obj, i) => (<DailyActivityText key={i} dailyActivityText={obj.activity} />))}
        </div>
      </div>
      <Modal show={showDlmModal} onHide={handleClose} dialogClassName="modal-60w">
        <Detail
          headerTitle={modalProps.headerTitle}
          subHeader={modalProps.subHeader}
          doneAction={handleClose}
          data={modalProps.data}
          filter={modalProps.filter}
          status={modalProps.status}
        ></Detail>
      </Modal>
    </div>
  )
}

export default Home;
