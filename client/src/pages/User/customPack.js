import React, { useState, useEffect } from "react";
import axios from "axios"; // You'll need to install axios for making API requests
import Footer from "../components/footer";
import Header from "../components/header";

function CustomPack() {
    const [restaurantOptions, setRestaurantOptions] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState("");
    const [decorationStyles, setDecorationStyles] = useState([]);
    const [selectedDecoration, setSelectedDecoration] = useState("");
    const [entertainmentOptions, setEntertainmentOptions] = useState([]);
    const [selectedEntertainment, setSelectedEntertainment] = useState("");
    const [showEntertainmentDesc, setShowEntertainmentDesc] = useState(false);
    const [showDecorationDesc, setShowDecorationDesc] = useState(false);
    //   const [showWriteMessage, setShowWriteMessage] = useState(false);
    //   const [customizedMessage, setCustomizedMessage] = useState("");
    // const [customizedEntertainment, setCustomizedEntertainment] = useState("");
    // const [customizedDecoration, setCustomizedDecoration] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedDateRanges, setSelectedDateRanges] = useState([]);
    const [starterOptions, setStarterOptions] = useState([]);
    const [selectedStarter, setSelectedStarter] = useState("");
    const [mainOptions, setMainOptions] = useState([]);
    const [selectedMain, setSelectedMain] = useState("");
    const [dessertOptions, setDessertOptions] = useState([]);
    const [selectedDessert, setSelectedDessert] = useState("");
    const [externalSurprise, setExternalSurprise] = useState("");
    const [types, setTypes] = useState([]);
    const [restaurantNames, setRestaurantNames] = useState([]);
    const [selectedRestaurantName, setSelectedRestaurantName] = useState("");


    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        setSelectedRestaurant(""); // Clear the selected restaurant when type changes
      };

    const handleDayChange = (event) => {
        setSelectedDays(event.target.value);
    };

    const handleDateChange = (event) => {
        setSelectedDays(event.target.value);
    };

    useEffect(() => {
        // Fetch restaurant types
        axios
          .get("/restaurant/restypes")
          .then((response) => {
            setRestaurantOptions(response.data); // Update state with fetched types
          })
          .catch((error) => {
            console.error("Error fetching restaurant types:", error);
          });
      }, []);

    //   const handleTypeChange = async (event) => {
    //     const selectedType = event.target.value;
    //     setSelectedType(selectedType);
    
    //     if (selectedType) {
    //       const selectedTypeDetails = types.find(
    //         (typeData) => typeData._id === selectedType
    //       );
    //       if (selectedTypeDetails) {
    //         const names = selectedTypeDetails.details.map(
    //           (detail) => detail.restaurantInfo[0].rest_name
    //         );
    //         setRestaurantNames(names);
    //         setSelectedRestaurantName("");
    //       }
    //     } else {
    //       setRestaurantNames([]);
    //       setSelectedRestaurantName("");
    //     }
    //   };
      
    useEffect(() => {
        if (selectedType !== "") {
            axios
                .get(`/api/restaurants?type=${selectedType}`)
                .then((response) => {
                    setRestaurantOptions(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching restaurant options:", error);
                });
        }
    }, [selectedType]);

    useEffect(() => {
        if (selectedRestaurant !== "") {
            // Fetch available days for the selected restaurant
            axios
                .get(`/api/availableDays?restaurant=${selectedRestaurant}`)
                .then((response) => {
                    setSelectedDays(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching available days:", error);
                });
        }
    }, [selectedRestaurant]);
    useEffect(() => {
        if (selectedRestaurant !== "") {
            // Fetch date ranges for the selected restaurant
            axios
                .get(`/api/dateRanges?restaurant=${selectedRestaurant}`)
                .then((response) => {
                    setSelectedDateRanges(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching date ranges:", error);
                });
        }
    }, [selectedRestaurant]);

    const generateDateOptions = () => {
        let options = [];
        selectedDateRanges.forEach((range) => {
            const [start, end] = range.split("-");
            for (let i = parseInt(start); i <= parseInt(end); i++) {
                options.push(i);
            }
        });
        return options;
    };

    // Fetch menu items and costs for the selected restaurant
    useEffect(() => {
        if (selectedRestaurant !== "") {
            axios
                .get(`/api/menuItems?restaurant=${selectedRestaurant}`)
                .then((response) => {
                    const menuItems = response.data;
                    const starters = menuItems.filter(
                        (item) => item.food_type === "starter"
                    );
                    const mains = menuItems.filter((item) => item.food_type === "main");
                    const desserts = menuItems.filter(
                        (item) => item.food_type === "dessert"
                    );
                    setStarterOptions(starters);
                    setMainOptions(mains);
                    setDessertOptions(desserts);
                })
                .catch((error) => {
                    console.error("Error fetching menu items:", error);
                });
        }
    }, [selectedRestaurant]);
    useEffect(() => {
        if (selectedRestaurant !== "") {
            axios
                .get(`/api/entertainmentOptions?restaurant=${selectedRestaurant}`)
                .then((response) => {
                    const options = response.data;
                    setEntertainmentOptions(options);
                })
                .catch((error) => {
                    console.error("Error fetching entertainment options:", error);
                });

            axios
                .get(`/api/decorationOptions?restaurant=${selectedRestaurant}`)
                .then((response) => {
                    const options = response.data;
                    setDecorationStyles(options);
                })
                .catch((error) => {
                    console.error("Error fetching decoration options:", error);
                });
        }
    }, [selectedRestaurant]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Check if all required fields are selected
        if (
            selectedType === "" ||
            selectedRestaurant === "" ||
            selectedDecoration === "" ||
            selectedEntertainment === "" ||
            selectedDays === "" ||
            selectedDateRanges === "" ||
            selectedStarter === "" ||
            selectedMain === "" ||
            selectedDessert === ""
        ) {
            alert("Please select all required options.");
            return;
        }

        // Prepare the data to be stored in the database
        const formData = {
            selectedType,
            selectedRestaurant,
            selectedDecoration,
            selectedEntertainment,
            selectedDays,
            selectedDateRanges,
            selectedStarter,
            selectedMain,
            selectedDessert,
            externalSurprise,
        };

        // Send the data to the server for storage (adjust the API endpoint)
        axios
            .post("/api/storeCustomization", formData)
            .then((response) => {
                alert("Customization data stored successfully!");
            })
            .catch((error) => {
                console.error("Error storing customization data:", error);
            });
    };

    // JSX rendering
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* x-icon */}
            <link
                rel="shortcut icon"
                href="assets/images/x-icon.png"
                type="image/x-icon"
            />
            {/* Other css */}
            <link rel="stylesheet" href="assets/css/animate.css" />
            <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="assets/css/icofont.min.css" />
            <link rel="stylesheet" href="assets/css/swiper.min.css" />
            <link rel="stylesheet" href="assets/css/style.css" />
            <title>TuruLav</title>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        *{\n            padding: 0;\n        }\n        .size{\n            width: 800px;\n        }\n        .align{\n            width: 50%;\n            padding: 0px;\n        }\n    ",
                }}
            />
            {/* ==========Header Section Starts Here========== */}
                <Header></Header>
            {/* ==========Header Section Ends Here========== */}
            {/* Contact Us Section Start Here */}
            <center>
                <article className="contact-form-wrapper">
                    <div className="contact-form">
                        <h4>Date Korabo !!!</h4>
                        <p className="mb-5">Customize your plan with your expectation.</p>
                        <div className="col-xl-6 size">
                            <aside className="mt-5 mt-xl-0"></aside>

                            <div className="widget search-widget">
                                <div className="widget-inner">
                                    <div className="widget-title">
                                        <h5>Customize Section</h5>
                                    </div>
                                    <div className="widget-content">
                                        <p style={{ fontSize: '24px', color: 'pink' }}>Design with your desired Expectations</p>
                                        <form action="/" className="banner-form">
                                            <div className="gender">
                                                <h6 style={{ color: "rgb(0, 255, 132)" }}>
                                                    Types of Restaurants
                                                </h6>
                                                <div className="custom-select right w-100">
                                                    <select value={selectedType} onChange={handleTypeChange}>
                                                        <option value="">Select Restaurant Type</option>
                                                        {restaurantOptions.map((type, index) => (
                                                            <option key={index} value={type}>
                                                            {type}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                            </div>
                                            <div className="gender">
                                                <h6 style={{ color: "rgb(0, 255, 132)" }}>
                                                    Select Restaurant
                                                </h6>
                                                <div className="custom-select right w-100">
                                                    <select
                                                        value={selectedRestaurant}
                                                        onChange={(e) =>
                                                            setSelectedRestaurant(e.target.value)
                                                        }
                                                    >
                                                        <option value="">Select Restaurant</option>
                                                        {restaurantNames.map((restaurant) => (
                                                            <option key={restaurant} value={restaurant}>
                                                                {restaurant}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="gender">
                                                <h6 style={{ color: "rgb(0, 255, 132)" }}>
                                                    Decoration Style:
                                                </h6>
                                                <div className="custom-select right w-100">
                                                    <select
                                                        value={selectedDecoration}
                                                        onChange={(e) => {
                                                            setSelectedDecoration(e.target.value);
                                                            setShowDecorationDesc(false);
                                                        }}
                                                    >
                                                        <option value="">Select a style</option>
                                                        {decorationStyles.map((option) => (
                                                            <option key={option._id} value={option.style}>
                                                                {option.style} - {option.cost}
                                                            </option>
                                                        ))}
                                                        <option value="customized">Customized</option>
                                                    </select>
                                                </div>
                                                {selectedDecoration === "customized" && (
                                                    <div>
                                                        {/* <input
                                                            type="text"
                                                            cols={100}
                                                            rows={4}
                                                            placeholder="Enter your customized decoration style"
                                                            value={customizedDecoration}
                                                            onChange={(e) => setCustomizedDecoration(e.target.value)}
                                                            
                                                        /> */}
                                                        <textarea
                                                            style={{ color: "black" }}
                                                            name
                                                            id
                                                            cols={91}
                                                            rows={4}
                                                            placeholder="write your message"
                                                            defaultValue={"Write down your Desired Decorations!"}
                                                        />
                                                    </div>
                                                )}
                                                {showDecorationDesc && (
                                                    <div>
                                                        {/* Display selected decoration_desc here */}
                                                    </div>
                                                )}
                                            </div>


                                            <div className="age">
                                                <h6 style={{ color: "rgb(0, 255, 132)" }}>Choose Day:</h6>
                                                <div className="right d-flex justify-content-between w-100">
                                                    <div className="custom-select">
                                                        <select value={selectedDays} onChange={handleDayChange}>
                                                            <option value="">Select Day</option>
                                                            {generateDateOptions().map((date) => (
                                                                <option key={date} value={date}>
                                                                    {date}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    {/* ... other JSX ... */}
                                                </div>
                                            </div>
                                            <div className="age">
                                                <h6 style={{ color: "rgb(0, 255, 132)" }}>Choose Time :</h6>
                                                <div className="right d-flex justify-content-between w-100">
                                                    <div className="custom-select">
                                                        <select
                                                            value={selectedDays}
                                                            onChange={handleDateChange}
                                                        >
                                                            <option value="">Select Time</option>
                                                            {generateDateOptions().map((date) => (
                                                                <option key={date} value={date}>
                                                                    {date}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    {/* ... other JSX ... */}
                                                </div>
                                            </div>
                                            <div>
                                                {/* ... other JSX ... */}
                                                <div className="city">
                                                    <h6 style={{ color: "rgb(0, 255, 132)" }}>
                                                        Menu Option :
                                                    </h6>
                                                    {/* <h6>Choose Your Menu Items</h6> */}
                                                </div>
                                                <div className="age">
                                                    <div className="right d-flex justify-content-between w-100">
                                                        <div className="custom-select">
                                                            <select
                                                                value={selectedStarter}
                                                                onChange={(e) => setSelectedStarter(e.target.value)}
                                                            >
                                                                <option value="">Starter</option>
                                                                {starterOptions.map((item) => (
                                                                    <option key={item._id} value={item.food_name}>
                                                                        {item.food_name} - {item.cost}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="custom-select">
                                                            <select
                                                                value={selectedMain}
                                                                onChange={(e) => setSelectedMain(e.target.value)}
                                                            >
                                                                <option value="">Main Menu</option>
                                                                {mainOptions.map((item) => (
                                                                    <option key={item._id} value={item.food_name}>
                                                                        {item.food_name} - {item.cost}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                        <div className="custom-select">
                                                            <select
                                                                value={selectedDessert}
                                                                onChange={(e) => setSelectedDessert(e.target.value)}
                                                            >
                                                                <option value="">Dessert</option>
                                                                {dessertOptions.map((item) => (
                                                                    <option key={item._id} value={item.food_name}>
                                                                        {item.food_name} - {item.cost}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ... other JSX ... */}
                                            </div>
                                            <div className="gender">
                                                <h6 style={{ color: "rgb(0, 255, 132)" }}>
                                                    Entertainment Options:
                                                </h6>
                                                <div className="custom-select right w-100">
                                                    <select
                                                        value={selectedEntertainment}
                                                        onChange={(e) => {
                                                            setSelectedEntertainment(e.target.value);
                                                            setShowEntertainmentDesc(false);
                                                        }}
                                                    >
                                                        <option value="">Select an option</option>
                                                        {entertainmentOptions.map((option) => (
                                                            <option key={option._id} value={option.option}>
                                                                {option.option} - {option.cost}
                                                            </option>
                                                        ))}
                                                        <option value="customized">Customized</option>
                                                    </select>
                                                </div>
                                                {selectedEntertainment === "customized" && (
                                                    <div>
                                                        {/* <button
                                                                onClick={() => {
                                                                    const message = prompt(
                                                                    "Write your customized desire:"
                                                                    );
                                                                    setCustomizedMessage(message);
                                                                }}
                                                                >
                                                                Write Your Desire
                                                            </button> */}
                                                        <textarea
                                                            style={{ color: "black" }}
                                                            name
                                                            id
                                                            cols={91}
                                                            rows={4}
                                                            placeholder="write your message"
                                                            defaultValue={"Write down your Desired Decorations!"}
                                                        />
                                                        {/* <input
                                                            type="text"
                                                            placeholder="Enter your customized decoration style"
                                                            value={customizedDecoration}
                                                            onChange={(e) => setCustomizedEntertainment(e.target.value)}
                                                        /> */}
                                                    </div>
                                                )}
                                                {showEntertainmentDesc && (
                                                    <div>
                                                        {/* Display selected entertainment_desc here */}
                                                    </div>
                                                )}
                                            </div>


                                            <div className="interest">
                                                <h6 style={{ color: "rgb(0, 255, 132)" }}>External Surprise</h6>
                                                <textarea
                                                    style={{ color: "black", width: "100%" }}
                                                    name=""
                                                    id=""
                                                    cols="100"
                                                    rows="4" // Adjust the height as needed
                                                    placeholder="Write your message"
                                                    value={externalSurprise}
                                                    onChange={(e) => setExternalSurprise(e.target.value)}
                                                ></textarea>
                                            </div>
                                            <button className="lab-btn" onClick={handleFormSubmit}>
                                                Confirm Customizations
                                            </button>
                                        </form>

                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </article>
            </center>

            {/* Contact Us Section ENding Here */}
            {/* ================ footer Section start Here =============== */}

            <Footer> </Footer>
            {/* ================ footer Section end Here =============== */}
            {/* scrollToTop start here */}
            <a href="#" className="scrollToTop">
                <i className="icofont-rounded-up" />
            </a>
            {/* scrollToTop ending here */}
            {/* All Scripts */}
        </div>
    );
}
export default CustomPack;