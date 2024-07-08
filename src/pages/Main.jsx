import Button from "../component/Button";
/* import { Api } from '../component/Api'; */
import { useLocation } from "react-router-dom";
import "./Main.css";
import { useEffect, useState } from "react";
const successUrl = "http://196.189.61.66:5086/api/demo/successResponse";
const errorUrl = "http://196.189.61.66:5086/api/demo/errorResponse";
const cancelUrl = "http://196.189.61.66:5086/api/demo/cancelResponse";
const Main = () => {
  let location = useLocation(); //comment to make the changes
  const sessionId = location.pathname;
  console.log(sessionId);
  const [sessionData, setSessionData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchSessionData = async () => {
      try {
        const response = await fetch(
          `http://196.189.61.66:5086/api/session/getSession${sessionId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch session data");
        }
        const data = await response.json();
        setSessionData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSessionData();
  }, []);

  return (
    <div className="container">
      <div className="container-section">
        <header className="container-header">xyz proccess</header>
        <div className="between">
          {loading && <p>Loading session data...</p>}
          {<span className="between-span">{sessionData.payment}</span>}
        </div>
        <div className="btn-wrapper">
          <Button
            color="#27ae60"
            text="Success"
            url={successUrl + sessionId}
            data={sessionData}
          >
            Success
          </Button>
          <Button
            color="#ff4742"
            text="Error"
            url={errorUrl + sessionId}
            data={sessionData}
          >
            Error
          </Button>
          <Button
            color="#222"
            text="Cancel"
            url={cancelUrl + sessionId}
            data={sessionData}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Main;
