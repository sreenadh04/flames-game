// Step 2: Format names (single space, capitalize first letter of each word)
function formatName(input) {
  let result = ""
  let spaceSeen = false

  for (let i = 0; i < input.length; i++) {
    const c = input[i]

    if (/\s/.test(c)) {
      if (!spaceSeen && result.length > 0) {
        result += " "
        spaceSeen = true
      }
    } else {
      if (result.length === 0 || result[result.length - 1] === " ") {
        result += c.toUpperCase()
      } else {
        result += c.toLowerCase()
      }
      spaceSeen = false
    }
  }

  // Remove trailing space if any
  if (result.length > 0 && result[result.length - 1] === " ") {
    result = result.slice(0, -1)
  }

  return result
}

// Step 3: Remove spaces and convert to lowercase
function removeSpacesAndLower(name) {
  return name.replace(/\s/g, "").toLowerCase()
}

// Step 4: Calculate Longest Common Subsequence (LCS)
function lcsLength(s1, s2) {
  const n = s1.length
  const m = s2.length

  // Use smaller string to reduce space
  if (m < n) return lcsLength(s2, s1)

  let prev = new Array(n + 1).fill(0)
  const curr = new Array(n + 1).fill(0)

  for (let j = 1; j <= m; j++) {
    for (let i = 1; i <= n; i++) {
      if (s1[i - 1] === s2[j - 1]) {
        curr[i] = 1 + prev[i - 1]
      } else {
        curr[i] = Math.max(prev[i], curr[i - 1])
      }
    }
    prev = [...curr]
  }

  return curr[n]
}

// Step 5: Josephus problem logic for FLAMES
function flamesIndex(n) {
  let j = 0 // Base case: J(1, n) = 0
  for (let i = 2; i <= 6; i++) {
    j = (j + n) % i
  }
  return j
}

// Screen navigation functions
function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active")
  })
  document.getElementById(screenId).classList.add("active")
}

function showExplanation() {
  document.getElementById("explanationBox").classList.remove("hidden")
}

function startGame() {
  showScreen("gameScreen")
  document.getElementById("name1").focus()
}

function playGame() {
  const name1Input = document.getElementById("name1").value.trim()
  const name2Input = document.getElementById("name2").value.trim()

  if (!name1Input || !name2Input) {
    alert("Please enter both names!")
    return
  }

  // Format names
  const name1 = formatName(name1Input)
  const name2 = formatName(name2Input)

  // Clean names
  const name1Clean = removeSpacesAndLower(name1)
  const name2Clean = removeSpacesAndLower(name2)

  let resultMessage = ""
  let resultEmoji = ""

  if (name1Clean === name2Clean) {
    resultMessage = `Self Love`
    resultEmoji = "💕"
  } else {
    // Calculate LCS and remaining letters
    const lcsLen = lcsLength(name1Clean, name2Clean)
    const remLen = name1Clean.length + name2Clean.length - 2 * lcsLen

    // Find FLAMES result
    const flamesMap = [
      { text: "Friends", emoji: "🫂" },
      { text: "Lovers", emoji: "❤️" },
      { text: "Affectionate", emoji: "🤗" },
      { text: "Marriage", emoji: "💍" },
      { text: "Enemies", emoji: "😡" },
      { text: "Siblings", emoji: "👫" },
    ]

    const index = flamesIndex(remLen)
    resultMessage = `According to FLAMES, ${name1} and ${name2} are: ${flamesMap[index].text}!`
    resultEmoji = flamesMap[index].emoji
  }

  // Display result
  document.getElementById("resultMessage").textContent = resultMessage
  document.getElementById("resultEmoji").textContent = resultEmoji
  showScreen("resultScreen")
}

function playAgain() {
  document.getElementById("name1").value = ""
  document.getElementById("name2").value = ""
  showScreen("gameScreen")
  document.getElementById("name1").focus()
}

function showReferences() {
  showScreen("referencesScreen")
}

function backToWelcome() {
  showScreen("welcomeScreen")
}

// Initialize - show welcome screen
document.addEventListener("DOMContentLoaded", () => {
  showScreen("welcomeScreen")
})
