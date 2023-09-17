export const checkHangul = (input) => {
    const lastChar = input.charAt(input.length - 1);
    const charCode = lastChar.charCodeAt(0);

    // 한글 음절 유니코드 범위: 0xAC00 - 0xD7A3
    if (charCode >= 0xac00 && charCode <= 0xd7a3) {
        // 초성, 중성, 종성 분리 및 조합
        const cho = [
            'ㄱ',
            'ㄲ',
            'ㄴ',
            'ㄷ',
            'ㄸ',
            'ㄹ',
            'ㅁ',
            'ㅂ',
            'ㅃ',
            'ㅅ',
            'ㅆ',
            'ㅇ',
            'ㅈ',
            'ㅉ',
            'ㅊ',
            'ㅋ',
            'ㅌ',
            'ㅍ',
            'ㅎ',
        ];
        const jung = [
            'ㅏ',
            'ㅐ',
            'ㅑ',
            'ㅒ',
            'ㅓ',
            'ㅔ',
            'ㅕ',
            'ㅖ',
            'ㅗ',
            'ㅘ',
            'ㅙ',
            'ㅚ',
            'ㅛ',
            'ㅜ',
            'ㅝ',
            'ㅞ',
            'ㅟ',
            'ㅠ',
            'ㅡ',
            'ㅢ',
            'ㅣ',
        ];
        const jong = [
            '',
            'ㄱ',
            'ㄲ',
            'ㄳ',
            'ㄴ',
            'ㄵ',
            'ㄶ',
            'ㄷ',
            'ㄹ',
            'ㄺ',
            'ㄻ',
            'ㄼ',
            'ㄽ',
            'ㄾ',
            'ㄿ',
            'ㅀ',
            'ㅁ',
            'ㅂ',
            'ㅄ',
            'ㅅ',
            'ㅆ',
            'ㅇ',
            'ㅈ',
            'ㅊ',
            'ㅋ',
            'ㅌ',
            'ㅍ',
            'ㅎ',
        ];

        // 초성, 중성, 종성을 분리
        const first = Math.floor((charCode - 0xac00) / 28 / 21); // 초성
        const second = Math.floor((charCode - 0xac00) / 28) % 21; // 중성
        const third = (charCode - 0xac00) % 28; // 종성

        // 조합하여 반환
        return input.slice(0, -1) + cho[first] + jung[second] + jong[third];
    }

    // 그 외의 경우는 그대로 반환
    return input;
};
