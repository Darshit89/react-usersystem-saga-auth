import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './action';
import { axiosGet,axiosPost } from '../axiosHelper';
import { push } from 'connected-react-router';

/**
 * Request to create livingEnvirnoment report.
 */
 export function* createMemberReport({ queryParams }) {
    try {
        const { data } = yield axiosPost(queryParams, `member/create`);
        yield put(actions.createMemberReportSuccess(data));
        yield put(push('/members'));
    } catch (error) {
        yield put(actions.createMemberReportFailure(error.message, error.data || {}));
    }
}

/**
 * get all members.
 *
 */
export function* getMemberReport() {
    try {
        const { data } = yield axiosGet(`member`);
        yield put(actions.getMemberReportSuccess(data));
    } catch (error) {
        yield put(actions.getMemberReportFailure(error.message, error.data || {}));
    }
}


/**
 * Request to detail member report.
 */
 export function* memberDetail({ id }) {
    try {
        const { data } = yield axiosGet(`member/${id}`);
        yield put(actions.memberDetailSuccess(data));
    } catch (error) {
        yield put(actions.memberDetailFailure(error.message, error.data || {}));
    }
}
export default function* rootSaga() {
    yield all([takeEvery(actions.CREATE_MEMBER_REPORT_REQUEST, createMemberReport)]);
    yield all([takeEvery(actions.GET_MEMBER_REPORT_REQUEST, getMemberReport)]);
    yield all([takeEvery(actions.MEMBER_DETAIL_REQUEST, memberDetail)]);
}