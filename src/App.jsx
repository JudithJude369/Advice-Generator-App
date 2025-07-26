import Advice from "@/components/Advice";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

const url = "https://api.adviceslip.com/advice";
const App = () => {
  const [advice, setAdvice] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const advice = await response.json();
      console.log(advice);
      setAdvice([advice.slip]);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <h2 style={{ textAlign: "center", margin: "5rem auto" }}>
        There was an error...
      </h2>
    );
  }
  return (
    <main>
      {advice.map((randomAdvice, i) => {
        return <Advice key={i} {...randomAdvice} />;
      })}
      <Button fetchData={fetchData} />
    </main>
  );
};

export default App;
