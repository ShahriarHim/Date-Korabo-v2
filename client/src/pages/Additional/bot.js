
import React,{ useState } from "react";
// import Header from "./components/header";
// import Footer from "./components/footer";

const Bot = () => {
  const [searchText, setSearchText] = useState(""); // State to hold the search text
  const [response, setResponse] = useState(""); // State to hold the response from the backend
  const [messages, setMessages] = useState([]); // State to hold previous messages

  const handleSearch = async () => {
    try {
      const chatResponse = await fetch(`http://127.0.0.1:8000/chat?input_text=${searchText}`);
      const chatData = await chatResponse.json();
      setResponse(chatData.message);

      // Call the /post endpoint to get the response
      const postResponse = await fetch("http://127.0.0.1:8000/post");
      const postData = await postResponse.json();
      console.log("Response from /post:", postData);

      // Update the response state with the /post response
      setResponse(postData.response);

      // Add the new message to the messages state
      setMessages([...messages, { text: searchText, isUser: true }, { text: postData.response, isUser: false }]);    } catch (error) {
      console.error("Error:", error);
    }
  };
  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer"
  };
  const searchStyle = {
    backgroundColor: "#611b1b",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    textAlign: "center",
    width: "20%", // Adjust the width as desired
    margin: "0 auto" // Center the search bar horizontally
  };
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default Enter key behavior
      handleSearch(); // Call the handleSearch function
    }
  };

  const boxStyle = {
    backgroundColor: "#71eb73",
    padding: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    textAlign: "center",
    width: "70%", // Adjust the width as desired
    margin: "0 auto" // Center the box horizontally
  };
  
         return(
            <div>

<>
  {/* preloader start here */}
  <div className="preloader">
    <div className="preloader-inner">
      <div className="preloader-icon">
        <span />
        <span />
      </div>
    </div>
  </div>
 
  <a href="#" className="scrollToTop">
    <i className="icofont-rounded-up" />
  </a>
  <div className="bot-container">
      <div className="box-container" style={boxStyle}>
        <div className="messages-container">
          <ul className="messages-list">
            {messages.map((msg, index) => (
              <li
                key={index}
                style={{
                  color: msg.isUser ? "darkblue" : "darkgoldenrod",
                  textAlign: msg.isUser ? "left" : "right"
                }}
              >
                {msg.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type your query..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown} // Add the keydown event handler
          style={searchStyle}
        />
        <button onClick={handleSearch} style={buttonStyle}>
          Send
        </button>
      </div>
      <div className="response-container">
        <div className="response">{response}</div>
      </div>
    </div>
</>

        </div>

              
        );
    }

export default Bot;