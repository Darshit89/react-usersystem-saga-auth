import actions from './action';

const initState = {
    member:{},
    memberList: [],
    memberDetail:{},
    errorData: {},
    action: null
};

export default (state = initState, action) => {
    switch (action.type) {
        case actions.CREATE_MEMBER_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                loading: true,
                message: null,
                loading: true,
                action: action.type
            };
        case actions.CREATE_MEMBER_REPORT_SUCCESS:
            return {

                ...state,
                loading: false,
                member: action.payload,
                loading: false,
                action: action.type
            };
        case actions.CREATE_MEMBER_REPORT_ERROR:
            return {
                ...state,
                loading: false,
                message: action.payload,
                loading: false,
                errorData: action.errors || {},
                action: action.type
            };
        case actions.GET_MEMBER_REPORT_REQUEST:
            return {
                ...state,
                errorData: {},
                action: action.type
            };
        case actions.GET_MEMBER_REPORT_SUCCESS:
            return {
                ...state,
                memberList: action.payload.data,
                action: action.type
            };
        case actions.GET_MEMBER_REPORT_ERROR:
            return {
                ...state,
                errorData: action.errors || {},
                action: action.type
            };
            case actions.MEMBER_DETAIL_REQUEST:
                return {
                    ...state,
                    errorData: {},
                    loading: true,
                    message: null,
                    id: '',
                    action: action.type
                };
            case actions.MEMBER_DETAIL_SUCCESS:
                return {
    
                    ...state,
                    loading: false,
                    memberDetail: action.payload.data,
                    action: action.type
                };
            case actions.MEMBER_DETAIL_ERROR:
                return {
                    ...state,
                    loading: false,
                    message: action.payload,
                    errorData: action.errors || {},
                    action: action.type
                };
        default:
            return state;
    }
};