import React from 'react';
import ZoomIn from "../svgs/ZoomIn"
import ZoomOut from "../svgs/ZoomOut"
function ZoomBtn({
    setFontSize,
    fontSize
   
  }) {
    return (
        <div>
            <button onClick={() => setFontSize(fontSize + 2)}><ZoomIn className="h-7 fill-[#0077b5] transition ease-in-out  hover:-translate-y-[2px] hover:scale-80  duration-300" /></button>
     <button onClick={() => setFontSize(fontSize - 2)}><ZoomOut className="h-7 fill-[#0077b5] transition ease-in-out  hover:-translate-y-[2px] hover:scale-80  duration-300" /></button>
        </div>
    );
}

export default ZoomBtn;