const boxes = [...document.querySelectorAll("[data-signal]")];
const score = document.querySelector("#score");
const interpretation = document.querySelector("#interpretation");

function updateResult() {
  const selected = boxes.filter((box) => box.checked).map((box) => box.dataset.signal);
  score.textContent = String(selected.length);

  if (selected.length === 0) {
    interpretation.textContent = "No observations selected yet. Compare the four frames before writing a conclusion.";
  } else if (selected.length <= 2) {
    interpretation.textContent = `Limited repeatability: ${selected.join(", ")}. Gather a closer comparison or ask which presentation variables are driving the difference.`;
  } else if (selected.length <= 4) {
    interpretation.textContent = `Mixed but useful evidence: ${selected.join(", ")}. Bring these stable ideas to the consultation and identify the variables that changed.`;
  } else {
    interpretation.textContent = `Broad visual consistency across: ${selected.join(", ")}. Treat these as discussion points, not a promised real-world outcome.`;
  }
}

boxes.forEach((box) => box.addEventListener("change", updateResult));
