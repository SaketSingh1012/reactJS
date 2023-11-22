import { useState, useEffect } from "react";

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/SaketSingh1012"
      );
      const result = await response.json();
      setFetchedData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {fetchedData && (
        <div>
          <h2>Data Fetched in App</h2>
          <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
