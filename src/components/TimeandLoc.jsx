import React from "react";

function TimeandLoc() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Weekday, Date | Local time TIME
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">LOCATION</p>
      </div>
    </div>
  );
}

export default TimeandLoc;
