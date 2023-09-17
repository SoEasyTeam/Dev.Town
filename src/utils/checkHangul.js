const regExp = /^[가-힣a-zA-Z]+$/;

export const checkHangul = (input) => {
    if (regExp.test(input)) return input;
    return '';
};
