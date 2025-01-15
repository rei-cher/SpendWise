import React from "react";
import Budget from "../components/Budget";
import Cards from "../components/Cards";
import Income from "../components/Income";
import Spending from "../components/Spending";

export default function DashboardOverviewScreen() {
    return (
        <div className="grid grid-cols-2 gap-6 p-6 h-full">
            <Budget/>
            <Cards/>
            <Income/>
            <Spending/>
        </div>
    )
}