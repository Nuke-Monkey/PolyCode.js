async function fetchGHfile(location){
    if (!location.user || !location.repo || !location.path) {
        return //ADD ERROR
    }

    const response = await fetch(`https://cdn.jsdelivr.net/gh/${location.user}/${location.repo}/${location.path}`)
    const fileContent = await response.text()
    const fileName = location.path.split("/").pop()
    return {name: fileName, content: fileContent}
}

export default fetchGHfile
