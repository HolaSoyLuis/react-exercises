import React from 'react';

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map(function(item) {
      return <li key={item + 1}>{item}</li>;
    });
    // const renderFrameworks = frontEndFrameworks.map((item) =>
    //     <li key={item+1}>{item}</li>
    // );
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
  };

export default Frameworks;

// stateless component