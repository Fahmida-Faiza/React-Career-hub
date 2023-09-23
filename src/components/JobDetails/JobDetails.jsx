import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {

    const jobs = useLoaderData(); //sob data pabo jobs r
    const {id} = useParams() //id pabo
const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log( job)
    return (
        <div>
           
            <div className="grid gap-4  md:grid-cols-4">
                <div className="border md:col-span-3">
                    
                    <h2>Details come here</h2>
                    <h2>Job details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>

                    </div>
                    <div className="border">
                        <h2 className="text-2xl">Side things</h2>
                        <button className="btn  btn-success w-full">Apply now</button>
                    </div>

                </div>

            </div>
    
    );
};

export default JobDetails;