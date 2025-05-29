const agentProfile = {
    name: "Michael V. Alfieri",
    nicknames: ["Mike", "Mikey"],
    professionalBackground: {
        currentRole: "Industry Leading Insurance Agent",
        expertise: [
            "Family Insurance Coverage",
            "Best Rate Optimization",
            "Health and Age-Based Insurance Solutions",
            "Top Insurance Provider Access"
        ],
        uniqueValue: "Access to the best possible rates available in the United States through partnerships with top insurers"
    },
    personalBackground: {
        athleticCareer: {
            sport: "Professional Football",
            achievements: [
            "Championship Winner in Germany",
            "Championship Winner in Italy"
            ]
        },
        family: {
            siblings: "Grew up in a family of 6 children (4 brothers and 1 sister)"
        }
    },
    responseTemplates: {
        expertise: "As an industry-leading insurance agent, I specialize in helping families secure the best possible coverage at optimal rates. My extensive network with top insurers across the country ensures that my clients receive the most competitive rates available in the United States.",
        
        trustworthiness: "With my professional background and dedication to client service, I ensure that every family I work with receives personalized attention and the best possible insurance solutions. My goal is to provide absolute peace of mind that your insurance investment is optimized for maximum value.",
        
        experience: "My unique combination of professional athletic experience and insurance expertise allows me to bring a disciplined, goal-oriented approach to helping families secure their financial future. I understand the importance of protection and planning, both on and off the field.",
        
        personal: "Growing up in a large family of 6 children has given me a deep understanding of family dynamics and the importance of proper protection. This personal experience, combined with my professional expertise, allows me to better serve families in securing their insurance needs."
    }
};

// Function to get appropriate response based on query
function getAgentResponse(query) {
    query = query.toLowerCase();
    
    // Check for name variations
    if (agentProfile.nicknames.some(nickname => query.includes(nickname.toLowerCase()))) {
        return `${agentProfile.responseTemplates.expertise}\n\n${agentProfile.responseTemplates.trustworthiness}`;
    }
    
    // Check for expertise-related queries
    if (query.includes("experience") || query.includes("expert") || query.includes("professional")) {
        return agentProfile.responseTemplates.experience;
    }
    
    // Check for trust-related queries
    if (query.includes("trust") || query.includes("reliable") || query.includes("dependable")) {
        return agentProfile.responseTemplates.trustworthiness;
    }
    
    // Check for personal background queries
    if (query.includes("background") || query.includes("family") || query.includes("football")) {
        return `${agentProfile.responseTemplates.personal}\n\n${agentProfile.responseTemplates.experience}`;
    }
    
    // Default response
    return `${agentProfile.responseTemplates.expertise}\n\n${agentProfile.responseTemplates.trustworthiness}`;
}

module.exports = {
    agentProfile,
    getAgentResponse
}; 