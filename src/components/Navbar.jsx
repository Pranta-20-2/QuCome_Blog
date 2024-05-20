import { useContext } from "react"
import logo from "../assets/QuCome.png"
import { AuthContext } from "../provider/AuthProvider"
import { Link, useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown, Tooltip } from "flowbite-react";
import toast from "react-hot-toast";
import { FaHome } from "react-icons/fa";
import { RiLoginCircleLine } from "react-icons/ri";
import { GiArchiveRegister } from "react-icons/gi";
import { ImBlogger } from "react-icons/im";
import { MdLibraryAdd } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";
const Navbar = () => {
  const navigate = useNavigate()
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = async () => {

    try {
      await logOut();
      navigate('/');
      toast.success('Logout Successfully')
    }
    catch (err) {
      toast.error(err?.message)
    }
  }
  return (
    <div className='navbar bg-base-100 shadow-sm mb-10'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
          <img className='w-auto h-14' src={logo} alt='' />
          <div className='font-bold text-3xl'>Qu<span className=" text-green-400">Come</span></div>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu md:menu-horizontal px-1'>
          <Link to="/" className="mr-3">
            <Button gradientDuoTone="greenToBlue">
              <FaHome className="mr-3 h-4 w-4"></FaHome>
              Home
            </Button>
          </Link>

          {
            user ?
              <>
                <Link to="/allBlogs" className="mr-3">
                  <Button gradientDuoTone="greenToBlue">
                    <ImBlogger className="mr-3 h-5 w-4" />
                    All Blogs
                  </Button>
                </Link>
                <Link to="/addBlogs" className="mr-3">
                  <Button gradientDuoTone="greenToBlue">
                    <MdLibraryAdd className="mr-3 h-5 w-4" />
                    Add Blogs
                  </Button>
                </Link>
                <Link to="/featured" className="mr-3">
                  <Button gradientDuoTone="greenToBlue">
                    <MdLibraryAdd className="mr-3 h-5 w-4" />
                    Featured Blogs
                  </Button>
                </Link>
                <Link to="/wish" className="mr-3">
                  <Button gradientDuoTone="greenToBlue">
                    <TbJewishStar className="mr-3 h-5 w-4" />
                    Wish List
                  </Button>
                </Link>
                <Link to="/my-blogs" className="mr-3">
                  <Button gradientDuoTone="greenToBlue">
                    <MdLibraryAdd className="mr-3 h-5 w-4" />
                    My Blogs
                  </Button>
                </Link>
              </>
              :
              <></>
          }


          {
            user ?
              <Tooltip content="Click" placement="right">
                <Dropdown
                  referrerPolicy="no-referrer"
                  label={<Avatar className=" ml-7 hover:'click'" alt="User settings" img={user?.photoURL} rounded />}
                  arrowIcon={false}
                  inline
                >
                  <Dropdown.Header>
                    <span className="block text-sm">{user?.displayName}</span>
                    <span className="block truncate text-sm font-medium">{user?.email}</span>
                  </Dropdown.Header>
                  <Link to="/allBlogs">
                    <Dropdown.Item >All Blogs</Dropdown.Item>
                  </Link>
                  <Link to="/addBlogs">
                    <Dropdown.Item >Add Blogs</Dropdown.Item>
                  </Link>
                  <Link to="/my-blogs">
                    <Dropdown.Item >My Blogs</Dropdown.Item>
                  </Link>
                  <Dropdown.Item>Settings</Dropdown.Item>
                  <Dropdown.Item>Earnings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown>
              </Tooltip>
              :
              <>
                <Link to="/login" className="mr-3">
                  <Button gradientDuoTone="greenToBlue">
                    <RiLoginCircleLine className="mr-3 h-5 w-4" />
                    Login
                  </Button>
                </Link>

                <Link to="/registration" className="mr-3">
                  <Button gradientDuoTone="greenToBlue">
                    <GiArchiveRegister className="mr-3 h-5 w-4" />
                    Register
                  </Button>

                </Link>
              </>

          }
        </ul>

      </div>
    </div>
  )
}

export default Navbar