const actions = {
    CREATE_MEMBER_REPORT_REQUEST: 'CREATE_MEMBER_REQUEST',
    CREATE_MEMBER_REPORT_SUCCESS: 'CREATE_MEMBER_REPORT_SUCCESS',
    CREATE_MEMBER_REPORT_ERROR: 'CREATE_MEMBER_REPORT_ERROR',

    GET_MEMBER_REPORT_REQUEST: 'GET_MEMBER_REPORT_REQUEST',
    GET_MEMBER_REPORT_SUCCESS: 'GET_MEMBER_REPORT_SUCCESS',
    GET_MEMBER_REPORT_ERROR: 'GET_MEMBER_REPORT_ERROR',

    MEMBER_DETAIL_REQUEST: 'MEMBER_DETAIL_REQUEST',
    MEMBER_DETAIL_SUCCESS: 'MEMBER_DETAIL_SUCCESS',
    MEMBER_DETAIL_ERROR: 'MEMBER_DETAIL_ERROR',
      /**
   * request to create member report.
   */
       createMemberReport: (queryParams) => ({
        type: actions.CREATE_MEMBER_REPORT_REQUEST,
        queryParams
    }),

    /**
     * when create member report is successfull.
     */
    createMemberReportSuccess: (payload = {}) => ({
        type: actions.CREATE_MEMBER_REPORT_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with create member report.
     */
    createMemberReportFailure: (payload = '', errors = {}) => ({
        type: actions.CREATE_MEMBER_REPORT_ERROR,
        payload,
        errors
    }),

  /**
   * request to get report.
   */
    getMemberReport: () => ({
        type: actions.GET_MEMBER_REPORT_REQUEST,
    }),

    getMemberReportSuccess: (payload = {}) => ({
        type: actions.GET_MEMBER_REPORT_SUCCESS,
        payload
    }),

    getMemberReportFailure: (payload = '', errors = {}) => ({
        type: actions.GET_MEMBER_REPORT_ERROR,
        payload,
        errors
    }),

        /**
 * request to detail report.
 */
    memberDetail: (id) => ({
        type: actions.MEMBER_DETAIL_REQUEST,
        id
    }),

    /**
     * when detail report is successfull.
     */
     memberDetailSuccess: (payload = {}) => ({
        type: actions.MEMBER_DETAIL_SUCCESS,
        payload
    }),

    /**
     * when something went wrong with detail report.
     */
    memberDetailFailure: (payload = '', errors = {}) => ({
        type: actions.MEMBER_DETAIL_ERROR,
        payload,
        errors
    }),
};

export default actions;