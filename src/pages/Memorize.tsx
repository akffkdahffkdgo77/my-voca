interface IVocaList {
    word: string;
    definition: string;
}

function randomize(data: IVocaList[]) {
    const arr: IVocaList[] = [];
    const max = data.length;

    while (arr.length !== data.length) {
        const random = Math.floor(Math.random() * (max - 0) + 0);
        const index = arr.findIndex((d) => d.word === data[random]?.word && d.definition === data[random]?.definition);
        if (index === -1) {
            const randomData = data[random] as IVocaList;
            arr.push(randomData);
        }
    }

    return arr;
}

export default function Memorize() {
    const voca = JSON.parse(localStorage.getItem('words') || '');
    const dataset = voca.length && randomize(voca);

    return (
        <div>
            <ul>
                {dataset?.map((d: { word: string }) => (
                    <li key={d.word}>{d.word}</li>
                ))}
            </ul>
        </div>
    );
}
