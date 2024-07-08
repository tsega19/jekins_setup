/* import { Api } from '../component/Api' */
import "./Button.css";
function Button({ children, color, url, id, data }) {
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();

      window.location.href = data.redirectUrl;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="btn-main">
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={fetchData}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;

/*
     const { sendRequist } = Api();
     const handleClick = async () => {
         console.log(url)
         const responseData = await sendRequist(url,
             'POST',
             JSON.stringify({
                 id: id
             }),
             { 'Content-Type': 'application/json' });
 
         console.log(responseData);
         if (id) {
             ////
         }
     } */
