import { useParams } from "react-router-dom";
import { blogData } from "../data/blog";
import { useEffect } from "react";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { blogId } = useParams();

  const blog = blogData.blogs.find((b) => b.id === blogId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return <div className="blog-container">Blog not found.</div>;
  }

  const renderContentItem = (item, index) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="paragraph">
            {item.content}
          </p>
        );

      case "list":
        return (
          <div key={index} className="list-block">
            <h3 className="list-title">{item.title}</h3>
            <ul className="list-items">
              {item.content.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        );

      case "faqs":
        return (
          <div key={index} className="faq-block">
            <h2 className="faq-title">{item.title}</h2>
            <div className="faq-items">
              {item.content.map((faq, idx) => (
                <>
                  <div key={idx} className="faq-item">
                    <span className="faq-question">
                      <strong>Q:</strong> {faq.question}
                    </span>
                    <br />
                    <span className="faq-answer">
                      <strong>A:</strong> {faq.answer}
                    </span>
                  </div>
                  <br />
                </>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="ls section_padding_top_130 section_padding_bottom_100 columns_margin_top_0 columns_margin_bottom_30">
      <div className="container">
        <h1 className="blog-title">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="blog-image" />
        {blog.content.map((item, index) => renderContentItem(item, index))}
      </div>
    </section>
  );
};

export default BlogDetail;
