import Hero from "../_components/layout/Hero";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <Hero
        heading="About us"
        text="The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design."
      />

      <div className=" pt-18 pb-12">
        <div className="flex items-center sm:items-start sm:flex-row flex-col justify-between px-4 xl:gap-22  w-full  max-w-6xl mx-auto">
          <div className="">
            <div className="h-80 w-70 sm:h-110 sm:w-90 bg-amber-950 relative mb-8">
              <Image
                src={'/bg_images/img1.jpeg'}
                alt="ceo image"
                width={300} 
                height={400} 
                className=" h-80 w-70 sm:h-110 sm:w-90 object-cover  absolute -left-2 -bottom-2  sm:-left-4 sm:-bottom-4"
               />
            </div>

            <div className="xl font-semi-bold text-center font-semibold">
              Anonymous Name (Manager)
            </div>
          </div>
          <div className=" xl:max-w-2xl text-sm flex flex-col gap-4 xl:leading-6 text-justify">
            <p className="">
              The United Nations is an international organization founded in
              1945. Currently made up of 193 Member States, the UN and its work
              are guided by the purposes and principles contained in its
              founding Charter. The UN has evolved over the years to keep pace
              with a rapidly changing world. But one thing has stayed the same:
              it remains the one place on Earth where all the world’s nations
              can gather together, discuss common problems, and find shared
              solutions that benefit all of humanity. The Secretary-General is
              Chief Administrative Officer of the UN – and is also a symbol of
              the Organization&apos;s ideals and an advocate for all the world&apos;s
              peoples, especially the poor and vulnerable.
            </p>
            <p className="">
              The Secretary-General is appointed by the General Assembly on the
              recommendation of the Security Council for a 5-year, renewable
              term. The current Secretary-General, and the 9th occupant of the
              post, is António Guterres of Portugal, who took office on 1
              January 2017.
              <br /> On the 18th of June, 2021, Guterres was re-appointed to a
              second term, pledging as his priority to continue helping the
              world chart a course out of the COVID-19 pandemic.
            </p>

            <p className="">
              The United Nations is an international organization founded in
              1945. Currently made up of 193 Member States, the UN and its work
              are guided by the purposes and principles contained in its
              founding Charter. <br />
              The UN has evolved over the years to keep pace with a rapidly
              changing world. <br />
              But one thing has stayed the same: it remains the one place on
              Earth where all the world&apos;s nations can gather together, discuss
              common problems, and find shared solutions that benefit all of
              humanity. The Secretary-General is Chief Administrative Officer of
              the UN – and is also a symbol of the Organization&apos;s ideals and an
              advocate for all the world&apos;s peoples, especially the poor and
              vulnerable.
            </p>
            <p className="">
              The Secretary-General is appointed by the General Assembly on the
              recommendation of the Security Council for a 5-year, renewable
              term. <br />
              The current Secretary-General, and the 9th occupant of the post,
              is António Guterres of Portugal, who took office on 1 January
              2017. <br />
              On the 18th of June, 2021, Guterres was re-appointed to a second
              term, pledging as his priority to continue helping the world chart
              a course out of the COVID-19 pandemic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
