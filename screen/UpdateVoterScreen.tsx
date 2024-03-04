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
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import Card from '../components/Card';
import Badge from '../components/Badge';
import HyperLink from '../components/HyperLink';
import Icon from 'react-native-vector-icons/FontAwesome';
import FlatListItem from '../components/FlatListItem';
import {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {launchCamera} from 'react-native-image-picker';
import {
  retrieveACNo,
  retrievePARTNo,
  retrieveSECTIONNo,
  retrieveSLNOINPART,
  retrieveUserSession,
  saveVoterData,
} from '../utils';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';
import {postRequest} from '../networkInterface';
import Snackbar from 'react-native-snackbar';

const UpdateVoterScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const voterData = route?.params?.item;
  const [loading, setLoading] = React.useState(false);
  const [loadingText, setLoadingText] = React.useState('');
  const {data} = useSelector((state: any) => state?.MasterData);
  const [isFocus, setIsFocus] = useState(false);
  const [userData, setUserData] = React.useState<any>(null);
  const [relation, setRelation] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState({});
  const [dobEdit, setDobEdit] = useState('');
  const [dobOpen, setDobOpen] = useState(false);
  const [caste, setCaste] = useState('');
  const [married, setMarried] = useState('');
  const [dead, setDead] = useState('');
  const [acNoList, setACNoList] = useState([]);
  const [acNo, setAcNo] = useState('');
  const [partNoList, setPartNoList] = useState([]);
  const [partNo, setPartNo] = useState('');
  const [sectionNoList, setSectionNoList] = useState([]);
  const [sectionNo, setSectionNo] = useState('');
  const [slNoList, setSlNoList] = useState([]);
  const [slNo, setSlNo] = useState('');
  const [labelValueList, setLabelValueList] = useState([]);
  const [labelValue, setLabelValue] = useState('');
  const [partyList, setPartyList] = useState([]);
  const [party, setParty] = useState('');
  const [education, setEducation] = useState('');
  const [profession, setProfession] = useState('');
  const [isHomeShifted, setIsHomeShifted] = useState('');
  const [isHomeShiftedConstituency, setIsHomeShiftedConstituency] =
    useState('');
  const [homeShiftedCountryList, setHomeShiftedCountryList] = useState([]);
  const [homeShiftedCountry, setHomeShiftedCountry] = useState('');
  const [homeShiftedStateList, setHomeShiftedStateList] = useState([]);
  const [homeShiftedState, setHomeShiftedState] = useState('');
  const [homeShiftedCityList, setHomeShiftedCityList] = useState([]);
  const [homeShiftedCity, setHomeShiftedCity] = useState('');
  const [homeShiftedAddressList, setHomeShiftedAddressList] = useState([]);
  const [homeShiftedAddress, setHomeShiftedAddress] = useState('');
  const [homeShiftedConstituencyAddress, setHomeShiftedConstituencyAddress] =
    useState('');

  const [isOutsideLocation, setIsOutsideLocation] = useState('');
  const [isOutsideLocationConstituency, setIsOutsideLocationConstituency] =
    useState('');
  const [outsideLocationCountryList, setOutsideLocationCountryList] = useState(
    [],
  );
  const [outsideLocationCountry, setOutsideLocationCountry] = useState('');
  const [outsideLocationStateList, setOutsideLocationStateList] = useState([]);
  const [outsideLocationState, setOutsideLocationState] = useState('');
  const [outsideLocationCityList, setOutsideLocationCityList] = useState([]);
  const [outsideLocationCity, setOutsideLocationCity] = useState('');
  const [outsideLocationAddressList, setOutsideLocationAddressList] = useState(
    [],
  );
  const [outsideLocationAddress, setOutsideLocationAddress] = useState('');
  const [
    outsideLocationConstituencyAddress,
    setOutsideLocationConstituencyAddress,
  ] = useState('');
  const [lalBhartiCenter, setLalBhartiCenter] = useState([]);
  const [lalBhartiState, setLalBhartiState] = useState([]);
  const [lalBhartiCandidate, setLalBhartiCandidate] = useState([]);
  const [selectedLBCenter, setSelectedLBCenter] = useState('');
  const [selectedLBState, setSelectedLBState] = useState('');
  const [selectedLBCandidate, setSelectedLBCandidate] = useState('');

  const [CH_HOUSE_NO, setCH_HOUSE_NO] = useState('');
  const [CH_HOUSE_NO_V1, setCH_HOUSE_NO_V1] = useState('');
  const [FM_NAME_EN, setFM_NAME_EN] = useState('');
  const [LASTNAME_EN, setLASTNAME_EN] = useState('');
  const [FM_NAME_V1, setFM_NAME_V1] = useState('');
  const [LASTNAME_V1, setLASTNAME_V1] = useState('');
  const [RLN_FM_NAME_EN, setRLN_FM_NAME_EN] = useState('');
  const [RLN_LASTNAME, setRLN_LASTNAME] = useState('');
  const [RLN_FM_NAME_V1, setRLN_FM_NAME_V1] = useState('');
  const [RLN_LASTNAME_V1, setRLN_LASTNAME_V1] = useState('');
  const [EPIC_NO, setEPIC_NO] = useState('');
  const [AGE, setAGE] = useState('');
  const [MOBILE_NO, setMOBILE_NO] = useState('');
  const [AC_NAME_EN, setAC_NAME_EN] = useState('');
  const [AC_NAME_V1, setAC_NAME_V1] = useState('');
  const [SECTION_NAME_EN, setSECTION_NAME_EN] = useState('');
  const [SECTION_NAME_V1, setSECTION_NAME_V1] = useState('');
  const [PS_BUILDING_NAME_EN, setPS_BUILDING_NAME_EN] = useState('');
  const [PS_BUILDING_NAME_V1, setPS_BUILDING_NAME_V1] = useState('');
  const [PART_NAME_EN, setPART_NAME_EN] = useState('');
  const [PART_NAME_V1, setPART_NAME_V1] = useState('');
  const [AADHAR_NO, setAADHAR_NO] = useState('');
  const [RELATIVE_PART_NO, setRELATIVE_PART_NO] = useState('');
  const [RELATION_SLNOINPART, setRELATION_SLNOINPART] = useState('');
  const [OTHER_EDUCATION, setOTHER_EDUCATION] = useState('');
  const [OTHER_PROFESSION, setOTHER_PROFESSION] = useState('');
  const [approachQty, setApproachQty] = useState('');
  const [approachReason, setApproachReason] = useState('');
  const [candidateLike, setCandidateLike] = useState('');
  const [userImage, setUserImage] = React.useState('');

  // const [AGE, setAGE] = useState('');

  React.useEffect(() => {
    getUserSession();
    setLabelValueList(formatLabelValue(data?.voters_label));
    setPartyList(formatPartyList(data?.political_party));
    setHomeShiftedCountryList(formatCountry(data?.country));
    setHomeShiftedAddressList(formatAddress());
    voterData?.shifted_country != 'null' &&
      setHomeShiftedStateList(formatState(voterData?.shifted_country));
    voterData?.shifted_state != 'null' &&
      setHomeShiftedCityList(formatCity(voterData?.shifted_state));

    setOutsideLocationCountryList(formatCountry(data?.country));
    setOutsideLocationAddressList(formatAddress());
    voterData?.staying_country != 'null' &&
      setOutsideLocationStateList(formatState(voterData?.staying_country));
    voterData?.staying_state != 'null' &&
      setOutsideLocationCityList(formatCity(voterData?.staying_state));

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
  }, [navigation]);

  React.useEffect(() => {
    (async () => {
      let PART_LIST: any = await formatSetPARTNo(voterData?.AC_NO);
      let SECTION_LIST: any = await formatSetSECTIONNo(
        voterData?.PART_NO,
        voterData?.AC_NO,
      );
      let SL_NO_LIST: any = await formatSetSlNoPart(
        voterData?.PART_NO,
        voterData?.AC_NO,
        voterData?.SECTION_NO,
      );
      setPartNoList(PART_LIST);
      setPartNo(voterData?.PART_NO);
      setSectionNoList(SECTION_LIST);
      setSectionNo(voterData?.SECTION_NO);
      setSlNoList(SL_NO_LIST);
      setSlNo(voterData?.SLNOINPART);
    })();
  }, []);

  const formatLBDropdown = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.scheme_name}`,
      value: `${o.id}`,
    }));
    return result;
  };

  async function getUserSession() {
    try {
      const session: any = await retrieveUserSession();
      if (session !== undefined) {
        await setUserData(session);
        await formatACNo(session);
        await setFormaData();
      }
    } catch (error) {
      // There was an error on the native side
    }
  }

  const setFormaData = async () => {
    setAcNo(voterData?.AC_NO);
    setCH_HOUSE_NO(voterData?.C_HOUSE_NO);
    setCH_HOUSE_NO_V1(voterData?.C_HOUSE_NO_V1);
    setFM_NAME_EN(voterData?.FM_NAME_EN);
    setLASTNAME_EN(voterData?.LASTNAME_EN);
    setFM_NAME_V1(voterData?.FM_NAME_V1);
    setLASTNAME_V1(voterData?.LASTNAME_V1);
    setRelation(voterData?.RLN_TYPE);
    setRLN_FM_NAME_EN(voterData?.RLN_FM_NM_EN);
    setRLN_LASTNAME(voterData?.RLN_L_NM_EN);
    setRLN_FM_NAME_V1(voterData?.RLN_FM_NM_V1);
    setRLN_LASTNAME_V1(voterData?.RLN_L_NM_V1);
    setEPIC_NO(voterData?.EPIC_NO);
    setGender(voterData?.GENDER);
    setAGE(voterData?.AGE);
    setDobEdit(
      voterData?.DOB ? moment(voterData?.DOB).format('DD/MM/YYYY') : '',
    );
    setMOBILE_NO(voterData?.MOBILE_NO);
    setAC_NAME_EN(voterData?.AC_NAME_EN);
    setAC_NAME_V1(voterData?.AC_NAME_V1);
    setSECTION_NAME_EN(voterData?.SECTION_NAME_EN);
    setSECTION_NAME_V1(voterData?.SECTION_NAME_V1);
    setPS_BUILDING_NAME_EN(voterData?.PSBUILDING_NAME_EN);
    setPS_BUILDING_NAME_V1(voterData?.PSBUILDING_NAME_V1);
    setPART_NAME_EN(voterData?.PART_NAME_EN);
    setPART_NAME_V1(voterData?.PART_NAME_V1);
    setAADHAR_NO(voterData?.aadhar);
    setRELATIVE_PART_NO(voterData?.RELATION_PART_NO);
    setRELATION_SLNOINPART(
      voterData?.RELATION_SLNOINPART != 'null'
        ? voterData?.RELATION_SLNOINPART
        : '',
    );
    setCaste(voterData?.caste != 'null' ? voterData?.caste : '');
    setMarried(voterData?.isMarried != 'null' ? voterData?.isMarried : '');
    setLabelValue(
      voterData?.voter_label != 'null' ? voterData?.voter_label : '',
    );
    setParty(
      voterData?.political_party != 'null' ? voterData?.political_party : '',
    );
    setDead(voterData?.isDead != 'null' ? voterData?.isDead : '');
    setEducation(voterData?.education != 'null' ? voterData?.education : '');
    setProfession(voterData?.profession != 'null' ? voterData?.profession : '');

    setIsHomeShifted(
      voterData?.isHomeShifted != 'null' ? voterData?.isHomeShifted : '',
    );
    setIsHomeShiftedConstituency(
      voterData?.isHomeShiftedWithin != 'null'
        ? voterData?.isHomeShiftedWithin
        : '',
    );
    setHomeShiftedCountry(
      voterData?.shifted_country != 'null' ? voterData?.shifted_country : '',
    );
    setHomeShiftedState(
      voterData?.shifted_state != 'null' ? voterData?.shifted_state : '',
    );
    setHomeShiftedCity(
      voterData?.shifted_city != 'null' ? voterData?.shifted_city : '',
    );
    setHomeShiftedAddress(
      voterData?.shifted_address != 'null' ? voterData?.shifted_address : '',
    );
    setHomeShiftedConstituencyAddress(
      voterData?.shiftedAddress != 'null' ? voterData?.shiftedAddress : '',
    );

    setIsOutsideLocation(
      voterData?.isStayingOutside != 'null' ? voterData?.isStayingOutside : '',
    );
    setIsOutsideLocationConstituency(
      voterData?.isStayingOutsideWithin != 'null'
        ? voterData?.isStayingOutsideWithin
        : '',
    );
    setOutsideLocationCountry(
      voterData?.staying_country != 'null' ? voterData?.staying_country : '',
    );
    setOutsideLocationState(
      voterData?.staying_state != 'null' ? voterData?.staying_state : '',
    );
    setOutsideLocationCity(
      voterData?.staying_city != 'null' ? voterData?.staying_city : '',
    );
    setOutsideLocationAddress(
      voterData?.staying_address != 'null' ? voterData?.staying_address : '',
    );
    setOutsideLocationConstituencyAddress(
      voterData?.stayingAddress != 'null' ? voterData?.stayingAddress : '',
    );
    setApproachQty(
      voterData?.approach_time != 'null' ? voterData?.approach_time : '',
    );
    setApproachReason(
      voterData?.approach_reason != 'null' ? voterData?.approach_reason : '',
    );
    setCandidateLike(
      voterData?.candidate_name != 'null' ? voterData?.candidate_name : '',
    );
    setSelectedLBCenter(voterData?.labharthi_center != 'null' ? voterData?.labharthi_center : '')
    setSelectedLBState(voterData?.labharthi_state != 'null' ? voterData?.labharthi_state : '')
    setSelectedLBCandidate(voterData?.labharthi_candidate != 'null' ? voterData?.labharthi_candidate : '')
  };

  const formatACNo = async (session: any) => {
    let leader_id = '';
    if (session?.user_type == 1) {
      leader_id = session?.id;
    }
    if (session?.user_type == 2) {
      leader_id = session?.leader_id;
    }
    const data: any = await retrieveACNo(leader_id);
    const result = data?.data.map((o: any) => ({
      label: `${o.AC_NO}`,
      value: `${o.AC_NO}`,
    }));
    setACNoList(result);
  };

  const formatPARTNo = async (AC_NO: any) => {
    let leader_id = '';
    if (userData?.user_type == 1) {
      leader_id = userData?.id;
    }
    if (userData?.user_type == 2) {
      leader_id = userData?.leader_id;
    }
    const data: any = await retrievePARTNo(leader_id, AC_NO);
    const result = data?.data.map((o: any) => ({
      label: `${o.PART_NO}`,
      value: `${o.PART_NO}`,
    }));
    setPartNoList(result);
  };

  const formatSetPARTNo = async (AC_NO: any) => {
    const session: any = await retrieveUserSession();
    let leader_id = '';
    if (session?.user_type == 1) {
      leader_id = session?.id;
    }
    if (session?.user_type == 2) {
      leader_id = session?.leader_id;
    }
    const data: any = await retrievePARTNo(leader_id, AC_NO);
    const result = data?.data.map((o: any) => ({
      label: `${o.PART_NO}`,
      value: `${o.PART_NO}`,
    }));
    return result;
  };

  const formatSECTIONNo = async (PART_NO: any) => {
    let leader_id = '';
    if (userData?.user_type == 1) {
      leader_id = userData?.id;
    }
    if (userData?.user_type == 2) {
      leader_id = userData?.leader_id;
    }
    const data: any = await retrieveSECTIONNo(leader_id, acNo, PART_NO);
    const result = data?.data.map((o: any) => ({
      label: `${o.SECTION_NO}`,
      value: `${o.SECTION_NO}`,
    }));
    setSectionNoList(result);
  };

  const formatSetSECTIONNo = async (PART_NO: any, AC_NO: any) => {
    const session: any = await retrieveUserSession();
    let leader_id = '';
    if (session?.user_type == 1) {
      leader_id = session?.id;
    }
    if (session?.user_type == 2) {
      leader_id = session?.leader_id;
    }
    const data: any = await retrieveSECTIONNo(leader_id, AC_NO, PART_NO);
    const result = data?.data.map((o: any) => ({
      label: `${o.SECTION_NO}`,
      value: `${o.SECTION_NO}`,
    }));
    return result;
  };

  const formatSetSlNoPart = async (PART_NO: any, AC_NO: any, SECTION_NO: any) => {
    const session: any = await retrieveUserSession();
    let leader_id = '';
    if (session?.user_type == 1) {
      leader_id = session?.id;
    }
    if (session?.user_type == 2) {
      leader_id = session?.leader_id;
    }
    const data: any = await retrieveSLNOINPART(leader_id, AC_NO, PART_NO,SECTION_NO);
    const result = data?.data.map((o: any) => ({
      label: `${o.SLNOINPART}`,
      value: `${o.SLNOINPART}`,
    }));
    return result;
  };

  const formatSlNoPart = async (SECTION_NO: any) => {
    const session: any = await retrieveUserSession();
    let leader_id = '';
    if (session?.user_type == 1) {
      leader_id = session?.id;
    }
    if (session?.user_type == 2) {
      leader_id = session?.leader_id;
    }
    const data: any = await retrieveSLNOINPART(leader_id, acNo, partNo,SECTION_NO);
    const result = data?.data.map((o: any) => ({
      label: `${o.SLNOINPART}`,
      value: `${o.SLNOINPART}`,
    }));
    setSlNoList(result)
  };

  const formatLabelValue = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.label}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatPartyList = (data: any) => {
    const result = data.map((o: any) => ({
      label: `${o.name}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatCountry = (data: any) => {
    let result:any = []
    if(data!='' && data!=undefined){
       result = data.map((o: any) => ({
        label: `${o.name}`,
        value: `${o.id}`,
      }));
    }
   
    return result;
  };

  const formatState = (country_id: any) => {
    const stateData = data?.state.filter(function (el: any) {
      return el.country_id == country_id;
    });
    const result = stateData.map((o: any) => ({
      label: `${o.name}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatCity = (state_id: any) => {
    const cityData = data?.city.filter(function (el: any) {
      return el.state_id == state_id;
    });

    const result = cityData.map((o: any) => ({
      label: `${o.city}`,
      value: `${o.id}`,
    }));
    return result;
  };

  const formatAddress = () => {
    const result = data?.address.map((o: any) => ({
      label: `${o.SECTION_NAME_EN}`,
      value: `${o.SECTION_NAME_EN}`,
    }));
    return result;
  };

  const relationTypeList = [
    {
      label: 'F',
      value: 'F',
    },
    {
      label: 'H',
      value: 'H',
    },
    {
      label: 'L',
      value: 'L',
    },
    {
      label: 'O',
      value: 'O',
    },
    {
      label: 'M',
      value: 'M',
    },
    {
      label: 'W',
      value: 'W',
    },
  ];

  const genderList = [
    {
      label: 'Male',
      value: 'M',
    },
    {
      label: 'Female',
      value: 'F',
    },
  ];

  const casteList = [
    {
      label: 'Hindu',
      value: '0',
    },
    {
      label: 'Muslim',
      value: '1',
    },
    {
      label: 'Christian',
      value: '2',
    },
    {
      label: 'Sikh',
      value: '3',
    },
    {
      label: 'Buddhist',
      value: '4',
    },
    {
      label: 'Jain',
      value: '5',
    },
    {
      label: 'NRI',
      value: '6',
    },
  ];

  const marriedList = [
    {
      label: 'Yes',
      value: '1',
    },
    {
      label: 'No',
      value: '0',
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
  const homeShiftedConstituencyList = [
    {
      label: 'Outside Constituency',
      value: '1',
    },
    {
      label: 'Within Constituency',
      value: '0',
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
  const outsideLocationConstituencyList = [
    {
      label: 'Outside Constituency',
      value: '1',
    },
    {
      label: 'Within Constituency',
      value: '0',
    },
  ];

  const changeProfilePicture = async () => {
    const options: any = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response: any) => {
      // Use launchImageLibrary to open image gallery
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setUserImage(response?.assets[0].uri);
      }
    });
  };

  const handleSubmit = async () => {
    setLoadingText('Saving profile, please wait...');
    const formData = new FormData();
    console.warn('RLN_FM_NAME_EN',RLN_FM_NAME_EN)
    console.warn('hhh--->',RLN_FM_NAME_EN !='undefined' ? RLN_FM_NAME_EN : '')
    formData.append('voter_id', voterData?.id);
    formData.append('AC_NO', acNo !='undefined' ? acNo : '');
    formData.append('PART_NO', partNo !='undefined' ? partNo : '');
    formData.append('SECTION_NO', sectionNo !='undefined' ? sectionNo : '');
    formData.append('SLNOINPART',slNo !='undefined' ? slNo : '');
    formData.append('C_HOUSE_NO', CH_HOUSE_NO !='undefined' ? CH_HOUSE_NO : '');
    formData.append('C_HOUSE_NO_V1', CH_HOUSE_NO_V1 !='undefined' ? CH_HOUSE_NO_V1 : '');
    formData.append('FM_NAME_EN', FM_NAME_EN !='undefined' ? FM_NAME_EN : '');
    formData.append('LASTNAME_EN', LASTNAME_EN !='undefined' ? LASTNAME_EN : '');
    formData.append('FM_NAME_V1', FM_NAME_V1 !='undefined' ? FM_NAME_V1 : '');
    formData.append('LASTNAME_V1', LASTNAME_V1 !='undefined' ? LASTNAME_V1 : '');
    formData.append('RLN_TYPE', relation !='undefined' ? relation : '');
    formData.append('RLN_FM_NM_EN', RLN_FM_NAME_EN !='undefined' ? RLN_FM_NAME_EN : '');
    formData.append('RLN_L_NM_EN', RLN_LASTNAME !='undefined' ? RLN_LASTNAME : '');
    formData.append('RLN_FM_NM_V1', RLN_FM_NAME_V1 !='undefined' ? RLN_FM_NAME_V1 : '');
    formData.append('RLN_L_NM_V1', RLN_LASTNAME_V1 !='undefined' ? RLN_LASTNAME_V1 : '');
    formData.append('EPIC_NO', EPIC_NO !='undefined' ? EPIC_NO : '');
    formData.append('GENDER', gender !='undefined' ? gender : '');
    formData.append('AGE', AGE !='undefined' ? AGE : '');
    formData.append('DOB', dob !='undefined' ? moment(dob).format('YYYY-MM-DD') : '');
    formData.append('MOBILE_NO', MOBILE_NO !='undefined' ? MOBILE_NO : '');
    formData.append('AC_NAME_EN', AC_NAME_EN !='undefined' ? AC_NAME_EN : '');
    formData.append('AC_NAME_V1', AC_NAME_V1 !='undefined' ? AC_NAME_V1 : '');
    formData.append('SECTION_NAME_EN', SECTION_NAME_EN !='undefined' ? SECTION_NAME_EN : '');
    formData.append('SECTION_NAME_V1', SECTION_NAME_V1 !='undefined' ? SECTION_NAME_V1 : '');
    formData.append('PSBUILDING_NAME_EN', PS_BUILDING_NAME_EN !='undefined' ? PS_BUILDING_NAME_EN : '');
    formData.append('PSBUILDING_NAME_V1', PS_BUILDING_NAME_V1 !='undefined' ? PS_BUILDING_NAME_V1 : '');
    formData.append('PART_NAME_EN', PART_NAME_EN !='undefined' ? PART_NAME_EN : '');
    formData.append('PART_NAME_V1', PART_NAME_V1 !='undefined' ? PART_NAME_V1 : '');
    formData.append('aadhar', AADHAR_NO !='undefined' ? AADHAR_NO : '');
    formData.append('RELATION_PART_NO', RELATIVE_PART_NO !='undefined' ? RELATIVE_PART_NO : '');
    formData.append('RELATION_SLNOINPART', RELATION_SLNOINPART !='undefined' ? RELATION_SLNOINPART : '');
    formData.append('caste', caste !='undefined' ? caste : '');
    formData.append('isMarried', married !='undefined' ? married : '');
    formData.append('voter_label', labelValue !='undefined' ? labelValue : '');
    formData.append('political_party', party !='undefined' ? party : '');
    formData.append('isDead', dead !='undefined' ? dead :'');

    formData.append('education', education !='undefined' ? education : '');
    formData.append('education_other', OTHER_EDUCATION !='undefined' ? OTHER_EDUCATION : '');

    formData.append('profession', profession !='undefined' ? profession : '');
    formData.append('profession_other', OTHER_PROFESSION !='undefined' ? OTHER_PROFESSION : '');

    formData.append('homeShifted', isHomeShifted !='undefined' ? isHomeShifted : '');
    formData.append('constituencyHomeShifted', isHomeShiftedConstituency !='undefined' ? isHomeShiftedConstituency : '');
    formData.append('homeShiftedAddress', homeShiftedConstituencyAddress !='undefined' ? homeShiftedConstituencyAddress : '');
    formData.append('home_shifted_country', homeShiftedCountry !='undefined' ? homeShiftedCountry : '');
    formData.append('home_shifted_state', homeShiftedState !='undefined' ? homeShiftedState : '');
    formData.append('home_shifted_city', homeShiftedCity !='undefined' ? homeShiftedCity : '');
    formData.append('home_shifted_address', homeShiftedAddress !='undefined' ? homeShiftedAddress : '');

    formData.append('outsideLocation', isOutsideLocation !='undefined' ? isOutsideLocation : '');
    formData.append('constituencyOutside', isOutsideLocationConstituency !='undefined' ? isOutsideLocationConstituency : '');
    formData.append(
      'outsideLocationAddress',
      outsideLocationConstituencyAddress !='undefined' ? outsideLocationConstituencyAddress : '',
    );
    formData.append('outside_location_country', outsideLocationCountry !='undefined' ? outsideLocationCountry : '');
    formData.append('outside_location_state', outsideLocationState !='undefined' ? outsideLocationState : '');
    formData.append('outside_location_city', outsideLocationCity !='undefined' ? outsideLocationCity : '');
    formData.append('outside_location_address', outsideLocationAddress !='undefined' ? outsideLocationAddress : '');

    formData.append('labharthi_center', selectedLBCenter !='undefined' ? selectedLBCenter : '');
    formData.append('labharthi_state', selectedLBState !='undefined' ? selectedLBState : '');
    formData.append('labharthi_candidate', selectedLBCandidate !='undefined' ? selectedLBCandidate : '');

    formData.append('APPROACH_QTY',approachQty !='undefined' ? approachQty : '');
    formData.append('APPROACH_REASON',approachReason !='undefined' ? approachReason : '');
    formData.append('CANDIDATE_NAME',candidateLike !='undefined' ? candidateLike : '');
    formData.append('profile_image_path',userImage!='undefined' ? userImage : '');
    if (userImage != '') {
      formData.append('profile_image', {
        uri: userImage,
        type: 'image/jpg',
        name: 'image.jpg',
      });
    }
    setLoading(true);
    const response: any = await saveVoterData(formData);
    if (response?.error == '') {
      setTimeout(() => {
        setLoading(false);
        Snackbar.show({
          text: 'Voter updated successfully !',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#3db362',
        });
        navigation.navigate('Home');
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
        Snackbar.show({
          text: response?.message,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#e33443',
        });
      }, 1000);
    }
  };

  return (
    <>
      {loading ? (
        <Loader text={loadingText} loading={loading} />
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.parent}>
              <View style={styles.child}></View>
            </View>
          </View>
          <View
            style={{
              top: '13%',
              width: '100%',
              height: '77%',
              //   maxHeight: 700,
              position: 'absolute',
              zIndex: 9999,
              paddingLeft: 15,
              paddingRight: 15,
              flex: 1,
              backgroundColor: '#DEDEDE',
            }}>
            <ScrollView>
              <>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <View style={{flex: 1}}>
                    <Animated.View
                      entering={FadeInUp.delay(400).duration(1000).springify()}>
                      <FlatListItem style={styles.card}>
                        <ScrollView>
                          <View>
                            <Text
                              style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#4e4f4f',
                              }}>
                              Update Voter
                            </Text>
                          </View>
                          <View style={{marginTop: 10}}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#4e4f4f',
                              }}>
                              AC NO
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={acNoList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select AC NO' : '...'}
                              searchPlaceholder="Search..."
                              value={acNo}
                              onChange={(item: any) => {
                                setAcNo(item.value);
                                setIsFocus(false);
                                formatPARTNo(item.value);
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
                              PART NO
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={partNoList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select PART NO' : '...'}
                              searchPlaceholder="Search..."
                              value={partNo}
                              onChange={(item: any) => {
                                setPartNo(item.value);
                                setIsFocus(false);
                                formatSECTIONNo(item.value);
                                setSectionNo('');
                                setSlNo('');
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
                              SECTION NO
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={sectionNoList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={
                                !isFocus ? 'Select SECTION NO' : '...'
                              }
                              searchPlaceholder="Search..."
                              value={sectionNo}
                              onChange={(item: any) => {
                                setSectionNo(item.value);
                                formatSlNoPart(item.value);
                                setSlNo('');
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
                              SLNOINPART
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={slNoList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={
                                !isFocus ? 'Select SECTION NO' : '...'
                              }
                              searchPlaceholder="Search..."
                              value={slNo}
                              onChange={(item: any) => {
                                setSlNo(item.value);
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
                              CH HOUSE NO
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={CH_HOUSE_NO}
                              onChangeText={value => {
                                setCH_HOUSE_NO(value);
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
                              CH HOUSE NO V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={CH_HOUSE_NO_V1}
                              onChangeText={value => {
                                setCH_HOUSE_NO_V1(value);
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
                              FM NAME EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={FM_NAME_EN}
                              onChangeText={value => {
                                setFM_NAME_EN(value);
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
                              LASTNAME EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={LASTNAME_EN}
                              onChangeText={value => {
                                setLASTNAME_EN(value);
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
                              FM NAME V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={FM_NAME_V1}
                              onChangeText={value => {
                                setFM_NAME_V1(value);
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
                              LASTNAME V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={LASTNAME_V1}
                              onChangeText={value => {
                                setLASTNAME_V1(value);
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
                              RLN TYPE
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={relationTypeList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select Relation' : '...'}
                              searchPlaceholder="Search..."
                              value={relation}
                              onChange={(item: any) => {
                                setRelation(item.value);
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
                              RLN FM NM EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={RLN_FM_NAME_EN}
                              onChangeText={value => {
                                setRLN_FM_NAME_EN(value);
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
                              RLN L NM EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={RLN_LASTNAME}
                              onChangeText={value => {
                                setRLN_LASTNAME(value);
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
                              RLN FM NM V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={RLN_FM_NAME_V1}
                              onChangeText={value => {
                                setRLN_FM_NAME_V1(value);
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
                              RLN L NM V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={RLN_LASTNAME_V1}
                              onChangeText={value => {
                                setRLN_LASTNAME_V1(value);
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
                              EPIC NO
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={EPIC_NO}
                              onChangeText={value => {
                                setEPIC_NO(value);
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
                              GENDER
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={genderList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select Gender' : '...'}
                              searchPlaceholder="Search..."
                              value={gender}
                              onChange={item => {
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
                              AGE
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={AGE}
                              onChangeText={value => {
                                setAGE(value);
                                setDobEdit(value);
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
                              DOB
                            </Text>
                            <TouchableOpacity onPress={() => setDobOpen(true)}>
                              <TextInput
                                placeholder="Date From"
                                style={styles.inputInner}
                                placeholderTextColor={'gray'}
                                editable={false}
                                value={
                                  dob instanceof Date
                                    ? moment(dob).format('DD/MM/YYYY')
                                    : dobEdit != ''
                                    ? dobEdit
                                    : ''
                                }
                              />
                            </TouchableOpacity>
                            <DatePicker
                              modal
                              mode={'date'}
                              open={dobOpen}
                              date={new Date()}
                              style={{zIndex: 9999}}
                              onConfirm={date => {
                                setDobOpen(false);
                                setDob(date);
                              }}
                              onCancel={() => {
                                setDobOpen(false);
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
                              MOBILE NO
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={MOBILE_NO}
                              onChangeText={value => {
                                setMOBILE_NO(value);
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
                              AC NAME EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={AC_NAME_EN}
                              onChangeText={value => {
                                setAC_NAME_EN;
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
                              AC NAME V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={AC_NAME_V1}
                              onChangeText={value => {
                                setAC_NAME_V1(value);
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
                              SECTION NAME EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={SECTION_NAME_EN}
                              onChangeText={value => {
                                setSECTION_NAME_EN(value);
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
                              SECTION NAME V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={SECTION_NAME_V1}
                              onChangeText={value => {
                                setSECTION_NAME_V1(value);
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
                              PSBUILDING NAME EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={PS_BUILDING_NAME_EN}
                              onChangeText={value => {
                                setPS_BUILDING_NAME_EN(value);
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
                              PSBUILDING NAME V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={PS_BUILDING_NAME_V1}
                              onChangeText={value => {
                                setPS_BUILDING_NAME_V1(value);
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
                              PART NAME EN
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={PART_NAME_EN}
                              onChangeText={value => {
                                setPART_NAME_EN(value);
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
                              PART NAME V1
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={PART_NAME_V1}
                              onChangeText={value => {
                                setPART_NAME_V1(value);
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
                              AADHAR NO
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={AADHAR_NO}
                              onChangeText={value => {
                                setAADHAR_NO(value);
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
                              RELATIVE PART NO
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={RELATIVE_PART_NO}
                              onChangeText={value => {
                                setRELATIVE_PART_NO(value);
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
                              RELATION SLNOINPART
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={RELATION_SLNOINPART}
                              onChangeText={value => {
                                setRELATION_SLNOINPART(value);
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
                              CASTE
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={casteList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select Caste' : '...'}
                              searchPlaceholder="Search..."
                              value={caste}
                              onChange={item => {
                                setCaste(item.value);
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
                              Married
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={marriedList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select' : '...'}
                              searchPlaceholder="Search..."
                              value={married}
                              onChange={item => {
                                setMarried(item.value);
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
                              Voter Label
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={labelValueList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={
                                !isFocus ? 'Select Label Value' : '...'
                              }
                              searchPlaceholder="Search..."
                              value={labelValue}
                              onChange={(item: any) => {
                                setLabelValue(item.value);
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
                              POLITICAL PARTY ASSOCIATED
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={partyList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={
                                !isFocus ? 'Select Political Party' : '...'
                              }
                              searchPlaceholder="Search..."
                              value={party}
                              onChange={(item: any) => {
                                setParty(item.value);
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
                              DEAD/ALIVE
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={deadList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select' : '...'}
                              searchPlaceholder="Search..."
                              value={dead}
                              onChange={(item: any) => {
                                setDead(item.value);
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
                              Education
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={educationList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select' : '...'}
                              searchPlaceholder="Search..."
                              value={education}
                              onChange={(item: any) => {
                                setEducation(item.value);
                                setIsFocus(false);
                              }}
                            />
                            {education == '7' && (
                              <TextInput
                                style={styles.inputInner}
                                placeholderTextColor={'#000'}
                                placeholder="Other Education"
                                value={OTHER_EDUCATION}
                                onChangeText={value => {
                                  setOTHER_EDUCATION(value);
                                }}
                              />
                            )}
                          </View>
                          <View style={{marginTop: 10}}>
                            <TouchableOpacity
                              onPress={() => changeProfilePicture()}>
                              <View
                                style={{
                                  height: 60,
                                  width: '100%',
                                  backgroundColor: '#288BC6',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderRadius: 9,
                                }}>
                                <Icon
                                  name="camera"
                                  color={'#FFFFFF'}
                                  size={22}
                                />
                                <Text style={{color: '#FFFFFF'}}>
                                  Profile Image
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={{marginTop: 10}}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#4e4f4f',
                              }}>
                              Profession
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={professionList}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select' : '...'}
                              searchPlaceholder="Search..."
                              value={profession}
                              onChange={(item: any) => {
                                setProfession(item.value);
                                setIsFocus(false);
                              }}
                            />
                            {profession == '25' && (
                              <TextInput
                                style={styles.inputInner}
                                placeholderTextColor={'#000'}
                                placeholder="Other Profession"
                                value={OTHER_PROFESSION}
                                onChangeText={value => {
                                  setOTHER_PROFESSION(value);
                                }}
                              />
                            )}
                          </View>
                          <View
                            style={{
                              marginTop: 10,
                              borderColor: '#000000',
                              borderWidth: 1,
                            }}>
                            <View style={{padding: 8}}>
                              <View style={{marginTop: 5}}>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#4e4f4f',
                                  }}>
                                  Home Shifted
                                </Text>
                                <Dropdown
                                  style={[
                                    styles.searchDropdown,
                                    {marginTop: 15},
                                  ]}
                                  placeholderStyle={styles.placeholderStyle}
                                  selectedTextStyle={styles.selectedTextStyle}
                                  inputSearchStyle={styles.inputSearchStyle}
                                  iconStyle={styles.iconStyle}
                                  data={homeShiftedList}
                                  itemTextStyle={{color: '#000000'}}
                                  search
                                  maxHeight={300}
                                  labelField="label"
                                  valueField="value"
                                  placeholder={!isFocus ? 'Select' : '...'}
                                  searchPlaceholder="Search..."
                                  value={isHomeShifted}
                                  onChange={item => {
                                    setIsHomeShifted(item.value);
                                    if (item.value == '0') {
                                      setIsHomeShiftedConstituency('');
                                      setHomeShiftedCountry('');
                                      setHomeShiftedState('');
                                      setHomeShiftedCity('');
                                      setHomeShiftedAddress('');
                                    }
                                    setIsFocus(false);
                                  }}
                                />
                              </View>
                              {isHomeShifted == '1' && (
                                <View style={{marginTop: 5}}>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: '400',
                                      color: '#4e4f4f',
                                    }}>
                                    Constituency
                                  </Text>
                                  <Dropdown
                                    style={[
                                      styles.searchDropdown,
                                      {marginTop: 15},
                                    ]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={homeShiftedConstituencyList}
                                    itemTextStyle={{color: '#000000'}}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select' : '...'}
                                    searchPlaceholder="Search..."
                                    value={isHomeShiftedConstituency}
                                    onChange={item => {
                                      setIsHomeShiftedConstituency(item.value);
                                      setIsFocus(false);
                                    }}
                                  />
                                </View>
                              )}
                              {isHomeShiftedConstituency == '1' && (
                                <View style={{marginTop: 5}}>
                                  <View style={{marginTop: 5}}>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: '#4e4f4f',
                                      }}>
                                      Country
                                    </Text>
                                    <Dropdown
                                      style={[
                                        styles.searchDropdown,
                                        {marginTop: 15},
                                      ]}
                                      placeholderStyle={styles.placeholderStyle}
                                      selectedTextStyle={
                                        styles.selectedTextStyle
                                      }
                                      inputSearchStyle={styles.inputSearchStyle}
                                      iconStyle={styles.iconStyle}
                                      data={homeShiftedCountryList}
                                      itemTextStyle={{color: '#000000'}}
                                      search
                                      maxHeight={300}
                                      labelField="label"
                                      valueField="value"
                                      placeholder={!isFocus ? 'Select' : '...'}
                                      searchPlaceholder="Search..."
                                      value={homeShiftedCountry}
                                      onChange={(item: any) => {
                                        setHomeShiftedCountry(item.value);
                                        setHomeShiftedStateList(
                                          formatState(item.value),
                                        );
                                        setHomeShiftedCity('');
                                        setIsFocus(false);
                                      }}
                                    />
                                  </View>
                                  <View style={{marginTop: 5}}>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: '#4e4f4f',
                                      }}>
                                      State
                                    </Text>
                                    <Dropdown
                                      style={[
                                        styles.searchDropdown,
                                        {marginTop: 15},
                                      ]}
                                      placeholderStyle={styles.placeholderStyle}
                                      selectedTextStyle={
                                        styles.selectedTextStyle
                                      }
                                      inputSearchStyle={styles.inputSearchStyle}
                                      iconStyle={styles.iconStyle}
                                      data={homeShiftedStateList}
                                      itemTextStyle={{color: '#000000'}}
                                      search
                                      maxHeight={300}
                                      labelField="label"
                                      valueField="value"
                                      placeholder={!isFocus ? 'Select' : '...'}
                                      searchPlaceholder="Search..."
                                      value={homeShiftedState}
                                      onChange={(item: any) => {
                                        setHomeShiftedState(item?.value);
                                        setHomeShiftedCityList(
                                          formatCity(item?.value),
                                        );
                                        setIsFocus(false);
                                      }}
                                    />
                                  </View>
                                  <View style={{marginTop: 5}}>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: '#4e4f4f',
                                      }}>
                                      City
                                    </Text>
                                    <Dropdown
                                      style={[
                                        styles.searchDropdown,
                                        {marginTop: 15},
                                      ]}
                                      placeholderStyle={styles.placeholderStyle}
                                      selectedTextStyle={
                                        styles.selectedTextStyle
                                      }
                                      inputSearchStyle={styles.inputSearchStyle}
                                      iconStyle={styles.iconStyle}
                                      data={homeShiftedCityList}
                                      itemTextStyle={{color: '#000000'}}
                                      search
                                      maxHeight={300}
                                      labelField="label"
                                      valueField="value"
                                      placeholder={!isFocus ? 'Select' : '...'}
                                      searchPlaceholder="Search..."
                                      value={homeShiftedCity}
                                      onChange={(item: any) => {
                                        setHomeShiftedCity(item?.value);
                                        setIsFocus(false);
                                      }}
                                    />
                                  </View>
                                  <View style={{marginTop: 5}}>
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
                                      value={homeShiftedConstituencyAddress}
                                      onChangeText={value => {
                                        setHomeShiftedConstituencyAddress(
                                          value,
                                        );
                                      }}
                                    />
                                  </View>
                                </View>
                              )}
                              {isHomeShiftedConstituency == '0' && (
                                <View style={{marginTop: 5}}>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: '400',
                                      color: '#4e4f4f',
                                    }}>
                                    Address List
                                  </Text>
                                  <Dropdown
                                    style={[
                                      styles.searchDropdown,
                                      {marginTop: 15},
                                    ]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={homeShiftedAddressList}
                                    itemTextStyle={{color: '#000000'}}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select' : '...'}
                                    searchPlaceholder="Search..."
                                    value={homeShiftedAddress}
                                    onChange={(item: any) => {
                                      setHomeShiftedAddress(item?.value);
                                      setIsFocus(false);
                                    }}
                                  />
                                </View>
                              )}
                            </View>
                          </View>
                          <View
                            style={{
                              marginTop: 10,
                              borderColor: '#000000',
                              borderWidth: 1,
                            }}>
                            <View style={{padding: 8}}>
                              <View style={{marginTop: 5}}>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    fontWeight: '400',
                                    color: '#4e4f4f',
                                  }}>
                                  Outside Location
                                </Text>
                                <Dropdown
                                  style={[
                                    styles.searchDropdown,
                                    {marginTop: 15},
                                  ]}
                                  placeholderStyle={styles.placeholderStyle}
                                  selectedTextStyle={styles.selectedTextStyle}
                                  inputSearchStyle={styles.inputSearchStyle}
                                  iconStyle={styles.iconStyle}
                                  data={outsideLocationList}
                                  itemTextStyle={{color: '#000000'}}
                                  search
                                  maxHeight={300}
                                  labelField="label"
                                  valueField="value"
                                  placeholder={!isFocus ? 'Select' : '...'}
                                  searchPlaceholder="Search..."
                                  value={isOutsideLocation}
                                  onChange={(item: any) => {
                                    setIsOutsideLocation(item.value);
                                    if (item.value == '0') {
                                      setIsOutsideLocationConstituency('');
                                      setOutsideLocationCountry('');
                                      setOutsideLocationState('');
                                      setOutsideLocationCity('');
                                      setOutsideLocationAddress('');
                                    }
                                    setIsFocus(false);
                                  }}
                                />
                              </View>
                              {isOutsideLocation == '1' && (
                                <View style={{marginTop: 5}}>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: '400',
                                      color: '#4e4f4f',
                                    }}>
                                    Constituency
                                  </Text>
                                  <Dropdown
                                    style={[
                                      styles.searchDropdown,
                                      {marginTop: 15},
                                    ]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={outsideLocationConstituencyList}
                                    itemTextStyle={{color: '#000000'}}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select' : '...'}
                                    searchPlaceholder="Search..."
                                    value={isOutsideLocationConstituency}
                                    onChange={(item: any) => {
                                      setIsOutsideLocationConstituency(
                                        item.value,
                                      );
                                      setIsFocus(false);
                                    }}
                                  />
                                </View>
                              )}
                              {isOutsideLocationConstituency == '1' && (
                                <View style={{marginTop: 5}}>
                                  <View style={{marginTop: 5}}>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: '#4e4f4f',
                                      }}>
                                      Country
                                    </Text>
                                    <Dropdown
                                      style={[
                                        styles.searchDropdown,
                                        {marginTop: 15},
                                      ]}
                                      placeholderStyle={styles.placeholderStyle}
                                      selectedTextStyle={
                                        styles.selectedTextStyle
                                      }
                                      inputSearchStyle={styles.inputSearchStyle}
                                      iconStyle={styles.iconStyle}
                                      data={outsideLocationCountryList}
                                      itemTextStyle={{color: '#000000'}}
                                      search
                                      maxHeight={300}
                                      labelField="label"
                                      valueField="value"
                                      placeholder={!isFocus ? 'Select' : '...'}
                                      searchPlaceholder="Search..."
                                      value={outsideLocationCountry}
                                      onChange={(item: any) => {
                                        setOutsideLocationCountry(item.value);
                                        setOutsideLocationStateList(
                                          formatState(item.value),
                                        );
                                        setOutsideLocationCity('');
                                        setIsFocus(false);
                                      }}
                                    />
                                  </View>
                                  <View style={{marginTop: 5}}>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: '#4e4f4f',
                                      }}>
                                      State
                                    </Text>
                                    <Dropdown
                                      style={[
                                        styles.searchDropdown,
                                        {marginTop: 15},
                                      ]}
                                      placeholderStyle={styles.placeholderStyle}
                                      selectedTextStyle={
                                        styles.selectedTextStyle
                                      }
                                      inputSearchStyle={styles.inputSearchStyle}
                                      iconStyle={styles.iconStyle}
                                      data={outsideLocationStateList}
                                      itemTextStyle={{color: '#000000'}}
                                      search
                                      maxHeight={300}
                                      labelField="label"
                                      valueField="value"
                                      placeholder={!isFocus ? 'Select' : '...'}
                                      searchPlaceholder="Search..."
                                      value={outsideLocationState}
                                      onChange={(item: any) => {
                                        setOutsideLocationState(item.value);
                                        setOutsideLocationCityList(
                                          formatCity(item?.value),
                                        );
                                        setIsFocus(false);
                                      }}
                                    />
                                  </View>
                                  <View style={{marginTop: 5}}>
                                    <Text
                                      style={{
                                        fontSize: 14,
                                        fontWeight: '400',
                                        color: '#4e4f4f',
                                      }}>
                                      City
                                    </Text>
                                    <Dropdown
                                      style={[
                                        styles.searchDropdown,
                                        {marginTop: 15},
                                      ]}
                                      placeholderStyle={styles.placeholderStyle}
                                      selectedTextStyle={
                                        styles.selectedTextStyle
                                      }
                                      inputSearchStyle={styles.inputSearchStyle}
                                      iconStyle={styles.iconStyle}
                                      data={outsideLocationCityList}
                                      itemTextStyle={{color: '#000000'}}
                                      search
                                      maxHeight={300}
                                      labelField="label"
                                      valueField="value"
                                      placeholder={!isFocus ? 'Select' : '...'}
                                      searchPlaceholder="Search..."
                                      value={outsideLocationCity}
                                      onChange={(item: any) => {
                                        setOutsideLocationCity(item.value);
                                        setIsFocus(false);
                                      }}
                                    />
                                  </View>
                                  <View style={{marginTop: 5}}>
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
                                      value={outsideLocationConstituencyAddress}
                                      onChangeText={value => {
                                        setOutsideLocationConstituencyAddress(
                                          value,
                                        );
                                      }}
                                    />
                                  </View>
                                </View>
                              )}
                              {isOutsideLocationConstituency == '0' && (
                                <View style={{marginTop: 5}}>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      fontWeight: '400',
                                      color: '#4e4f4f',
                                    }}>
                                    Address List
                                  </Text>
                                  <Dropdown
                                    style={[
                                      styles.searchDropdown,
                                      {marginTop: 15},
                                    ]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={outsideLocationAddressList}
                                    itemTextStyle={{color: '#000000'}}
                                    search
                                    maxHeight={300}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select' : '...'}
                                    searchPlaceholder="Search..."
                                    value={outsideLocationAddress}
                                    onChange={(item: any) => {
                                      setOutsideLocationAddress(item.value);
                                      setIsFocus(false);
                                    }}
                                  />
                                </View>
                              )}
                            </View>
                          </View>
                          <View style={{marginTop: 10}}>
                            <Text
                              style={{
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#4e4f4f',
                              }}>
                              Labharthi(Center)
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={lalBhartiCenter}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select' : '...'}
                              searchPlaceholder="Search..."
                              value={selectedLBCenter}
                              onChange={(item: any) => {
                                setSelectedLBCenter(item.value);
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
                              Labharthi(State)
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={lalBhartiState}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select' : '...'}
                              searchPlaceholder="Search..."
                              value={selectedLBState}
                              onChange={(item: any) => {
                                setSelectedLBState(item.value);
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
                              Labharthi(Candidate)
                            </Text>
                            <Dropdown
                              style={[styles.searchDropdown, {marginTop: 15}]}
                              placeholderStyle={styles.placeholderStyle}
                              selectedTextStyle={styles.selectedTextStyle}
                              inputSearchStyle={styles.inputSearchStyle}
                              iconStyle={styles.iconStyle}
                              data={lalBhartiCandidate}
                              itemTextStyle={{color: '#000000'}}
                              search
                              maxHeight={300}
                              labelField="label"
                              valueField="value"
                              placeholder={!isFocus ? 'Select' : '...'}
                              searchPlaceholder="Search..."
                              value={selectedLBCandidate}
                              onChange={(item: any) => {
                                setSelectedLBCandidate(item.value);
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
                              APPROACH QTY
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={approachQty}
                              keyboardType='numeric'
                              onChangeText={(value:any) => {
                                setApproachQty(value);
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
                              APPROACH REASON
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={approachReason}
                              onChangeText={(value:any) => {
                                setApproachReason(value);
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
                              CANDIDATE LIKE
                            </Text>
                            <TextInput
                              style={styles.inputInner}
                              placeholderTextColor={'#000'}
                              value={candidateLike}
                              onChangeText={(value:any) => {
                                setCandidateLike(value);
                              }}
                            />
                          </View>
                        </ScrollView>
                      </FlatListItem>
                    </Animated.View>
                  </View>
                </View>
              </>
            </ScrollView>
          </View>
          <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
            <TouchableOpacity onPress={()=> handleSubmit()} style={{marginRight: 15, marginLeft: 15}}>
              <View
                style={{
                  height: 50,
                  backgroundColor: '#de8100',
                  borderRadius: 9,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#FFF', fontSize: 18, fontWeight: '600'}}>
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#DEDEDE',
  },
  innerContainer: {
    zIndex: 1,
    flexDirection: 'column',
  },
  parent: {
    height: '70%',
    width: '100%',
    transform: [{scaleX: 2}],
    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{scaleX: 0.5}],
    backgroundColor: '#288BC6',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderRadius: 9,
    height: 50,
    marginTop: 15,
    padding: 16,
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
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 12,
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
    marginTop: 52,
    backgroundColor: '#FFFFFF',
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
  searchDropdown: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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
});

export default UpdateVoterScreen;
