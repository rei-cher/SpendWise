import React, {useState} from "react";
import MenuScreen from "./MenuScreen";

export default function MainScreen({
    selectedView,
    selectedIcon,
    setSelectedView,
    setSelectedIcon
}) {
    const handleSelectView = (item) => {
        setSelectedView(item);
    }

    const handleSelectIcon = (item) => {
        setSelectedIcon(item);
    }

    const handleLogout = () => {
        console.log("Logged out");
    }

    return (
        <div className="relative min-h-screen bg-gray-700 flex">
            {/* Top Navbar */}
            <div className="fixed top-0 bg-black h-16 w-full">
                <div className="flex flex-row items-center justify-start space-x-12 mt-4 ml-56">
                    <p 
                        className={`cursor-pointer ${selectedView === 'Dashboard' ? 'text-blue-500 font-bold text-2xl ' : 'text-white text-lg hover:scale-125 duration-300'}`}
                        onClick={()=>handleSelectView('Dashboard')}>
                            Dashboard
                    </p>

                    <p 
                        className={`cursor-pointer ${selectedView === 'Statistics' ? 'text-blue-500 font-bold text-2xl ' : 'text-white text-lg hover:scale-125 duration-300'}`}
                        onClick={()=>handleSelectView('Statistics')}>
                            Statistics
                    </p>
                </div>
            </div>

            {/* Side Navbar */}
            <div className="fixed left-0 bg-black w-16 h-full flex flex-col items-center justify-center space-y-12">
                <i 
                    onClick={() => handleSelectIcon('Overview')} 
                    className={`fi fi-rr-overview cursor-pointer hover:text-2xl duration-300 ${selectedIcon === 'Overview' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}
                >
                </i>

                <i 
                    onClick={() => handleSelectIcon('Wallet')} 
                    className={`fi fi-rr-wallet cursor-pointer hover:text-2xl duration-300 ${selectedIcon === 'Wallet' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}
                >
                </i>

                <i 
                    onClick={() => handleSelectIcon('Stats')} 
                    className={`fi fi-rr-stats cursor-pointer hover:text-2xl duration-300 ${selectedIcon === 'Stats' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}
                >
                </i>
                
                <i 
                    onClick={() => handleSelectIcon('Calendar')} 
                    className={`fi fi-rr-calendar cursor-pointer hover:text-2xl duration-300 ${selectedIcon === 'Calendar' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}
                >
                </i>
                
                <i 
                    onClick={() => handleSelectIcon('Receipt')} 
                    className={`fi fi-rr-receipt cursor-pointer hover:text-2xl duration-300 ${selectedIcon === 'Receipt' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}
                >
                </i>
                
                <i 
                    onClick={() => handleSelectIcon('Settings')} 
                    className={`fi fi-rr-settings cursor-pointer hover:text-2xl duration-300 ${selectedIcon === 'Settings' ? 'text-white bg-gray-500 p-3 rounded-lg text-3xl ' : 'text-white text-lg'} `}
                >  
                </i>

                <i onClick={handleLogout} className="absolute bottom-5 fi fi-rr-exit text-white text-2xl hover:text-3xl transition-all duration-300"></i>
            </div>

            

            {/* Logo */}
            <div className="z-70 fixed -top-3 -left-12">
                <img 
                    src="/SW_logo.svg" 
                    alt="Logo" 
                    className="scale-75 cursor-pointer"
                    onClick={() => {
                        setSelectedIcon('Overview'); 
                        setSelectedView('Dashboard')}
                    }
                />
            </div>

            <div className="flex-1 flex ml-16 pt-16">
                {/* Left Section */}
                <div className="w-3/4 min-h-full bg-gray-200 p-6 rounded-lg shadow-lg">
                    <MenuScreen
                        selectedView={selectedView}
                        selectedIcon={selectedIcon}
                    />
                </div>

                {/* Right Side Menu */}
                <div className="w-1/4 h-full bg-gray-500 rounded-lg pl-16 p-5">
                {/* Right Menu Content */}
                    Right Menu Content
                </div>
            </div>
        </div>
    )
}