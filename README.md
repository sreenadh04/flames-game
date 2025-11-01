# 🔥 FLAMES: A DSA-Powered Web Game [[Click Here](https://sreenadh04.github.io/flames-game/)]

### Project Overview

This project is a web-based implementation of the classic "FLAMES" childhood game, reimagined with a strong emphasis on **Data Structures and Algorithms (DSA)**. Instead of a simple character-counting method, this application's core logic is built by solving a series of four distinct algorithmic problems, demonstrating a practical application of DSA concepts in a fun, interactive package.

The application is built as a responsive, single-page application (SPA) with a "hacker terminal" aesthetic, written in vanilla HTML, CSS, and JavaScript.

---

### 🌟 Key Features

* **Responsive Terminal UI:** A single-page interface styled to resemble a retro computer terminal, fully responsive for both desktop and mobile devices.
* **Animated Interface:** Utilizes CSS `keyframes` for a "glowing" terminal effect and `fadeIn` animations for smooth screen transitions.
* **SPA-like Navigation:** The entire game flow (Welcome, Explanation, Game, Result, References) is managed in a single HTML file by dynamically switching screen visibility with JavaScript.
* **Algorithmic Core:** The game's result is not based on simple counting but on a robust 4-step algorithmic process, showcasing solutions to well-known DSA problems.

---

### 🧠 Algorithmic Breakdown: The 4-Step Logic

The "FLAMES" result is calculated by solving four distinct problems, as referenced in the application's "References" section.

1.  **Name Formatting (LeetCode 2129 - Capitalize the Title):**
    * **Problem:** User input is messy. Names like `john doe` or `JANE  DOE` need normalization.
    * **Solution:** A custom `formatName()` function iterates through the input, handling multiple spaces and correctly capitalizing the first letter of each word to produce a clean, standardized name (e.g., "John Doe" or "Jane Doe").

2.  **String Cleaning (GFG - Remove Spaces):**
    * **Problem:** The core algorithm requires a space-free, case-insensitive string.
    * **Solution:** The `removeSpacesAndLower()` function uses a regular expression (`/\s/g`) to strip all whitespace and converts the entire string to lowercase for a clean comparison.

3.  **Common Character Calculation (GFG - Longest Common Subsequence):**
    * **Problem:** Determine the "count" of common letters. Instead of a simple strike-off, this project uses a more advanced dynamic programming approach.
    * **Solution:** The `lcsLength()` function implements a **space-optimized dynamic programming** solution to find the **Longest Common Subsequence (LCS)** between the two names.
    * **Optimization:** This DP solution uses only two 1D arrays (`prev` and `curr`) instead of a full 2D matrix, reducing the space complexity from $O(N \times M)$ to $O(\min(N, M))$.
    * **Final Count:** The remaining letter count (`remLen`) is calculated using the formula: `(name1.length + name2.length) - (2 * lcsLength)`.

4.  **FLAMES Result (GFG - Josephus Problem):**
    * **Problem:** With the remaining letter count (`n`), we must simulate the "FLAMES" striking-out process in a circle of 6 letters (F, L, A, M, E, S).
    * **Solution:** The `flamesIndex()` function implements an efficient, iterative solution to the **Josephus Problem**. It calculates the index of the "survivor" by applying the formula `j = (j + n) % i` in a loop from `i = 2` to `6`, directly finding the final result without any array manipulation.

This index `j` corresponds to the final relationship (Friends, Lovers, etc.), which is then displayed to the user.

---

### 🛠️ Technology Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Core Concepts:**
    * **Data Structures:** Arrays (used in DP), Strings
    * **Algorithms:** Dynamic Programming (LCS), Josephus Problem, String Manipulation
* **UI/UX:**
    * Responsive Web Design (Flexbox, Media Queries)
    * CSS Animations (`@keyframes`)
    * DOM Manipulation (managing `.active` classes for SPA behavior)
    * Event Handling (`onclick`, `DOMContentLoaded`)
