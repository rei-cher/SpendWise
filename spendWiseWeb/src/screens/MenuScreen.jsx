import React from "react";
import DashboardOverviewScreen from "./DashboardOverviewScreen";

export default function MenuScreen({
    selectedView,
    selectedIcon
}) {
    return (
        <div>
            {selectedView === 'Dashboard' && 
             selectedIcon === 'Overview' &&
                <div className="flex-1 flex p-10">
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