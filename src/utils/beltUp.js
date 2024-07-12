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

const prevBelt = currentBelt => {
    if (currentBelt === "black") return "red"
    if (currentBelt === "red") return "brown"
    if (currentBelt === "brown") return "green"
    if (currentBelt === "green") return "blue"
    if (currentBelt === "blue") return "purple"
    if (currentBelt === "purple") return "orange"
    if (currentBelt === "orange") return "yellow"
    if (currentBelt === "yellow") return "white"
    return "white"
}

export {nextBelt, prevBelt}