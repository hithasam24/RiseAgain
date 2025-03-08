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
        {
            title: "Software Engineer",
            company: "XYZ Tech",
            location: "Remote",
            salary: "$80,000 - $100,000",
            link: "#"
        },
        {
            title: "Marketing Manager",
            company: "ABC Corp",
            location: "New York, NY",
            salary: "$70,000 - $90,000",
            link: "#"
        },
        {
            title: "Data Analyst",
            company: "Global Solutions",
            location: "San Francisco, CA",
            salary: "$85,000 - $110,000",
            link: "#"
        }
    ];

    const employerList = document.getElementById("employer-list");
    const jobList = document.getElementById("job-list");

    function displayEmployers() {
        employerList.innerHTML = "";
        employers.forEach(employer => {
            const employerCard = document.createElement("div");
            employerCard.classList.add("listing-card");
            employerCard.innerHTML = `
                <h3>${employer.name}</h3>
                <p><strong>Inclusivity Rating:</strong> <span class="rating">⭐ ${employer.rating}</span></p>
                <p><strong>Benefits:</strong> ${employer.benefits}</p>
                <a href="${employer.link}" class="apply-btn">Visit Employer</a>
            `;
            employerList.appendChild(employerCard);
        });
    }

    function displayJobs() {
        jobList.innerHTML = "";
        jobs.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("listing-card");
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p><strong>Salary:</strong> ${job.salary}</p>
                <a href="${job.link}" class="apply-btn">Apply Now</a>
            `;
            jobList.appendChild(jobCard);
        });
    }

    function filterListings() {
        const query = document.getElementById("search-bar").value.toLowerCase();
        displayEmployers(employers.filter(e => e.name.toLowerCase().includes(query)));
        displayJobs(jobs.filter(j => j.title.toLowerCase().includes(query) || j.company.toLowerCase().includes(query)));
    }

    displayEmployers();
    displayJobs();

    window.filterListings = filterListings;
});
