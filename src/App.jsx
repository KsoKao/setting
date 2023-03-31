import { useState } from "react";
// import 에서 useState는 {} 가 들어간다

const App = () => {
  const [count, setCount] = useState(0);
  // [count(변수) setCount(값을 업데이트 하는 함수)] = useState()카운트의 초기값

  const onClickAdd = () => {
    setCount(count + 1);
  };

  const onClickSubtract = () => {
    setCount(count - 1);

    if (count <= 0) {
      alert("count의 값이 0보다 작을 수 없습니다!");
      return;
    }
    //setCount((prev) => {
    //  return prev - 1;
    // }); 이러한 형태로도 사용할 수 있다.
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="bg-pink-300 w-12 h-12 rounded-full mt-4"
        onClick={onClickSubtract}
      >
        -
      </button>
    </div>
  );
};
export default App;
