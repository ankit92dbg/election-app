import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {DataTable} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {
  retrieveAddressWiseData,
  retrieveAgewiseData,
  retrieveAlphabeticalData,
  retrieveApproachQtyData,
  retrieveAreaWiseData,
  retrieveBirthdayData,
  retrieveCasteWiseData,
  retrieveDeadListData,
  retrieveDoubleNameData,
  retrieveEducationData,
  retrieveFamilyHeadReportData,
  retrieveFamilyLabelData,
  retrieveFamilyReportData,
  retrieveHomeShiftedData,
  retrieveLabelValueData,
  retrieveLabharthiCandidateData,
  retrieveLabharthiCenterData,
  retrieveLabharthiStateData,
  retrieveMarriageAgeData,
  retrieveNewVoterData,
  retrieveOutsideLocationData,
  retrievePartyWiseData,
  retrieveProfessionData,
  retrieveSMSData,
  retrieveSearchData,
  retrieveSingleVoterData,
  retrieveSurnameData,
  retrieveUserSession,
  retrieveVoterSurveyData,
} from '../utils';
import Loader from '../components/Loader';

const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: any) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const VoterFilterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(1);
  const [numberOfItemsPerPageList] = React.useState([50]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const [items, setItems] = React.useState<any>([]);
  const [compaignIntitialList, setCompaignIntitialList] = React.useState<any>(
    [],
  );
  const [compaignList, setCompaignList] = React.useState<any>([]);
  const [compaignTitle, setCompaignTitle] = useState('');
  const [socialMediaIntitialList, setSocialMediaIntitialList] =
    React.useState<any>([]);
  const [socialMediaList, setSocialMediaList] = React.useState<any>([]);
  const [socialMediaTitle, setSocialMediaTitle] = useState('');
  const {data} = useSelector((state: any) => state?.MasterData);
console.warn('data--->',data)
  const listVotersData = async (pageNo: any, total: any) => {
    setLoading(true);
    const session: any = await retrieveUserSession();
    let leader_id = '';
    if (session !== undefined) {
      if (session?.user_type == 1) {
        leader_id = session?.id;
      }
      if (session?.user_type == 2) {
        leader_id = session?.leader_id;
      }
    }
    switch (route?.params?.filterName) {
      case 'Search':
        // //setSnackBarVisible(true)
        setPage(pageNo);
        const dataSearch: any = await retrieveSearchData(
          pageNo,
          total,
          partFrom,
          partTo,
          name,
          fatherName,
          leader_id,
        );
        console.warn('dataSearch--->',loading,dataSearch)
        setItems([]);
        setItems(dataSearch?.data);
        setTotalPage(dataSearch?.totalData);
        // console.warn('dataSearch?.totalData--->',dataSearch?.totalData)
        //setSnackBarVisible(false);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return;

      case 'Alphabetical List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataAlpha: any = await retrieveAlphabeticalData(
          pageNo,
          total,
          partFrom,
          partTo,
          leader_id,
        );
        setItems([]);
        setItems(dataAlpha?.data);
        setTotalPage(dataAlpha?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Agewise List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataAgewise: any = await retrieveAgewiseData(
          pageNo,
          total,
          partFrom,
          partTo,
          ageFrom,
          ageTo,
          leader_id,
        );
        setItems([]);
        setItems(dataAgewise?.data);
        setTotalPage(dataAgewise?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Family Report':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataFamilyReport: any = await retrieveFamilyReportData(
          pageNo,
          total,
          partFrom,
          partTo,
          familySizeFrom,
          familySizeTo,
          leader_id,
        );
        setItems([]);
        setItems(dataFamilyReport?.data);
        setTotalPage(dataFamilyReport?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Family Head Report':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataFamilyHeadReport: any = await retrieveFamilyHeadReportData(
          pageNo,
          total,
          partFrom,
          partTo,
          familySizeFrom,
          familySizeTo,
          leader_id,
        );
        setItems([]);
        setItems(dataFamilyHeadReport?.data);
        setTotalPage(dataFamilyHeadReport?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Double Name List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataDoubleName: any = await retrieveDoubleNameData(
          pageNo,
          total,
          partFrom,
          partTo,
          leader_id,
        );
        setItems([]);
        setItems(dataDoubleName?.data);
        setTotalPage(dataDoubleName?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Married Woman Report':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataMarriageAge: any = await retrieveMarriageAgeData(
          pageNo,
          total,
          marriageAge,
          partFrom,
          partTo,
          leader_id,
        );
        setItems([]);
        setItems(dataMarriageAge?.data);
        setTotalPage(dataMarriageAge?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Single Voter List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataSingleVoter: any = await retrieveSingleVoterData(
          pageNo,
          total,
          partFrom,
          partTo,
          ageFrom,
          ageTo,
          leader_id,
        );
        setItems([]);
        setItems(dataSingleVoter?.data);
        setTotalPage(dataSingleVoter?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Address Wise List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataAddressWise: any = await retrieveAddressWiseData(
          pageNo,
          total,
          partFrom,
          partTo,
          address,
          leader_id,
        );
        setItems([]);
        setItems(dataAddressWise?.data);
        setTotalPage(dataAddressWise?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Surname Report':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataSurname: any = await retrieveSurnameData(
          pageNo,
          total,
          partFrom,
          partTo,
          surname,
          leader_id,
        );
        setItems([]);
        setItems(dataSurname?.data);
        setTotalPage(dataSurname?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Family Labels':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataFamilyLabel: any = await retrieveFamilyLabelData(
          pageNo,
          total,
          partFrom,
          partTo,
          familySizeFrom,
          familySizeTo,
          leader_id,
        );
        setItems([]);
        setItems(dataFamilyLabel?.data);
        setTotalPage(dataFamilyLabel?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'SMS':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataSMS: any = await retrieveSMSData(
          pageNo,
          total,
          partFrom,
          partTo,
          name,
          surname,
          leader_id,
        );
        setItems([]);
        setItems(dataSMS?.data);
        setTotalPage(dataSMS?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Caste Wise List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataCasteWise: any = await retrieveCasteWiseData(
          pageNo,
          total,
          partFrom,
          partTo,
          caste,
          leader_id,
        );
        setItems([]);
        setItems(dataCasteWise?.data);
        setTotalPage(dataCasteWise?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Label Value Filter':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataLabelValue: any = await retrieveLabelValueData(
          pageNo,
          total,
          partFrom,
          partTo,
          labelValue,
          leader_id,
        );
        setItems([]);
        setItems(dataLabelValue?.data);
        setTotalPage(dataLabelValue?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Area Wise List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataAreaWise: any = await retrieveAreaWiseData(
          pageNo,
          total,
          partFrom,
          partTo,
          area,
          leader_id,
        );
        setItems([]);
        setItems(dataAreaWise?.data);
        setTotalPage(dataAreaWise?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Party Wise List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataPartyWise: any = await retrievePartyWiseData(
          pageNo,
          total,
          partFrom,
          partTo,
          party,
          leader_id,
        );
        setItems([]);
        setItems(dataPartyWise?.data);
        setTotalPage(dataPartyWise?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Dead List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataDeadList: any = await retrieveDeadListData(
          pageNo,
          total,
          partFrom,
          partTo,
          dead,
          leader_id,
        );
        setItems([]);
        setItems(dataDeadList?.data);
        setTotalPage(dataDeadList?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Birthday List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataBirthday: any = await retrieveBirthdayData(
          pageNo,
          total,
          partFrom,
          partTo,
          dateFrom,
          dateTo,
          leader_id,
        );
        setItems([]);
        setItems(dataBirthday?.data);
        setTotalPage(dataBirthday?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Education Report':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataEducation: any = await retrieveEducationData(
          pageNo,
          total,
          partFrom,
          partTo,
          education,
          leader_id,
        );
        setItems([]);
        setItems(dataEducation?.data);
        setTotalPage(dataEducation?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Shifted Report':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataHomeShifted: any = await retrieveHomeShiftedData(
          pageNo,
          total,
          partFrom,
          partTo,
          isHomeShifted,
          leader_id,
        );
        setItems([]);
        setItems(dataHomeShifted?.data);
        setTotalPage(dataHomeShifted?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'New Voter List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataNewVoter: any = await retrieveNewVoterData(
          pageNo,
          total,
          partFrom,
          partTo,
          leader_id,
        );
        setItems([]);
        setItems(dataNewVoter?.data);
        setTotalPage(dataNewVoter?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Profession Wise List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataProfession: any = await retrieveProfessionData(
          pageNo,
          total,
          partFrom,
          partTo,
          profession,
          leader_id,
        );
        setItems([]);
        setItems(dataProfession?.data);
        setTotalPage(dataProfession?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Outside Location List':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataOutsideLocation: any = await retrieveOutsideLocationData(
          pageNo,
          total,
          partFrom,
          partTo,
          isOutsideLocation,
          leader_id,
        );
        setItems([]);
        setItems(dataOutsideLocation?.data);
        setTotalPage(dataOutsideLocation?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Labharthi By Center Govt':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataLabharthiCenter: any = await retrieveLabharthiCenterData(
          pageNo,
          total,
          partFrom,
          partTo,
          selectedLBCenter,
          leader_id,
        );
        setItems([]);
        setItems(dataLabharthiCenter?.data);
        setTotalPage(dataLabharthiCenter?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Labharthi By State Govt':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataLabharthiState: any = await retrieveLabharthiStateData(
          pageNo,
          total,
          partFrom,
          partTo,
          selectedLBState,
          leader_id,
        );
        setItems([]);
        setItems(dataLabharthiState?.data);
        setTotalPage(dataLabharthiState?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Labharthi By Candidate':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataLabharthiCandidate: any =
          await retrieveLabharthiCandidateData(
            pageNo,
            total,
            partFrom,
            partTo,
            selectedLBCandidate,
            leader_id,
          );
        setItems([]);
        setItems(dataLabharthiCandidate?.data);
        setTotalPage(dataLabharthiCandidate?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Approached Qty':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataApproachQty: any = await retrieveApproachQtyData(
          pageNo,
          total,
          partFrom,
          partTo,
          approachQty,
          approachReason,
          leader_id,
        );
        setItems([]);
        setItems(dataApproachQty?.data);
        setTotalPage(dataApproachQty?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Voter Survey':
        //setSnackBarVisible(true)
        setPage(pageNo);
        const dataVoterSurvey: any = await retrieveVoterSurveyData(
          pageNo,
          total,
          partFrom,
          partTo,
          party,
          candidateName,
          leader_id,
        );
        setItems([]);
        setItems(dataVoterSurvey?.data);
        setTotalPage(dataVoterSurvey?.totalData);
        //setSnackBarVisible(false);
        setLoading(false);

      case 'Campaign Abhiyan':
        setLoading(false);

      case 'Social Media':
        setLoading(false);
    }
  };

  const fetchNext = async () => {
    if (Number(page) + 1 <= Number(totalPage)) {
      setLoading(true);
      setPage(Number(page) + 1);
      await listVotersData(Number(page) + 1, 50);
    }
  };

  const fetchPreviuos = async () => {
    if (Number(page) > 1) {
      setLoading(true);
      setPage(Number(page) - 1);
      await listVotersData(Number(page) - 1, 50);
    }
  };

  const [showDropDown, setShowDropDown] = useState(false);
  const DEVICE_HEIGHT = Dimensions.get('window').height;

  /* setting form values */
  const [isFocus, setIsFocus] = useState(false);
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [partFrom, setPartFrom] = useState('');
  const [partTo, setPartTo] = useState('');
  const [ageFrom, setAgeFrom] = useState('');
  const [ageTo, setAgeTo] = useState('');
  const [familySizeFrom, setFamilySizeFrom] = useState('');
  const [familySizeTo, setFamilySizeTo] = useState('');
  const [marriageAge, setMarriageAge] = useState('');
  const [address, setAddress] = useState('');
  const [surname, setSurname] = useState('');
  const [approachQty, setApproachQty] = useState('');
  const [approachReason, setApproachReason] = useState('');
  const [candidateName, setCandidateName] = useState('');
  const [gender, setGender] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [caste, setCaste] = useState('');
  const [labelValue, setLabelValue] = useState('');
  const [labelValueList, setLabelValueList] = useState([]);
  const [area, setArea] = useState('');
  const [areaList, setareaList] = useState([]);
  const [party, setParty] = useState('');
  const [partyList, setPartyList] = useState([]);
  const [dead, setDead] = useState('');
  const [education, setEducation] = useState('');
  const [isHomeShifted, setIsHomeShifted] = useState('');
  const [profession, setProfession] = useState('');
  const [isOutsideLocation, setIsOutsideLocation] = useState('');
  const [lalBhartiCenter, setLalBhartiCenter] = useState([]);
  const [lalBhartiState, setLalBhartiState] = useState([]);
  const [lalBhartiCandidate, setLalBhartiCandidate] = useState([]);
  const [selectedLBCenter, setSelectedLBCenter] = useState('');
  const [selectedLBState, setSelectedLBState] = useState('');
  const [selectedLBCandidate, setSelectedLBCandidate] = useState('');
  const [dateFrom, setDateFrom] = useState(Object);
  const [dateFromOpen, setDateFromOpen] = useState(false);
  const [dateTo, setDateTo] = useState(Object);
  const [dateToOpen, setDateToOpen] = useState(false);

  React.useEffect(() => {
    listVotersData(1, 50);
  }, [
    // partFrom,
    // partTo,
    // name,
    // fatherName,
    // ageFrom,
    // ageTo,
    // familySizeFrom,
    // familySizeTo,
    // address,
    // surname,
    caste,
    labelValue,
    area,
    party,
    dead,
    dateFrom,
    dateTo,
    education,
    isHomeShifted,
    profession,
    isOutsideLocation,
    selectedLBCenter,
    selectedLBState,
    selectedLBCandidate,
    // approachQty,
    // approachReason,
    // candidateName,
  ]);

  React.useEffect(() => {
    setCompaignList(data?.compaign);
    setCompaignIntitialList(data?.compaign);
    setSocialMediaList(data?.social_media);
    setSocialMediaIntitialList(data?.social_media);
  }, []);

  const filterCompaign = () => {
    if (compaignTitle != '') {
      const compaignData = compaignIntitialList.filter((item: any) =>
        item?.title.toLowerCase().includes(compaignTitle.toLowerCase()),
      );
      setCompaignList(compaignData);
    } else {
      setCompaignList(compaignIntitialList);
    }
  };

  const filterSocialMedia = () => {
    if (socialMediaTitle != '') {
      const socialMediaData = socialMediaIntitialList.filter((item: any) =>
        item?.title.toLowerCase().includes(socialMediaTitle.toLowerCase()),
      );
      setSocialMediaList(socialMediaData);
    } else {
      setSocialMediaList(socialMediaIntitialList);
    }
  };

  React.useEffect(() => {
    filterCompaign();
  }, [compaignTitle]);

  React.useEffect(() => {
    filterSocialMedia();
  }, [socialMediaTitle]);

  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  const sortList = [
    {
      label: 'Alphabetical',
      value: 'Alphabetical',
    },
    {
      label: 'Normal',
      value: 'Normal',
    },
  ];

  const casteList = [
    {
      label: 'Hindu',
      value: 'Hindu',
    },
    {
      label: 'Muslim',
      value: 'Muslim',
    },
  ];

  const deadList = [
    {
      label: 'Dead',
      value: '1',
    },
    {
      label: 'Alive',
      value: '0',
    },
  ];

  const educationList = [
    {
      label: 'Uneducated',
      value: '0',
    },
    {
      label: '10th',
      value: '1',
    },
    {
      label: '12th',
      value: '2',
    },
    {
      label: 'Undergraduate',
      value: '3',
    },
    {
      label: 'Graduate',
      value: '4',
    },
    {
      label: 'Post Graduate',
      value: '5',
    },
    {
      label: 'PHD',
      value: '6',
    },
    {
      label: 'Other',
      value: '7',
    },
  ];

  const homeShiftedList = [
    {
      label: 'Yes',
      value: '1',
    },
    {
      label: 'No',
      value: '0',
    },
  ];

  const professionList = [
    {
      label: 'Student',
      value: '0',
    },
    {
      label: 'Unemployed',
      value: '1',
    },
    {
      label: 'Self Employed',
      value: '2',
    },
    {
      label: 'Farmer',
      value: '3',
    },
    {
      label: 'Teacher',
      value: '4',
    },
    {
      label: 'Govt Forces',
      value: '5',
    },
    {
      label: 'Job Pvt Sector',
      value: '6',
    },
    {
      label: 'Job Govt Sector',
      value: '7',
    },
    {
      label: 'Police officer',
      value: '8',
    },
    {
      label: 'Dentist',
      value: '9',
    },
    {
      label: 'Doctor',
      value: '10',
    },
    {
      label: 'Journalist',
      value: '11',
    },
    {
      label: 'CA / Account',
      value: '12',
    },
    {
      label: 'Advocates',
      value: '13',
    },
    {
      label: 'Engineer',
      value: '14',
    },
    {
      label: 'Local Market Business',
      value: '15',
    },
    {
      label: 'Corporate Business',
      value: '16',
    },
    {
      label: 'School Owner',
      value: '17',
    },
    {
      label: 'Hospital Owner',
      value: '18',
    },
    {
      label: 'Multiple Business',
      value: '19',
    },
    {
      label: 'Barber Salon',
      value: '20',
    },
    {
      label: 'Driving Work Business',
      value: '21',
    },
    {
      label: 'GIG WORKER',
      value: '22',
    },
    {
      label: 'Daily Mazdoor',
      value: '23',
    },
    {
      label: 'Local Market Worker',
      value: '24',
    },
    {
      label: 'Other',
      value: '25',
    },
  ];

  const outsideLocationList = [
    {
      label: 'Yes',
      value: '1',
    },
    {
      label: 'No',
      value: '0',
    },
  ];

  /* setting form values */

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  React.useEffect(() => {
    const lBhartiCenter = data?.labharthi_scheme.filter((dt: any) =>
      dt?.scheme_type.includes('0'),
    );
    setLalBhartiCenter(lBhartiCenter ? formatLBDropdown(lBhartiCenter) : []);
    const lBhartiState = data?.labharthi_scheme.filter((dt: any) =>
      dt?.scheme_type.includes('1'),
    );
    setLalBhartiState(lBhartiState ? formatLBDropdown(lBhartiState) : []);
    const lBhartiCandidate = data?.labharthi_scheme.filter((dt: any) =>
      dt?.scheme_type.includes('2'),
    );
    setLalBhartiCandidate(
      lBhartiCandidate ? formatLBDropdown(lBhartiCandidate) : [],
    );
    setPartyList(
      data?.political_party
        ? formatPoliticalDropdown(data?.political_party)
        : [],
    );
    setareaList(data?.area ? formatAreaListDropdown(data?.area) : []);
    setLabelValueList(
      data?.label_value ? formatLabelValueListDropdown(data?.label_value) : [],
    );
  }, []);

  const formatLBDropdown = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.scheme_name}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatPoliticalDropdown = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.name}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatAreaListDropdown = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.AC_NAME_EN}`,
      value: `${o.AC_NAME_EN}`,
    }));
    return result;
  };

  const formatLabelValueListDropdown = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.label}-${o.value}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const CustomModal = () => {
    return getModalData();
  };

  const getModalData = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Search List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Mobile No.
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Address
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Agewise List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Agewise List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <View style={{height: 400}}>
                  <ScrollView>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Gender
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={genderList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={gender}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={(item: any) => {
                          setGender(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Sort
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={sortList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={sortBy}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={(item: any) => {
                          setSortBy(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </ScrollView>
                </View>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Family Report':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Family Report
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Family Head Report':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Family Head Report
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Age From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Age To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Married Woman Report':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Married Woman Report
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Sort
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={sortList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={sortBy}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={(item: any) => {
                          setSortBy(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Single Voter List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Single Voter List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Gender
                      </Text>
                      <Dropdown
                        style={[styles.dropdown, {marginTop: 5}]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{color: '#000000'}}
                        data={genderList}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={sortBy}
                        // onFocus={() => setIsFocus(true)}
                        // onBlur={() => setIsFocus(false)}
                        onChange={(item: any) => {
                          setGender(item.value);
                          setIsFocus(false);
                        }}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Address Wise List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Address Wise List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Surname Report':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Surname Report
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Family Labels':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Family Labels
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'SMS':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      SMS Panel
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Relative
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Caste Wise List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Caste Wise List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Label Value Filter':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Label Value Filter
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Area Wise List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Area Wise List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Party Wise List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Party Wise List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Dead List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Dead List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      case 'Birthday List':
        return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <View style={{flex: 4}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: '#4e4f4f',
                      }}>
                      Birthday List
                    </Text>
                  </View>
                  <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Icon name="close" color={'#000000'} size={16} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    borderBottomColor: '#DEDEDE',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                />
                <ScrollView>
                  <View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part From
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: '400',
                          color: '#4e4f4f',
                        }}>
                        Part To
                      </Text>
                      <TextInput
                        style={styles.inputInner}
                        placeholderTextColor={'#000'}
                      />
                    </View>
                  </View>
                </ScrollView>
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        width: 100,
                        height: 55,
                        backgroundColor: '#de8100',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 9,
                      }}>
                      <Text style={{color: '#FFF', fontSize: 16}}>Search</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        );
      default:
        return false;
    }
  };

  const getTopSearchUI = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Agewise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Family Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Family Head Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Single Voter List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Address Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Surname Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Family Labels':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'SMS':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Area Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Party Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Dead List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Birthday List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Education Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Shifted Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'New Voter List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Profession Wise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Outside Location List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Labharthi By Center Govt':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Labharthi By State Govt':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Labharthi By Candidate':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Approached Qty':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Campaign Abhiyan':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Search by Title"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setCompaignTitle(value);
                }}
              />
            </View>
          </>
        );
      case 'Social Media':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Search by Title"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setSocialMediaTitle(value);
                }}
              />
            </View>
          </>
        );
      case 'Voter Survey':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      case 'Religion':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
                keyboardType="numeric"
              />
            </View>
          </>
        );
      default:
        return false;
    }
  };
  const getSearchUI = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Name/ Epic Id"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setName(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Father"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setFatherName(value);
                }}
              />
            </View>
          </>
        );
      case 'Alphabetical List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.input}
                placeholderTextColor={'gray'}
                keyboardType="numeric"
                onChangeText={value => {
                  setPartFrom(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.input}
                placeholderTextColor={'gray'}
                keyboardType="numeric"
                onChangeText={value => {
                  setPartTo(value);
                }}
              />
            </View>
          </>
        );
      case 'Agewise List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Age From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setAgeFrom(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Age To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setAgeTo(value);
                }}
              />
            </View>
          </>
        );
      case 'Family Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Family Size From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setFamilySizeFrom(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Family Size To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setFamilySizeTo(value);
                }}
              />
            </View>
          </>
        );
      case 'Family Head Report':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Age From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setAgeFrom(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Age To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setAgeTo(value);
                }}
              />
            </View>
          </>
        );
      case 'Double Name List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part From"
                style={styles.input}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartFrom(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Part To"
                style={styles.input}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setPartTo(value);
                }}
              />
            </View>
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Considering marriage age"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setMarriageAge(value);
                }}
              />
            </View>
          </>
        );
      case 'Single Voter List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Age From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setAgeFrom(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Age To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setAgeTo(value);
                }}
              />
            </View>
          </>
        );
      case 'Address Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Search Address"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setAddress(value);
                }}
              />
            </View>
          </>
        );
      case 'Surname Report':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Search Surname"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setSurname(value);
                }}
              />
            </View>
          </>
        );
      case 'Family Labels':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Family Size From"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setFamilySizeFrom(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Family Size To"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setFamilySizeTo(value);
                }}
              />
            </View>
          </>
        );
      case 'SMS':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Search Name"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setName(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Sarch Surname"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setSurname(value);
                }}
              />
            </View>
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={casteList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Caste' : '...'}
                searchPlaceholder="Search..."
                value={caste}
                onChange={(item: any) => {
                  setCaste(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={labelValueList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Label Value' : '...'}
                searchPlaceholder="Search..."
                value={labelValue}
                onChange={(item: any) => {
                  setLabelValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Area Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={areaList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Area' : '...'}
                searchPlaceholder="Search..."
                value={area}
                onChange={(item: any) => {
                  setArea(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Party Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={partyList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Party' : '...'}
                searchPlaceholder="Search..."
                value={party}
                onChange={(item: any) => {
                  setParty(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Dead List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={deadList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Dead/Alive' : '...'}
                searchPlaceholder="Search..."
                value={dead}
                onChange={(item: any) => {
                  setDead(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Birthday List':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TouchableOpacity onPress={() => setDateFromOpen(true)}>
                <TextInput
                  placeholder="Date From"
                  style={styles.searchInput}
                  placeholderTextColor={'gray'}
                  editable={false}
                  value={
                    dateFrom instanceof Date
                      ? moment(dateFrom).format('DD/MM/YYYY')
                      : ''
                  }
                />
              </TouchableOpacity>
              <DatePicker
                modal
                mode={'date'}
                open={dateFromOpen}
                date={new Date()}
                style={{zIndex: 9999}}
                onConfirm={date => {
                  setDateFromOpen(false);
                  setDateFrom(date);
                }}
                onCancel={() => {
                  setDateFromOpen(false);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TouchableOpacity onPress={() => setDateToOpen(true)}>
                <TextInput
                  placeholder="Date To"
                  style={styles.searchInput}
                  placeholderTextColor={'gray'}
                  editable={false}
                  value={
                    dateTo instanceof Date
                      ? moment(dateTo).format('DD/MM/YYYY')
                      : ''
                  }
                />
              </TouchableOpacity>
              <DatePicker
                modal
                mode={'date'}
                open={dateToOpen}
                date={new Date()}
                style={{zIndex: 9999}}
                onConfirm={date => {
                  setDateToOpen(false);
                  setDateTo(date);
                }}
                onCancel={() => {
                  setDateToOpen(false);
                }}
              />
            </View>
          </>
        );
      case 'Education Report':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={educationList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Education' : '...'}
                searchPlaceholder="Search..."
                value={dead}
                onChange={(item: any) => {
                  setEducation(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Shifted Report':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={homeShiftedList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Home Shifted' : '...'}
                searchPlaceholder="Search..."
                value={dead}
                onChange={(item: any) => {
                  setIsHomeShifted(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Profession Wise List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={professionList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Profession' : '...'}
                searchPlaceholder="Search..."
                value={dead}
                onChange={(item: any) => {
                  setProfession(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Outside Location List':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={outsideLocationList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Outside Location' : '...'}
                searchPlaceholder="Search..."
                value={dead}
                onChange={(item: any) => {
                  setIsOutsideLocation(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Labharthi By Center Govt':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={lalBhartiCenter}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Scheme(center)' : '...'}
                searchPlaceholder="Search..."
                value={selectedLBCenter}
                onChange={(item: any) => {
                  setSelectedLBCenter(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Labharthi By State Govt':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={lalBhartiState}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Scheme(state)' : '...'}
                searchPlaceholder="Search..."
                value={selectedLBState}
                onChange={(item: any) => {
                  setSelectedLBState(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Labharthi By Candidate':
        return (
          <>
            <View style={{flex: 3, width: '90%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={lalBhartiCandidate}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Scheme(candidate)' : '...'}
                searchPlaceholder="Search..."
                value={selectedLBCandidate}
                onChange={(item: any) => {
                  setSelectedLBCandidate(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Approached Qty':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Approach Qty"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                keyboardType="numeric"
                onChangeText={value => {
                  setApproachQty(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Approach Reason"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setApproachReason(value);
                }}
              />
            </View>
          </>
        );
      case 'Voter Survey':
        return (
          <>
            <View style={{flex: 1, width: '90%'}}>
              <TextInput
                onSubmitEditing = {() => listVotersData(1,50)}
                placeholder="Candidate Name"
                style={styles.searchInput}
                placeholderTextColor={'gray'}
                onChangeText={value => {
                  setCandidateName(value);
                }}
              />
            </View>
            <View style={{flex: 1, width: '90%', marginLeft: '3%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={partyList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Political Party' : '...'}
                searchPlaceholder="Search..."
                value={party}
                onChange={(item: any) => {
                  setParty(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );
      case 'Religion':
        return (
          <>
            <View style={{flex: 1, width: '100%'}}>
              <Dropdown
                style={[styles.topSearchDropdown, {marginTop: 8}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                itemTextStyle={{color: '#000000'}}
                data={deadList}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Dead/Alive' : '...'}
                searchPlaceholder="Search..."
                value={dead}
                onChange={(item: any) => {
                  setDead(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </>
        );

      default:
        return false;
    }
  };

  const getEducation = (education: any) => {
    switch (education) {
      case '0':
        return 'Uneducated';
      case '1':
        return '10th';
      case '2':
        return '12th';
      case '3':
        return 'Undergraduate';
      case '4':
        return 'Graduate';
      case '5':
        return 'Post Graduate';
      case '6':
        return 'PHD';
      case '7':
        return 'Other';
      default:
        return 'N/A';
    }
  };

  const getProfession = (profession: any) => {
    switch (profession) {
      case '0':
        return 'Student';
        break;
      case '1':
        return 'Unemployed';
        break;
      case '2':
        return 'Self Employed';
        break;
      case '3':
        return 'Farmer';
        break;
      case '4':
        return 'Teacher';
        break;
      case '5':
        return 'Govt Forces';
        break;
      case '6':
        return 'Job Pvt Sector';
        break;
      case '7':
        return 'Job Govt Sector';
        break;
      case '8':
        return 'Police officer';
        break;
      case '9':
        return 'Dentist';
        break;
      case '10':
        return 'Doctor';
        break;
      case '11':
        return 'Journalist';
        break;
      case '12':
        return 'CA / Account';
        break;
      case '13':
        return 'Advocates';
        break;
      case '14':
        return 'Engineer';
        break;
      case '15':
        return 'Local Market Business';
        break;
      case '16':
        return 'Corporate Business';
        break;
      case '17':
        return 'School Owner';
        break;
      case '18':
        return 'Hospital Owner';
        break;
      case '19':
        return 'Multiple Business';
        break;
      case '20':
        return 'Barber Salon';
        break;
      case '21':
        return 'Driving Work Business';
        break;
      case '22':
        return 'GIG WORKER';
        break;
      case '23':
        return 'Daily Mazdoor';
        break;
      case '24':
        return 'Local Market Worker';
        break;
      case '25':
        return 'Other';
      default:
        return 'N/A';
    }
  };

  const getParty = (partyId: any) => {
    const partyData = partyList.filter((item: any) =>
      item?.value.includes(partyId),
    );
    return partyData.length > 0 && partyData[0]['label'];
  };

  const getDataTable = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items &&
                items.map((item: any) => (
                  <DataTable.Row key={item?.id}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={{color: '#000000'}}>
                          {item?.SLNOINPART}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate('ViewVoterScreen', {
                              routeFrom: 'Part A',
                              filterName: 'Search List',
                              item:item
                            });
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              flexWrap: 'wrap',
                              fontWeight: '600',
                              color: '#000000',
                            }}>
                            {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                          </Text>
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000',
                          }}>
                          {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.EPIC_NO}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 60}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.GENDER}-{item?.AGE}y
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.SECTION_NAME_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </DataTable>
          </>
        );
      case 'Alphabetical List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Agewise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Family Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={+item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        H/No. - {item?.C_HOUSE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Family Head Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={+item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Double Name List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Single Voter List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        H/No. - {item?.C_HOUSE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Address Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        H/No. - {item?.C_HOUSE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.PSBUILDING_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Surname Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Surname</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '600',
                        }}>
                        {item?.LASTNAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.Total}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Family Labels':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 150}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 130}}>
                  <Text style={{fontWeight: '600'}}>House No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 150}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 100}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 130}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.C_HOUSE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'SMS':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Phone Number</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.MOBILE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items &&
                items.map((item: any) => (
                  <DataTable.Row key={+item?.id}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={{color: '#000000'}}>
                          {item?.SLNOINPART}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000',
                          }}>
                          {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.EPIC_NO}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 60}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.GENDER}-{item?.AGE}y
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.SECTION_NAME_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </DataTable>
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items &&
                items.map((item: any) => (
                  <DataTable.Row key={+item?.id}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={{color: '#000000'}}>
                          {item?.SLNOINPART}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000',
                          }}>
                          {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.EPIC_NO}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 60}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.GENDER}-{item?.AGE}y
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.SECTION_NAME_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </DataTable>
          </>
        );
      case 'Area Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items &&
                items.map((item: any) => (
                  <DataTable.Row key={+item?.id}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={{color: '#000000'}}>
                          {item?.SLNOINPART}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000',
                          }}>
                          {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.EPIC_NO}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 60}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.GENDER}-{item?.AGE}y
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.SECTION_NAME_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </DataTable>
          </>
        );
      case 'Party Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items &&
                items.map((item: any) => (
                  <DataTable.Row key={+item?.id}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={{color: '#000000'}}>
                          {item?.SLNOINPART}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000',
                          }}>
                          {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.EPIC_NO}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 60}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.GENDER}-{item?.AGE}y
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.SECTION_NAME_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </DataTable>
          </>
        );
      case 'Dead List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 60}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.GENDER}-{item?.AGE}y
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Birthday List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>DOB</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>

                  <DataTable.Cell style={{width: 100}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.DOB}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 300}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Education Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Edu Q</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>
                        {item?.education == '7'
                          ? item?.other_education
                          : getEducation(item?.education)}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Shifted Report':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Adress</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Home Shifted</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.isHomeShifted == '1'
                          ? item?.shiftedAddress
                          : item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.isHomeShifted == '0'
                          ? 'No'
                          : item?.isHomeShifted == '1'
                          ? 'Yes'
                          : 'No'}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'New Voter List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Age</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 300}}>
                  <Text style={{fontWeight: '600'}}>Address</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items &&
                items?.map((item: any) => (
                  <DataTable.Row key={item?.id}>
                    <DataTable.Cell style={{width: 60}}>
                      <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{alignSelf: 'center'}}>
                        <Text style={{color: '#000000'}}>
                          {item?.SLNOINPART}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 140}}>
                      <View style={{width: '100%'}}>
                      <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '400',
                            color: '#000000',
                          }}>
                          {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 80}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.EPIC_NO}
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 60}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.GENDER}-{item?.AGE}y
                        </Text>
                      </View>
                    </DataTable.Cell>
                    <DataTable.Cell style={{width: 300}}>
                      <View style={{width: '100%'}}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            color: '#000000',
                          }}>
                          {item?.SECTION_NAME_EN}
                        </Text>
                      </View>
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
            </DataTable>
          </>
        );
      case 'Profession Wise List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Id</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Profession</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.EPIC_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>
                        {item?.profession == '25'
                          ? item?.other_profession
                          : getProfession(item?.profession)}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Outside Location List':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Adress</Text>
                </DataTable.Title>

                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Staying Outside</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.isStayingOutside == '1'
                          ? item?.stayingAddress
                          : item?.SECTION_NAME_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.isStayingOutside == '0'
                          ? 'No'
                          : item?.isStayingOutside == '1'
                          ? 'Yes'
                          : 'No'}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Labharthi By Center Govt':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 120}}>
                  <Text style={{fontWeight: '600'}}>Phone No</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 120}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.MOBILE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Labharthi By State Govt':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 120}}>
                  <Text style={{fontWeight: '600'}}>Phone No</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 120}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.MOBILE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Labharthi By Candidate':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 120}}>
                  <Text style={{fontWeight: '600'}}>Phone No</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 120}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.MOBILE_NO}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Approached Qty':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Voter Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 120}}>
                  <Text style={{fontWeight: '600'}}>Approached Qty</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 160}}>
                  <Text style={{fontWeight: '600'}}>Approached Reason</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.SLNOINPART}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 120}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.approach_time == 'null'
                          ? 0
                          : item?.approach_time}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 160}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.approach_reason == 'null'
                          ? 'N/A'
                          : item?.approach_reason}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Campaign Abhiyan':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 160}}>
                  <Text style={{fontWeight: '600'}}>Campaign Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 180}}>
                  <Text style={{fontWeight: '600'}}>Description</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 100}}>
                  <Text style={{fontWeight: '600'}}>Created On</Text>
                </DataTable.Title>
              </DataTable.Header>

              {compaignList?.map((item: any, i: number) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{i + 1}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 160}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.title}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 180}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>
                        {item?.description}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 100}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.created_at}</Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Social Media':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Sl No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 160}}>
                  <Text style={{fontWeight: '600'}}>Title</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 160}}>
                  <Text style={{fontWeight: '600'}}>Image</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 110}}>
                  <Text style={{fontWeight: '600'}}>Description</Text>
                </DataTable.Title>
              </DataTable.Header>

              {socialMediaList?.map((item: any, i: number) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{i + 1}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 160}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>{item?.title}</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 160}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>Test</Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 110}}>
                    <View style={{alignSelf: 'center'}}>
                      <Text style={{color: '#000000'}}>
                        {item?.description}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Voter Survey':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Voter Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 160}}>
                  <Text style={{fontWeight: '600'}}>Party Like</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 160}}>
                  <Text style={{fontWeight: '600'}}>Candidate Like</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <View style={{width: '100%'}}>
                    <TouchableOpacity
                         onPress={() => {
                          navigation.navigate('ViewVoterScreen', {
                            routeFrom: 'Part A',
                            filterName: 'Search List',
                            item:item
                          });
                        }}>
                        <Text
                          style={{
                            fontSize: 12,
                            flexWrap: 'wrap',
                            fontWeight: '600',
                            color: '#000000',
                          }}>
                          {item?.FM_NAME_EN} {item?.LASTNAME_EN}
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          fontWeight: '400',
                          color: '#000000',
                        }}>
                        {item?.RLN_FM_NM_EN} {item?.RLN_L_NM_EN}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 160}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.political_party == 'null'
                          ? 'N/A'
                          : getParty(item?.political_party)}
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 160}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        {item?.candidate_name == 'null'
                          ? 'N/A'
                          : item?.candidate_name}
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      case 'Religion':
        return (
          <>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{width: 60}}>
                  <Text style={{fontWeight: '600'}}>Part No.</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 140}}>
                  <Text style={{fontWeight: '600'}}>Religion Name</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Total</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Male</Text>
                </DataTable.Title>
                <DataTable.Title style={{width: 80}}>
                  <Text style={{fontWeight: '600'}}>Female</Text>
                </DataTable.Title>
              </DataTable.Header>

              {items?.map((item: any) => (
                <DataTable.Row key={item?.id}>
                  <DataTable.Cell style={{width: 60}}>
                    <Text style={{color: '#000000'}}>{item?.PART_NO}</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 140}}>
                    <Text style={{color: '#000000'}}>Hindu</Text>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        100
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        50
                      </Text>
                    </View>
                  </DataTable.Cell>
                  <DataTable.Cell style={{width: 80}}>
                    <View style={{width: '100%'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          flexWrap: 'wrap',
                          color: '#000000',
                        }}>
                        50
                      </Text>
                    </View>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </>
        );
      default:
        return false;
    }
  };

  const getSearchBtn = () => {
    switch (route?.params?.filterName) {
      case 'Search':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Agewise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Family Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Family Head Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Married Woman Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Single Voter List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Address Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Surname Report':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Family Labels':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'SMS':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Caste Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Label Value Filter':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Area Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Party Wise List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Dead List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      case 'Birthday List':
        return (
          <>
            {/* <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <View style={styles.filterBtn}>
                  <Icon name="filter" color={'#FFFFFF'} size={22} />
                </View>
              </TouchableOpacity>
            </View> */}
          </>
        );
      default:
        return false;
    }
  };

  return (
    <>
      <Loader text="Loading data..." loading={loading} />
      <View style={{flex: 1}}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <View style={{backgroundColor: '#288BC6'}}>
            <View
              style={{
                flexDirection: 'row',
                display: 'flex',
                marginLeft: 15,
                marginRight: 15,
                marginTop: '20%',
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontWeight: '600',
                    marginTop: 10,
                  }}>
                  {route?.params?.filterName}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 15,
                marginRight: 15,
                marginBottom: '5%',
              }}>
              <Animated.View entering={FadeInDown.duration(1000).springify()}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  {getTopSearchUI()}
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  {getSearchUI()}
                  {getSearchBtn()}
                </View>
              </Animated.View>
            </View>
          </View>
        </View>
        {!loading && (
        <>
          <View style={{flex: 9}}>
            <View style={styles.card}>
              <ScrollView>
                <ScrollView horizontal={true}>{getDataTable()}</ScrollView>
              </ScrollView>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                marginTop: 15,
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View style={{flex: 2}}>
                <TouchableOpacity  onPress={() => fetchPreviuos()} style={{alignItems: 'flex-end'}}>
                  <Text style={{color: '#7a7a7a'}}> {'< Previous'} </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{alignItems: 'center', color: '#7a7a7a'}}>
                  {' '}
                  {'|'}{' '}
                </Text>
              </View>
              <View style={{flex: 2}}>
                <TouchableOpacity onPress={() => fetchNext()}>
                  <Text style={{color: '#7a7a7a'}}> {'Next >'} </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  parent: {
    flex: 1,
  },
  child: {
    backgroundColor: '#288BC6',
  },
  input: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
    backgroundColor: '#FFFFFF',
    color: '#121F26',
  },
  searchInput: {
    borderRadius: 4,
    height: 30,
    marginTop: 7,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#FFFFFF',
    color: '#121F26',
  },
  inputInner: {
    borderRadius: 9,
    height: 50,
    marginTop: 7,
    padding: 16,
    backgroundColor: '#ebe9e8',
    color: '#000',
    borderColor: '#dedede',
  },
  infoText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
  },
  desgText: {
    color: '#adadad',
    fontSize: 12,
    fontWeight: '400',
    paddingLeft: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginLeft: 15,
    marginRight: 15,
    // position: 'absolute',
    top: 5,
  },
  part: {
    width: '100%',
    backgroundColor: '#f5b902',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  voterId: {
    width: '100%',
    backgroundColor: '#ed9a5a',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  btn: {
    borderRadius: 9,
    height: 55,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#288BC6',
    width: 340,
  },
  btnText: {color: '#FFFFFF', textAlign: 'center', fontSize: 18},
  filterBtn: {
    width: '90%',
    backgroundColor: '#de8100',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
    marginLeft: '10%',
    borderRadius: 9,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    // marginTop: 52,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 10,
    // marginTop: 52,
    backgroundColor: '#FFFFFF',
    marginBottom: '12%',
    borderRadius: 5,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#000000',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000000',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  searchDropdown: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  topSearchDropdown: {
    height: 35,
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 6,
    paddingHorizontal: 8,
  },
});

export default VoterFilterScreen;
