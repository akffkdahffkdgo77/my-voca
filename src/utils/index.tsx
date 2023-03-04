/* eslint-disable import/prefer-default-export */
type VocaListType = {
    word: string;
    definition: string;
};

export function randomize(data: VocaListType[]) {
    const arr: VocaListType[] = [];
    const max = data.length;

    while (arr.length !== data.length) {
        const random = Math.floor(Math.random() * (max - 0) + 0);
        const index = arr.findIndex((d) => d.word === data[random]?.word && d.definition === data[random]?.definition);
        if (index === -1) {
            const randomData = data[random] as VocaListType;
            arr.push(randomData);
        }
    }

    return arr;
}
