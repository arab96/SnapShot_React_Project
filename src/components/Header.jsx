import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div>
            <h1 className="text-center mb-8 mt-8 font-black">SnapShot</h1>
            <form className="flex justify-center">
                <input className="px-4 mr-3 rounded-lg outline-none bg-gray-100 text-2xl" type="text" placeholder="Search" />
                <button className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-2xl">Search</button>
            </form>
            </div>
            <div className="flex justify-center">
                    <ul className="mt-8">
                        <Link to="/mountain" className="bg-gray-700 hover:bg-gray-900 px-2 py-1 rounded-lg mr-3 text-white text-2xl">Mountain</Link>
                        <Link to="/beaches" className="bg-gray-700 hover:bg-gray-900 px-2 py-1 rounded-lg mr-3 text-white text-2xl" href="">Beaches</Link>
                        <Link to="/birds" className="bg-gray-700 hover:bg-gray-900 px-2 py-1 rounded-lg mr-3 text-white text-2xl" href="">Birds</Link>
                        <Link to="/food" className="bg-gray-700 hover:bg-gray-900 px-2 py-1 rounded-lg mr-3 text-white text-2xl" href="">Foods</Link>
                    </ul>
            </div>
        </div>
    );
};
export default Header;