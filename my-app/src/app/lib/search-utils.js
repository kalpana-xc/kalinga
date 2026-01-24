/**
 * Helper function to normalize strings for flexible searching 
 * (removes punctuation, filler words, and extra spaces)
 */
export const normalizeString = (str) => {
    if (!str) return "";

    // List of common filler words to ignore in search
    const fillerWords = ["in", "of", "and", "the", "for", "to", "at", "by", "with", "special"];

    return str
        .toLowerCase()
        // Replace all punctuation including brackets, braces, and symbols with space
        .replace(/[.\-&(),\[\]{}:|]/g, " ")
        .split(/\s+/)              // Split into words
        .filter(word => word && !fillerWords.includes(word)) // Remove empty strings and filler words
        .join("")                  // Join back with no spaces for dense comparison
        .trim();
};

/**
 * Weighted scoring logic for program search.
 * Ranks programs based on how well the query matches their names and departments.
 * 
 * @param {Array} programs - List of programs to filter and score
 * @param {string} query - The search query
 * @param {Object} options - Configuration for matching
 * @returns {Array} Filtered and sorted programs
 */
export const rankAndSortPrograms = (programs, query, options = { includeDept: false }) => {
    if (!query || !query.trim()) return programs;

    const lowerQuery = query.trim().toLowerCase();
    const normalizedQuery = normalizeString(lowerQuery);
    const queryTokens = lowerQuery.split(/\s+/).filter(t => t.length > 0);

    return programs
        .map(program => {
            let score = 0;
            const title = program.name || program.title || "";
            const shortName = program.short_name || program.shortName || "";
            const deptName = options.includeDept
                ? (program.departmentName || program.department?.name || program.specialization || "")
                : "";

            const normTitle = normalizeString(title);
            const normShort = normalizeString(shortName);
            const normDept = options.includeDept ? normalizeString(deptName) : "";

            // 1. Exact matches in normalized strings (Highest priority)
            if (normShort === normalizedQuery) score += 100;
            else if (normShort.includes(normalizedQuery)) score += 80;

            if (normTitle === normalizedQuery) score += 90;
            else if (normTitle.includes(normalizedQuery)) score += 60;

            if (options.includeDept) {
                if (normDept === normalizedQuery) score += 40;
                else if (normDept.includes(normalizedQuery)) score += 20;
            }

            // 2. Token based matching
            if (queryTokens.length > 0) {
                let tokensMatched = 0;
                queryTokens.forEach(token => {
                    const normToken = normalizeString(token);
                    if (normTitle.includes(normToken) || normShort.includes(normToken) || (options.includeDept && normDept.includes(normToken))) {
                        tokensMatched++;
                        score += 10;
                    }
                });
                if (tokensMatched === queryTokens.length) score += 30;
            }

            // 3. Simple fuzzy/typo tolerance (starts with check)
            if (title.toLowerCase().startsWith(lowerQuery)) score += 25;
            if (shortName.toLowerCase().startsWith(lowerQuery)) score += 35;

            return { ...program, searchScore: score };
        })
        .filter(program => (program.searchScore || 0) > 0)
        .sort((a, b) => (b.searchScore || 0) - (a.searchScore || 0));
};
