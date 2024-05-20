import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BlogsCard from './BlogsCard';
import useBlogs from '../Hooks/useBlogs';
const TabsCategories = () => {
    const blogs = useBlogs([])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Personal Blogs</Tab>
                    <Tab>Business Blogs</Tab>
                    <Tab>Marketing Blogs</Tab>
                    <Tab>LifeStyle Blogs</Tab>
                    <Tab>Health Blogs</Tab>
                    <Tab>Religious Blogs</Tab>
                </TabList>

                <TabPanel>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.filter(blog => blog.category === 'Personal Blogs').map(blog => <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.filter(blog => blog.category === 'Business Blogs').map(blog => <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.filter(blog => blog.category === 'Marketing Blogs').map(blog => <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.filter(blog => blog.category === 'LifeStyle Blogs').map(blog => <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.filter(blog => blog.category === 'Health Blogs').map(blog => <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            blogs.filter(blog => blog.category === 'Religious Blogs').map(blog => <BlogsCard key={blog._id} blog={blog}></BlogsCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default TabsCategories;