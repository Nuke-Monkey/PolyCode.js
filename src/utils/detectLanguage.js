function detectLanguage(fileName){
    const languageMap = {
        "js": "javascript",
        "mjs": "javascript",
        "ts": "typescript",
        "html": "html",
        "py": "python",
        "rs": "rust",
        "lua": "lua",
        "c": "c",
        "cpp": "cpp",
        "cxx": "cpp"
    }
    return languageMap[fileName.toLowerCase().split(".").pop()] || null
}

export default detectLanguage
