
const Nav = () => {
    return (
        <div className=" p-6 border border-b-gray-100">
            <div className="container mx-auto flex justify-between items-center ">
                <img src="/src/assets/logo-text.png" alt="" />
                <ul className="flex gap-10 items-center text-[#475569] font-medium text-[16px]">
                    <li className="text-[#DB2777]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="flex gap-4">
                    <button className="btn rounded-full text-[#334155]">Sign In</button>
                    <button className="btn btn-secondary rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;