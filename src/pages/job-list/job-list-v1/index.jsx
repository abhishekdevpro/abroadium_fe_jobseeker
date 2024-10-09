
import JobList from "@/components/job-listing-pages/job-list-v1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Abroadium - One Stop Career Solution",
  description: "Abroadium - Job Borad ReactJs Template",
};

const JobListPage1 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <JobList />
    </>
  );
};

export default JobListPage1
