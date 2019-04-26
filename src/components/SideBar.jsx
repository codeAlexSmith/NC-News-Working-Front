import React, { Component } from "react";
import { Router, Link } from "@reach/router";
function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />
            <Link to="/Topics">Topics</Link>
            <br />
            <Link to="/Articles">Articles</Link>
            <br />
            <Link to="/Authors">Authors</Link>
            
        </nav>
    );
}

function SideBar() {
    return (
        <div className='Sidebar'>
                <header className='Navigation-Title'>Navigation Menu</header>
                <Nav className = 'links'/>
                <table className ='Top-Articles-Table'>
                    <tbody>
                        <tr>
                            <td />
                            {"Top Articles"}
                        </tr>
                        <tr>
                            <td>1</td>
                            <td />
                            {"Article 1"}
                        </tr>
                        <tr>
                            <td>2</td>
                            <td />
                            {"Article 2"}
                        </tr>
                    </tbody>
                </table>
                <table className='Hot-Topics-Table'>
                    <tbody>
                        <tr>
                            <td />
                            {"Hot Topics "}
                        </tr>
                        <tr>
                            <td>1</td>
                            <td />
                            {"Earth is Flat"}
                        </tr>
                        <tr>
                            <td>2</td>
                            <td />
                            {"Earth is Not Round"}
                        </tr>
                    </tbody>
                </table>
                <table className='Trending-Authors-Table'>
                    <tbody>
                        <tr>
                            <td />
                            {"Trending Authors"}
                        </tr>
                        <tr>
                            <td>1</td>
                            <td />
                            {"Alex"}
                        </tr>
                        <tr>
                            <td>2</td>
                            <td />
                            {"Also Alex"}
                        </tr>
                    </tbody>
                </table>
            </div>
    );
}

export default SideBar