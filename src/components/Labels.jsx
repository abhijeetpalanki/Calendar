import React, { useContext } from "react";
import GlobalContext from "./../context/GlobalContext";

const Labels = () => {
  const { labels, updateLabel } = useContext(GlobalContext);

  return (
    <>
      <p className="mt-10 font-bold text-gray-500">Label</p>
      {labels.map(({ label: lbl, checked }, idx) => (
        <label key={idx} className="items-center block mt-3">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 text-${lbl}-400 rounded focus:ring-0 cursor-pointer`}
          />
          <span className="ml-2 text-gray-700 capitalize">{lbl}</span>
        </label>
      ))}
    </>
  );
};

export default Labels;
