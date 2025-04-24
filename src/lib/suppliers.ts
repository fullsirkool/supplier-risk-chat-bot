export const suppliers = [
    {
        name: "Acme Corp",
        riskScore: 9,
        categories: ["Financial Compliance", "Cybersecurity"],
        location: "New York, USA",
        industry: "Healthcare",
    },
    {
        name: "Beta Industries",
        riskScore: 7,
        categories: ["Operational", "Regulatory"],
        location: "London, UK",
        industry: "Manufacturing",
    },
    {
        name: "Gamma Solutions",
        riskScore: 8,
        categories: ["Cybersecurity", "Data Privacy"],
        location: "San Francisco, USA",
        industry: "Technology",
    },
    {
        name: "Delta Partners",
        riskScore: 6,
        categories: ["Regulatory", "Environmental"],
        location: "Berlin, Germany",
        industry: "Energy",
    },
    {
        name: "Epsilon Group",
        riskScore: 5,
        categories: ["Operational", "Supply Chain"],
        location: "Tokyo, Japan",
        industry: "Automotive",
    },
    {
        name: "Zeta Enterprises",
        riskScore: 4,
        categories: ["Financial Compliance", "Taxation"],
        location: "Sydney, Australia",
        industry: "Finance",
    },
    {
        name: "Theta Corporation",
        riskScore: 7,
        categories: ["Cybersecurity", "Operational"],
        location: "Toronto, Canada",
        industry: "Retail",
    },
    {
        name: "Iota Systems",
        riskScore: 8,
        categories: ["Data Privacy", "Regulatory"],
        location: "Singapore",
        industry: "Telecommunications",
    },
    {
        name: "Kappa Technologies",
        riskScore: 6,
        categories: ["Environmental", "Operational"],
        location: "Stockholm, Sweden",
        industry: "Technology",
    },
    {
        name: "Lambda Holdings",
        riskScore: 9,
        categories: ["Financial Compliance", "Cybersecurity"],
        location: "Dubai, UAE",
        industry: "Banking",
    },
];

export function searchSuppliers({
                                    top,
                                    industry,
                                    category,
                                }: {
    top?: number;
    industry?: string;
    category?: string;
}) {
    let result = [...suppliers];

    if (industry) {
        result = result.filter((s) =>
            s.industry.toLowerCase().includes(industry.toLowerCase())
        );
    }

    if (category) {
        result = result.filter((s) =>
            s.categories.some((c) =>
                c.toLowerCase().includes(category.toLowerCase())
            )
        );
    }

    if (top) {
        result = result.sort((a, b) => b.riskScore - a.riskScore).slice(0, top);
    }

    return result;
}
