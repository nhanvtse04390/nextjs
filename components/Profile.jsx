import PromptCard from "./PromptCard";
import PromptCardList from "./PromptCard"

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
    return (
        <section className='w-full'>
            <h1 className='head_text text-left'><span className='blue_gradient'>{name}</span> Profile</h1>
            <p className='desc text-left'>{desc}</p>
            <div className='mt-10 prompt_layout'>
                {data.map((post) => (
                    <PromptCardList
                        key={post.id}
                        post={post}
                        handleEdit={() => handleEdit && handleEdit(post)}
                        handleDelete={() => handleDelete && handleDelete(post)}
                    />
                ))}
            </div>
        </section>
    );
}

export default Profile;