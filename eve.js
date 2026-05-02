function marks() {
    let grandTotal = 0;
    const subjects = 6;
    const labs = 3;

    // Process Subjects
    for (let i = 1; i <= subjects; i++) {
        // AAT Marks
        const aat1 = parseFloat(document.getElementById(`txtsub${i}aat1`).value) || 0;
        const aat2 = parseFloat(document.getElementById(`txtsub${i}aat2`).value) || 0;

        if (aat1 > 10 || aat2 > 10) {
            // Only alert if we're not doing real-time or if explicitly clicked
            // For now, let's keep it simple
            console.warn(`Subject ${i} AAT out of range`);
        }
        const avgAat = Math.round((aat1 + aat2) / 2);

        // MID Marks
        const mid1 = parseFloat(document.getElementById(`txtsub${i}mid1`).value) || 0;
        const mid2 = parseFloat(document.getElementById(`txtsub${i}mid2`).value) || 0;

        const maxMid = Math.max(mid1, mid2);
        const minMid = Math.min(mid1, mid2);
        const weightedMid = Math.round((maxMid * 17.5 / 30) + (minMid * 7.5 / 30));

        // Attendance
        const attendance = parseInt(document.getElementById(`sel${i}`).value) || 0;

        const total = avgAat + weightedMid + attendance;
        grandTotal += total;

        // Update Results Table
        document.getElementById(`pat${i}`).innerHTML = avgAat;
        document.getElementById(`pm${i}`).innerHTML = weightedMid;
        document.getElementById(`pa${i}`).innerHTML = attendance;
        document.getElementById(`t${i}`).innerHTML = total;
    }

    // Process Labs
    for (let i = 1; i <= labs; i++) {
        const labMarks = parseFloat(document.getElementById(`l${i}`).value) || 0;
        document.getElementById(`la${i}`).innerHTML = labMarks;
        grandTotal += labMarks;
    }

    // Show result area and update grand total
    const resultArea = document.getElementById("results-area");
    resultArea.hidden = false;
    document.getElementById("final").innerHTML = grandTotal;
    document.getElementById("summary-total").innerHTML = grandTotal;
}

function resetForm() {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => input.value = "");
    
    const selects = document.querySelectorAll('select');
    selects.forEach(select => select.selectedIndex = 0);

    document.getElementById("results-area").hidden = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optional: Add real-time calculation
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('input', () => {
        // Only auto-calculate if the results area is already visible
        if (!document.getElementById("results-area").hidden) {
            marks();
        }
    });
});
