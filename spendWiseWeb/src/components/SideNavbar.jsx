import React, {useState} from "react";

export default function SideNavbar() {
    const [selected, setSelected] = useState("Overview")

    const handleSelect = (item) => {
        setSelected(item);
    }

    const handleLogout = () => {
        console.log("Logged Out")
    }

    // check
    
    return (
        <div className="absolute left-0 bg-black w-16 h-full flex flex-col items-center justify-center space-y-12">
            <i onClick={() => handleSelect('Overview')} className={`fi fi-rr-overview cursor-pointer hover:text-2xl duration-300 ${selected === 'Overview' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}></i>
            <i onClick={() => handleSelect('Wallet')} className={`fi fi-rr-wallet cursor-pointer hover:text-2xl duration-300 ${selected === 'Wallet' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}></i>
            <i onClick={() => handleSelect('Stats')} className={`fi fi-rr-stats cursor-pointer hover:text-2xl duration-300 ${selected === 'Stats' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}></i>
            <i onClick={() => handleSelect('Calendar')} className={`fi fi-rr-calendar cursor-pointer hover:text-2xl duration-300 ${selected === 'Calendar' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}></i>
            <i onClick={() => handleSelect('Receipt')} className={`fi fi-rr-receipt cursor-pointer hover:text-2xl duration-300 ${selected === 'Receipt' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}></i>
            <i onClick={() => handleSelect('Settings')} className={`fi fi-rr-settings cursor-pointer hover:text-2xl duration-300 ${selected === 'Settings' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}></i>

            <i onClick={handleLogout} className="absolute bottom-5 fi fi-rr-exit text-white text-2xl hover:text-3xl transition-all duration-300"></i>
        </div>
    )
}