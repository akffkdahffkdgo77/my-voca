import { DataType } from './data';
import { formatDate } from './format';

export function exportFile(data: string, name: string) {
    const blob = new Blob([data], { type: 'text/plain' });
    const fileUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = `${name}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(fileUrl);
}

function createList(list: string[]) {
    const curTime = new Date().getTime();
    const newWordList: DataType = { idx: curTime, title: `단어장 ${formatDate(curTime)}`, createdAt: curTime, words: [] };
    for (let i = 0; i < list.length; i++) {
        const [word, definition] = list[i].split(':');
        newWordList.words[i] = {
            wordIdx: i + 1,
            word,
            definition,
            successCount: 0,
            failCount: 0
        };
    }

    return newWordList;
}

export function importFile(file: File): Promise<DataType> {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const fileData = reader.result;
            if (fileData) {
                const list = fileData.toString().trim().split('\n');
                resolve(createList(list));
            }
        };
        reader.readAsText(file);
    });
}
