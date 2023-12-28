import React, { useState, useEffect } from 'react';

const Custom = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [selectedRestaurantName, setSelectedRestaurantName] = useState('');

  useEffect(() => {
    fetch('/restaurant/alltypes')
      .then(response => response.json())
      .then(data => setTypes(data))
      .catch(error => console.error(error));
  }, []);

  const handleTypeChange = async (event) => {
    const selectedType = event.target.value;
    setSelectedType(selectedType);

    if (selectedType) {
      const selectedTypeDetails = types.find(typeData => typeData._id === selectedType);
      if (selectedTypeDetails) {
        const names = selectedTypeDetails.details.map(detail => detail.restaurantInfo[0].rest_name);
        setRestaurantNames(names);
        setSelectedRestaurantName('');
      }
    } else {
      setRestaurantNames([]);
      setSelectedRestaurantName('');
    }
  };

// Fetch the list of restaurant types and details
fetch('/restaurant/alltypes')
  .then(response => response.json())
  .then(data => setTypes(data))
  .catch(error => console.error(error));


  return (
    <div className="container">
      <h1 className="text-muted mb-0">Restaurant Selection</h1>
      <select className="text-muted mb-0" value={selectedType} onChange={handleTypeChange}>
        <option value="">Select Type</option>
        {types.map((typeData) => (
          <option key={typeData._id} value={typeData._id}>
            {typeData._id}
          </option>
        ))}
      </select>

      {selectedType && (
        <select className="text-muted mb-0" value={selectedRestaurantName} onChange={(e) => setSelectedRestaurantName(e.target.value)}>
          <option value="">Select Restaurant Name</option>
          {restaurantNames.map((restaurantName, index) => (
            <option key={index} value={restaurantName}>
              {restaurantName}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Custom;




// import React, { useState  } from 'react';

// const Custom = () => {
// const subjectObject = {
//     "Front-End": {
//       "HTML": ["Tags", "Links", "Images", "Tables", "Lists", "Colors", "Attributes", "Classes", "Input", "Iframes", "Div/Span", "Metatags", "Headings", "Favicons"],
//       "CSS": ["Padding", "Margins", "Borders", "Display", "Icons", "Units", "z-index", "Pseudo-class", "Pseudo-element", "!important", "Text-Effect", "Mart-Function", "Transitions", "Animations", "Transform", "Variables", "Flexbox", "Grid", "Masking", "Media Query"],
//       "Bootstrap5": ['Accordion', 'Tooltips', 'Toasts', 'Navs & tabs', 'Carousel', 'Collapse', 'Alerts', 'Badge', 'Card', 'List group', 'Navbar', 'Pagination', 'Progress', 'Scrollspy', 'Spinners'],
//       "JavaScript": ["Variables", "Operators", "Functions", "Conditions", "Loops", "Array", "Object", "DOM", "Local-Storage", "API", "ES6"],
//       "React.JS": ['Components', 'JSX', 'State', 'Props', 'Lists & Keys', 'Styling', 'Life Cycle Method', 'Hooks', 'Form Handling', 'Data Handling', 'Custom Hooks', 'Context', 'Portals', 'Routing', 'State Management', 'Patterns', 'Anti-Patterns']
//     },
//     "Back-end": {
//       "Express.js": ['Routing and HTTP Methods', 'Middleware', 'Cookies', 'REST APIs', 'Scaffolding', 'Database Connectivity', 'Templating'],
//       "Node.js": ['REPL', 'package manager', 'callbacks', 'event loop', 'os', 'path', 'query string', 'cryptography', 'debugger', 'URL', 'DNS', 'Net', 'UDP', 'process', 'child processes', 'buffers', 'streams', 'file systems', 'global objects', 'web modules']
//     },
//     "Database": {
//       "MongoDB": ['Documents', 'Collections', 'Compass', 'Replica Sets', 'Sharding', 'Indexes', 'Aggregation Pipelines', 'MongoDB Cloud'],
//       "MySQL": ['Create TABLE', 'Insert Data Into Table', 'Select Query', 'Table Constraints', 'AND, OR, and NOT Operator', 'IN Operator', 'LIKE Operator', 'MySQL Aggregate Functions']
//     },
//     "Hybrid/Cross-Platform": {
//       "Electron JS": ['Main and Renderer Process', 'Browser Window', 'Quote Widget', 'IPC', 'Application Menu', 'Context Menu', 'Accelerators', 'Shell Module', 'Tray Module', 'CRUD File'],
//       "React-Native": ['React Native CLI', 'Ejecting Expo', 'State Hook', 'Styles & Style Sheet', 'List, ScrollView & RefreshControl', 'Alert & Toast Message'],
//       "NativeScript": []
//     }
//   };


//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [selectedTopic, setSelectedTopic] = useState('');
//   const [selectedSubTopic, setSelectedSubTopic] = useState('');

//   const handleSubjectChange = (event) => {
//     setSelectedSubject(event.target.value);
//     setSelectedTopic('');
//     setSelectedSubTopic('');
//   };

//   const handleTopicChange = (event) => {
//     setSelectedTopic(event.target.value);
//     setSelectedSubTopic('');
//   };

//   return (
//     <div className="container">
//       <h1 className="text-muted mb-0">RoadMap to Learn MERN Stack</h1>
//       <select className="text-muted mb-0" value={selectedSubject} onChange={handleSubjectChange}>
//         <option value="">Select Option</option>
//         {Object.keys(subjectObject).map((subject) => (
//           <option key={subject} value={subject}>
//             {subject}
//           </option>
//         ))}
//       </select>

//       {selectedSubject && (
//         <select className="text-muted mb-0" value={selectedTopic} onChange={handleTopicChange}>
//           <option value="">Select Option</option>
//           {Object.keys(subjectObject[selectedSubject]).map((topic) => (
//             <option key={topic} value={topic}>
//               {topic}
//             </option>
//           ))}
//         </select>
//       )}

//       {selectedTopic && (
//         <select className="text-muted mb-0" value={selectedSubTopic} onChange={(e) => setSelectedSubTopic(e.target.value)}>
//           <option value="">Select Option</option>
//           {subjectObject[selectedSubject][selectedTopic].map((subTopic, index) => (
//             <option key={index} value={subTopic}>
//               {subTopic}
//             </option>
//           ))}
//         </select>
//       )}
//     </div>
//   );
// };

// export default Custom;