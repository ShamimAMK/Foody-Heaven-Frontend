"use client";

type BlogDetailsPage = {
	params: {
		blogid: string;
	};
};

const BlogDetailsPage = ({ params }) => {
	console.log(params.blogid);
	return <div>Blog Details Page{params.blogid}</div>;
};

export default BlogDetailsPage;
