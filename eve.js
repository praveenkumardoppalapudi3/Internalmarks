function marks() {
    let grandTotal = 0;
    const subjects = 6;
    const labs = 3;

    // Process Subjects
    for (let i = 1; i <= subjects; i++) {
        // AAT Marks
        const aat1 = parseInt(document.getElementById(`txtsub${i}aat1`).value) || 0;
        const aat2 = parseInt(document.getElementById(`txtsub${i}aat2`).value) || 0;

        if (aat1 > 10 || aat2 > 10) {
            alert(`Please enter correct Subject ${i} AAT marks (Max 10)`);
            return;
        }
        const avgAat = Math.round((aat1 + aat2) / 2);

        // MID Marks
        const mid1 = parseInt(document.getElementById(`txtsub${i}mid1`).value) || 0;
        const mid2 = parseInt(document.getElementById(`txtsub${i}mid2`).value) || 0;

        if (mid1 > 30 || mid2 > 30) {
            alert(`Please enter correct Subject ${i} MID marks (Max 30)`);
            return;
        }

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
        const labMarks = parseInt(document.getElementById(`l${i}`).value) || 0;
        document.getElementById(`la${i}`).innerHTML = labMarks;
        grandTotal += labMarks;
    }

    // Show result table and update grand total
    const resultTable = document.getElementById("tbl2");
    resultTable.hidden = false;
    document.getElementById("final").innerHTML = grandTotal;
}
