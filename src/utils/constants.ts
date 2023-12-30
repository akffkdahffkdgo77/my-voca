export enum STATUS {
    TODO = 'todo',
    PROGRESS = 'progress',
    DONE = 'done'
}

export const STATUS_OPTIONS = [
    { label: 'TODO', value: STATUS.TODO },
    { label: 'PROGRESS', value: STATUS.PROGRESS },
    { label: 'DONE', value: STATUS.DONE }
];

export const DEFAULT_ERROR_MESSAGE = '문제가 발생하였습니다. 잠시 후 다시 시도해 주세요.';
