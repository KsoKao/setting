import { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState();
  // useState() 초기값을 설정하면 값이 수정이 안됨
  const [num2, setNum2] = useState();
  const [result, setResult] = useState(0);

  const onChangeNum1 = (e) => {
    setNum1(e.target.value);
    //e 이벤트의 target의 value 값
    //onChange 업데이트 함수
  };
  const onChangeNum2 = (e) => {
    setNum2(e.target.value);
  };

  const checkNum = (n1, n2) => {
    if (n1 === "" || n2 === "") {
      alert("값을 입력해주세요.");
      return;
    }
    if (isNaN(n1) || isNaN(n2)) {
      alert("숫자를 입력해주세요.");
      return;
    }
  };

  const onClickAdd = () => {
    checkNum(num1, num2);

    setResult(parseInt(num1) + parseInt(num2));
    //숫자끼리 더해야 올바른값이 나옴 parseInt로 숫자열로 변경
    //parseInt는 소숫점은 나오지 않고 Number는 소숫점 포함
  };

  const onClickSubtract = () => {
    checkNum(num1, num2);

    setResult(parseInt(num1) - parseInt(num2));
  };

  const onClickMultiply = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) * parseInt(num2));
  };

  const onClickDivide = () => {
    checkNum(num1, num2);
    setResult(parseInt(num1) / parseInt(num2));
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-4">이것저것 다양한 계산기</h1>
      <div className="text-3xl font-black mb-4">{result}</div>
      <div className="mb-4">
        <input
          className="border-2 focus:outline-none focus:border-purple-300 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num1}
          onChange={onChangeNum1}
        />
        <input
          className="border-2 focus:outline-none focus:border-purple-300 rounded-lg px-4 py-2 text-xl ml-4"
          type="text"
          value={num2}
          onChange={onChangeNum2}
        />
      </div>
      <div>
        <button
          onClick={onClickAdd}
          className="border-2 px-2 py-1 rounded-full border-red-400 text-red-400"
        >
          Add
        </button>
        <button
          onClick={onClickSubtract}
          className="border-2 px-2 py-1 rounded-full border-blue-500 text-blue-500 ml-8"
        >
          Subtract
        </button>
        <button
          onClick={onClickMultiply}
          className="border-2 px-2 py-1 rounded-full border-yellow-500 text-yellow-500 ml-8"
        >
          Multiply
        </button>
        <button
          onClick={onClickDivide}
          className="border-2 px-2 py-1 rounded-full border-green-500 text-green-500 ml-8"
        >
          Divide
        </button>
      </div>
    </div>
  );
};
export default App;
