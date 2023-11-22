import { useState } from "react";

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  const fetchDataOnClick = async () => {
    try {
      if (fetchedData !== null) {
        setFetchedData(null);
      } else {
        const response = await fetch(
          "https://api.github.com/users/SaketSingh1012"
        );
        const result = await response.json();
        setFetchedData(result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <button onClick={fetchDataOnClick}>Saket Singh Github Info</button>

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