import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
const Modules = () => {
  return (
    <section id="modules" className="p-8 md:w-3/4 pb-20 my-10 h-fit flex flex-col justify-between bg-img bg-center bg-no-repeat bg-cover">
      <h2 className="text-4xl font-bold text-primary mb-16">Modules to Cover:</h2>
      <div className="space-y-6 w-full flex flex-col items-center justify-center mb-16">
        <a href="https://learn.microsoft.com/en-us/plans/o1mmcm6o12jygw?tab=tab-created&learnerGroupId=267baffa-cb19-49f1-a7c5-d965ddae5a2f&wt.mc_id=studentamb_389197"
          className='flex w-full justify-between items-center bg-tertiary text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105 opacity-90'
          target="blank">
            <h1 className='font-primary'>Copilot for Microsoft 365</h1>
            <p><FaLongArrowAltRight /></p>
        </a>
        <a href="https://learn.microsoft.com/en-us/plans/8pkkiy5x76oy7y?tab=tab-created&learnerGroupId=8aaa1848-25bf-4073-a87b-c22e07adce8d&wt.mc_id=studentamb_391523"
          className='flex justify-between items-center w-full bg-tertiary text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105 opacity-90'
          target="blank">
            <h1 className='font-primary'>Azure AI Fundamentals</h1>
            <p><FaLongArrowAltRight /></p>
          
        </a>
        <a href="https://learn.microsoft.com/en-us/plans/gm88tr6o5y5zyk?tab=tab-created&learnerGroupId=aed995d5-fe6e-48e5-8bdc-b15a575680c7&wt.mc_id=studentamb_389197"
          className='flex justify-between items-center w-full bg-secondary text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-primary transition duration-300 ease-in-out transform hover:scale-105 opacity-90'
          target="blank">
            <h1 className='font-primary'>Get started with GitHub and GitHub Copilot</h1>
            <p><FaLongArrowAltRight /></p>
          
        </a>

      </div>
      <button
  className="text-sm md:text-xl border-[1px] border-primary font-medium px-8 py-4 rounded-xl shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
  onClick={() => window.open("https://forms.office.com/r/C8UTQ2fu56", "_blank")}
>
  Submit your details here, and stand a chance to win exciting prizes
</button>
    </section>
  );
};

export default Modules;