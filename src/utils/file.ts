import { v4 as uuid } from 'uuid';

import { createBaseData, DataType } from './data';

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
  const newWordList = createBaseData();
  for (let i = 0; i < list.length; i++) {
    const [word, definition] = list[i].split(':');
    const [definition1, definition2] = definition.split('\\n');
    newWordList.words[i] = {
      wordIdx: uuid(),
      word,
      definition: [definition1, definition2].filter((val) => val),
      count: 0,
      isHighlighted: false,
      isMemorized: false,
    };
  }

  return newWordList;
}

export function importFile(file: File): Promise<DataType> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const fileData = reader.result;
      if (fileData) {
        const list = fileData.toString().trim().split('\n');
        resolve(createList(list));
      } else {
        reject(new Error('문제가 발생하였습니다. 파일을 다시 첨부하세요.'));
      }
    };
    reader.readAsText(file);
  });
}
