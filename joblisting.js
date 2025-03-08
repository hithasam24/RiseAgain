document.addEventListener("DOMContentLoaded", function() {
    const employers = [
        {
            name: "XYZ Tech",
            rating: 4.8,
            benefits: "Flexible Hours, Remote Work, Maternity Leave",
            link: "#"
        },
        {
            name: "ABC Corp",
            rating: 4.5,
            benefits: "On-Site Childcare, Paid Parental Leave, Returnship Program",
            link: "#"
        },
        {
            name: "Global Solutions",
            rating: 4.7,
            benefits: "Work from Home, Women Leadership Programs",
            link: "#"
        }
    ];

    const jobs = [
        { title: "Software Engineer", type: "Remote", industry: "Technology" },
        { title: "Marketing Manager", type: "Hybrid", industry: "Marketing" },
        { title: "Financial Analyst", type: "Freelance", industry: "Finance" }
    ];

    const employerList = document.getElementById("employer-list");
    const jobList = document.getElementById("job-list");

    function displayEmployers() {
        employerList.innerHTML = "";
        employers.forEach(employer => {
            const employerCard = document.createElement("div");
            employerCard.classList.add("employer-card");
            employerCard.innerHTML = `
                <h3>${employer.name}</h3>
                <p><strong>Inclusivity Rating:</strong> <span class="rating">⭐ ${employer.rating}</span></p>
                <p><strong>Benefits:</strong> ${employer.benefits}</p>
                <a href="${employer.link}" class="btn">Visit Employer</a>
            `;
            employerList.appendChild(employerCard);
        });
    }

    function displayJobs(jobsToDisplay) {
        jobList.innerHTML = "";
        if (jobsToDisplay.length === 0) {
            jobList.innerHTML = "<p>No jobs found.</p>";
            return;
        }

        jobsToDisplay.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Type:</strong> ${job.type}</p>
                <p><strong>Industry:</strong> ${job.industry}</p>
            `;
            jobList.appendChild(jobCard);
        });
    }

    function filterJobs() {
        let searchQuery = document.getElementById("job-search").value.toLowerCase();
        let selectedType = document.getElementById("job-type").value;
        let selectedIndustry = document.getElementById("industry").value;

        let filteredJobs = jobs.filter(job => 
            (job.title.toLowerCase().includes(searchQuery) || searchQuery === "") &&
            (job.type === selectedType || selectedType === "") &&
            (job.industry === selectedIndustry || selectedIndustry === "")
        );

        displayJobs(filteredJobs);
    }

    displayEmployers();
    displayJobs(jobs);

    window.filterJobs = filterJobs;
});
