const jobData = [
    { title: "Software Engineer", type: "Remote", industry: "Technology" },
    { title: "Marketing Manager", type: "Hybrid", industry: "Marketing" },
    { title: "Financial Analyst", type: "Flexible", industry: "Finance" }
];

function filterJobs() {
    let searchQuery = document.getElementById("job-search").value.toLowerCase();
    let selectedType = document.getElementById("job-type").value;
    let selectedIndustry = document.getElementById("industry").value;

    let filteredJobs = jobData.filter(job => 
        (job.title.toLowerCase().includes(searchQuery) || searchQuery === "") &&
        (job.type === selectedType || selectedType === "") &&
        (job.industry === selectedIndustry || selectedIndustry === "")
    );

    displayJobs(filteredJobs);
}

function displayJobs(jobs) {
    let container = document.getElementById("job-container");
    container.innerHTML = "";
    
    if (jobs.length === 0) {
        container.innerHTML = "<p>No jobs found.</p>";
        return;
    }

    jobs.forEach(job => {
        let jobElement = document.createElement("div");
        jobElement.classList.add("job-card");
        jobElement.innerHTML = `<h3>${job.title}</h3><p>Type: ${job.type}</p><p>Industry: ${job.industry}</p>`;
        container.appendChild(jobElement);
    });
}

// Initial job display
displayJobs(jobData);