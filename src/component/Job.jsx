import Image from "./Image";
import Text from "./Text";
import Skills from "./Skills";

function Job({ job, onShow }) {
    return (
        <div className={job.featured ? "job featured" : "job"}>
            <div className="job__content">
                <Image logo={job.logo} />
                <Text job={job} />
                <Skills
                    onShow={onShow}
                    key={job.id}
                    lang={job.languages}
                    level={job.level}
                    role={job.role}
                    tools={job.tools}
                />
            </div>
        </div>
    );
}

export default Job;
