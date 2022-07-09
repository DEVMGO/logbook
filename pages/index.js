import {Fragment} from "react";
import Hero from "../components/hero/hero";
import IndexAbout from "../components/index-about/index-about";
import Process from "../components/process/process";
import {getAllProcessItems} from "../data/process";
import FeaturedPosts from "../components/featured-posts/featured-posts";

const HomePage = () => {

    const processItems = getAllProcessItems();

  return (
      <Fragment>
          <Hero />
          <IndexAbout />
          <div className={`txt-center how-wrapper`}>
              <h2 className={`howTxt`}>
                  چه جوری با دیجی لاگ بوک
              </h2>
              <p className={`green-txt fly`}>
                  پروازهامون
              </p>
              <br/>
              <span>
                    رو
                </span>
              <span className={`green-txt`}>
                    بخاطر
                </span>
              <span>
                    بسپاریم
                </span>
          </div>
          <Process processItems={processItems} />
          <FeaturedPosts />
      </Fragment>
  )
};

HomePage.layout = "L1";
export default HomePage;