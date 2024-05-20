

const FeaturedRow = ({ blog, serial }) => {
    // console.log(blog);
    const { _id, title, image, short_description, long_description, category, owner } = blog || {};
    return (
        < tr >
            <td>
                {serial}
            </td>
            <td>
                {title}
            </td>
            <td>
                {owner.email}
            </td>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={owner.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>


            </td>
            


        </tr >
    );
};

export default FeaturedRow;