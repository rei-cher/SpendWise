import React, {useState} from "react";

export default function TopNavbar() {
    const [selected, setSelected] = useState('Dashboard')

    const handleSelect = (item) => {
        setSelected(item);
    }

    return (
        <div className="absolute top-0 bg-black h-16 w-full">
            <div className="flex flex-row items-center justify-start space-x-12 mt-4 ml-28">
                <text 
                    className={`cursor-pointer ${selected === 'Dashboard' ? 'text-blue-500 font-bold text-2xl ' : 'text-white text-lg hover:scale-125 duration-300'}`}
                    onClick={()=>handleSelect('Dashboard')}>
                        Dashboard
                </text>

                <text 
                    className={`cursor-pointer ${selected === 'Statistics' ? 'text-blue-500 font-bold text-2xl ' : 'text-white text-lg hover:scale-125 duration-300'}`}
                    onClick={()=>handleSelect('Statistics')}>
                        Statistics
                </text>
            </div>
        </div>
    )
}