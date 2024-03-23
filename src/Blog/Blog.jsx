import {
    Blog,
    BlogItems,
    BlogImg,
    BlogItem,
    BlogDiscript,
    BlogItemsCenter,
    BlogITime,
    BlogVector,
    BlogTitle,
    BlogTitleP,
    BlogGradient,
    BlogBlogP,
    BlogTimeP,
} from "./Blog.styled";

import Austin from "../images/austin-distel-rxpThOwuVgE-unsplash.png";
import Docusign from "../images/docusign-7RWBSYA9Rro-unsplash.png";
import Brooke from "../images/brooke-cagle-g1Kr4Ozfoac-unsplash.png";
import Docusign1 from "../images/docusign-BbSBf5uv50A-unsplash.png";
import Time from "../images/svg/Time.svg";
import Vector from "../images/vector-blog.png";

const BlogSection = () => {
    return (

    <Blog>
        <div>
            <BlogTitle>Latest from our blog post</BlogTitle>
            <BlogTitleP>At transcosmos America we view innovation as a global imperative and drive
                those<br /> global innovations into executable local solutions.</BlogTitleP>
        </div>
        <BlogItems>
            <BlogItem>
                <BlogGradient><BlogImg src={Austin} alt="" /> </BlogGradient>
                    <BlogDiscript>
                        <BlogITime><BlogImg src={Time} alt="" />
                            <BlogTimeP >January 01, 2021</BlogTimeP >
                        </BlogITime>
                        <BlogBlogP>Business mistakes to avoid when starting a business</BlogBlogP>
                    </BlogDiscript>
            </BlogItem>
            <BlogItemsCenter>
            <BlogItem>
                        <BlogGradient><BlogImg src={Docusign} alt="" /></BlogGradient>
                    <BlogDiscript>
                        <BlogITime><BlogImg src={Time} alt="" />
                            <BlogTimeP >January 01, 2021</BlogTimeP >
                        </BlogITime>
                        <BlogBlogP>Investment update, successful people ask better questions</BlogBlogP>
                    </BlogDiscript>
            </BlogItem>
            <BlogItem>
                    <BlogGradient><BlogImg src={Brooke} alt="" /></BlogGradient>
                    <BlogDiscript>
                        <BlogITime><BlogImg src={Time} alt="" />
                            <BlogTimeP >January 01, 2021</BlogTimeP >
                        </BlogITime>
                        <BlogBlogP>Business mistakes to avoid when starting a business</BlogBlogP>
                    </BlogDiscript>
            </BlogItem>
            </BlogItemsCenter>
            <BlogItem>
                <BlogGradient><BlogImg src={Docusign1} alt="" /></BlogGradient>
                <BlogDiscript>
                    <BlogITime><BlogImg src={Time} alt="" />
                        <BlogTimeP >January 01, 2021</BlogTimeP>
                    </BlogITime>
                    <BlogBlogP>Utilize these nine resources to help you take the stress out of preparing your
                        taxes</BlogBlogP>
                </BlogDiscript>
            </BlogItem>
            </BlogItems >
            <BlogVector src={Vector} alt="" />
        
    </Blog>
);
};
export default BlogSection;
