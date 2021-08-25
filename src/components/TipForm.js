import React from 'react';


function TipForm () {






return (
    <form onSubmit className="new-poem-form">
      <div>Any Advice For Plant Owners??</div>
      <input placeholder="Name" />
      <div></div>
      <textarea placeholder="Leave a Tip..." />
      <div></div>
      <input type="submit" value="Leave a Tip" />
    </form>
  );
}

export default TipForm;
