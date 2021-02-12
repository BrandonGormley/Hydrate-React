import React, { useState } from 'react';

const InputButton = () => {
  const [water, setWater] = useState('');

  return (
    <React.Fragment>
      <form>
        <label htmlFor="lbs"></label>
        <input
          type="text"
          id="lbs"
          name="lbs"
          className="main-input"
          placeholder="100lbs"
          value={water}
          onChange={e => {
            setWater(e.target.value);
          }}
        />
        <p className="water-total">{water * 0.67} fl. ounces</p>
      </form>
    </React.Fragment>
  );
};

export default InputButton;
