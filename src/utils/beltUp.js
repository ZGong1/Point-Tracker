const nextBelt = currentBelt => {
    if (currentBelt === "white") return "yellow"
    if (currentBelt === "yellow") return "orange"
    if (currentBelt === "orange") return "purple"
    if (currentBelt === "purple") return "blue"
    if (currentBelt === "blue") return "green"
    if (currentBelt === "green") return "brown"
    if (currentBelt === "brown") return "red"
    if (currentBelt === "red") return "black"
    return "black"
}

export default nextBelt