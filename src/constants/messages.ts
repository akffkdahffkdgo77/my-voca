const MESSAGES = {
    DELETE_DATA: {
        title: '데이터 삭제',
        messageType: 'confirm',
        message: '이전 데이터를 삭제하시겠습니까? \n데이터를 복구할 수 없습니다.',
        confirmText: '삭제',
        cancelText: '취소'
    },
    DELETE_COMPLETE: {
        title: '삭제 완료',
        message: '삭제되었습니다.'
    },
    GET_PREVIOUS_DATA: {
        title: '데이터 조회',
        messageType: 'confirm',
        message: `이전 데이터를 조회하시겠습니까? \n현재 입력된 데이터는 삭제됩니다.`,
        confirmText: '조회',
        cancelText: '취소'
    },
    NO_PREVIOUS_DATA: {
        title: '데이터 에러',
        message: '데이터가 존재하지 않습니다.'
    },
    CHANGE_QUANTITY: {
        title: '수량 변경',
        messageType: 'confirm',
        message: `수량을 변경하시겠습니까? \n입력된 데이터는 초기화됩니다.`,
        confirmText: '변경',
        cancelText: '취소'
    },
    REQUIRE_AT_LEAST_ONE_WORD: {
        title: '데이터 유효성 에러',
        message: '하나 이상의 단어를 입력해 주세요.'
    },
    REQUIRE_WORD_AND_DEFINITION: {
        title: '데이터 유효성 에러',
        message: '단어와 뜻을 입력해 주세요.'
    },
    DATA_SUBMISSION: {
        title: '데이터 제출',
        messageType: 'confirm',
        message: '데이터를 제출하시겠습니까?',
        confirmText: '제출',
        cancelText: '취소'
    },
    SUBMISSION_COMPLETE: {
        title: '등록 완료',
        message: '데이터가 등록되었습니다.'
    },
    CURRENT_RESULT: {
        title: '성공',
        confirmText: '다음'
    },
    RETRY: {
        title: '재시도',
        message: '다시 시도해 주세요.'
    },
    LAST_WORD: {
        title: '마지막 단어',
        message: '마지막 단어입니다!'
    },
    FINAL_RESULT: {
        title: '테스트 완료',
        messageType: 'confirm',
        confirmText: '홈으로',
        cancelText: '다시하기'
    }
};

export default MESSAGES;
