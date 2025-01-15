import React from "react";
import DashboardOverviewScreen from "./DashboardOverviewScreen";

export default function MenuScreen({
    selectedView,
    selectedIcon
}) {
    return (
        <div className="h-full">
            {selectedView === 'Dashboard' && 
             selectedIcon === 'Overview' &&
                <div className="p-10 h-full">
                    <DashboardOverviewScreen/>   
                </div>
            }
            {selectedView === 'Statistics' && 
             selectedIcon === 'Overview' &&
                <div>
                    Welcome to the Statistics    
                </div>
            }
        </div>
    )
}