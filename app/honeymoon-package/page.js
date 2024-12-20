import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";

const honeymoonPackages = [
  {
    title: "Romantic Backwaters Getaway",
    description: "Experience the serene beauty of Kerala's backwaters with your loved one.",
    duration: "2 days",
    people: "2 people",
    image: "/assets/images/packages/backwaters.jpg",
    link: "/destination"
  },
  {
    title: "Munnar Hill Escape",
    description: "Relax and unwind in the lush green hills of Munnar with your partner.",
    duration: "3 days",
    people: "2 people",
    image: "/assets/images/packages/munnar-hills.jpg",
    link: "/destination"
  },
  {
    title: "Alleppey Houseboat",
    description: "Enjoy a romantic stay in a traditional houseboat on the tranquil backwaters.",
    duration: "2 days",
    people: "2 people",
    image: "/assets/images/packages/alleppy-houseboat.jpg",
    link: "/destination"
  }
];

const HoneymoonPage = () => {
  return (
    <ReveloLayout>
      <Banner
        pageTitle={"Honeymoon Packages"}
        pageName={"Honeymoon Packages"}
        imageUrl="/assets/images/banner/honeymoon-banner.jpg"
        search={true}
      />
      {/* Honeymoon Packages Grid Area start */}
      <section className="tour-grid-page py-100 rel z-2">
        <div className="container mb-50">
          <div className="row justify-content-center">
            {honeymoonPackages.map((packageItem, index) => (
              <div key={index} className="col-xl-4 col-md-6 d-flex justify-content-center">
                <div
                  className="destination-item tour-grid style-three bgc-lighter"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-delay={50}
                  data-aos-offset={50}
                >
                  <div className="image">
                    <img
                      src={packageItem.image}
                      alt={packageItem.title}
                    />
                  </div>
                  <div className="content">
                    <h5>
                      <Link href={packageItem.link}>{packageItem.title}</Link>
                    </h5>
                    <p>{packageItem.description}</p>
                    <ul className="blog-meta">
                      <li>
                        <i className="far fa-clock" /> {packageItem.duration}
                      </li>
                      <li>
                        <i className="far fa-user" /> {packageItem.people}
                      </li>
                    </ul>
                    <div className="destination-footer">
                      <Link
                        href="https://enquiry.keraladrives.com"
                        target="_blank"
                        className="theme-btn style-two style-three"
                      >
                        <span data-hover="Enquire Now">Enquire Now</span>
                        <i className="fal fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ReveloLayout>
  );
};

export default HoneymoonPage;
