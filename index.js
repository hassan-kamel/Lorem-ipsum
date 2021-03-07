//dom
const wordNum = document.querySelector('input[name="words"]');
const parasNum = document.querySelector('input[name="paras"]');
const genBtn = document.querySelector('[class="btn"]')
const outputArea = document.querySelector('[class="output"]');
// console.log(outputArea)
//....
genBtn.addEventListener("click", genProcess);
//....

function genProcess() {
    let temp = ``;
    for (let j = 0; j < parasNum.value; j++) {
        let parG = genPar(myData.split(" "));
        temp += `
        <p>${parG}</p>
        `;
    }
    outputArea.innerHTML = temp;

}

function genPar(Data) {

    Data = randomData(Data);
    let par = '';
    for (let j = 0; j < wordNum.value; j++) {
        let y = j % Data.length;
        Data[y] = Data[y].toLowerCase();
        Data[0] = Data[0][0].toUpperCase() + Data[0].slice(1);
        // console.log(Data[0][0]);
        par += ` ${Data[y]}`;
    }


    return par;
}

function randomData(_myData) {

    let ranDataArr = [];
    let i = _myData.length;
    j = 0;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1))
        ranDataArr.push(_myData[j]);
        _myData.splice(j, 1);
    }
    return ranDataArr;
}