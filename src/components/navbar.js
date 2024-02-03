const NavBar = () => {
  return (
    <div className=' flex '>
      <nav className=' relative flex items-center z-30'>
        <ul className=' flex  gap-7 mr-5 '>
          <li>Home</li>
          <li>About</li>
          <li className=' whitespace-nowrap '>Contact Us</li>
          <li>FAQS</li>
        </ul>
        <div className=' flex gap-3'>
          <button className=' text-sm text-secondary bg-primary w-[142px] h-[46px] rounded-[30px] '>Login</button>
          <button className=' text-sm text-[skyblue] bg-transparent w-[142px] h-[46px] border-[1px] border-[skyblue] rounded-[30px] ' >Register</button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;