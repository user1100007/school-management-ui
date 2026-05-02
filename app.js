// ═══════════════════════════════════════════════════════════════
// AUTHENTICATION & INITIALIZATION
// ═══════════════════════════════════════════════════════════════

const ACCOUNTS = [
    { user: "admin", pass: "admin123", role: "admin", name: "អ្នកគ្រប់គ្រង" },
    { user: "director", pass: "director123", role: "director", name: "សុខ សារើន" },
    { user: "teacher", pass: "teacher123", role: "teacher", name: "លោក/លោកស្រី" }
];

const DOM = {
    loginPage: document.getElementById("login-page"),
    dashboardPage: document.getElementById("dashboard-page"),
    dashContent: document.getElementById("dashboard-content"),
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    loginBtn: document.getElementById("login-btn"),
    logoutBtn: document.getElementById("logout-btn"),
    errorMsg: document.getElementById("error-message"),
    userName: document.getElementById("user-name"),
    userRoleTag: document.getElementById("user-role-tag"),
    printBtn: document.getElementById("print-btn"),
    tabs: document.querySelectorAll("[data-tab]"),
    schoolName: document.getElementById("school-name"),
    schoolInfo: document.getElementById("school-info"),
    reporter: document.getElementById("reporter"),
    reportDate: document.getElementById("report-date")
};

let currentUser = null;
let currentChart = null;

// ═══════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ═══════════════════════════════════════════════════════════════

DOM.loginBtn.addEventListener("click", handleLogin);
DOM.password.addEventListener("keydown", e => { if (e.key === "Enter") handleLogin(); });

document.querySelectorAll("[data-user]").forEach(btn => {
    btn.addEventListener("click", function() {
        DOM.username.value = this.dataset.user;
        DOM.password.value = this.dataset.pass;
    });
});

DOM.logoutBtn.addEventListener("click", handleLogout);
DOM.printBtn.addEventListener("click", () => window.print());

DOM.tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        setActiveTab(this.dataset.tab);
    });
});

// ═══════════════════════════════════════════════════════════════
// AUTHENTICATION
// ═══════════════════════════════════════════════════════════════

function handleLogin() {
    const u = DOM.username.value.trim();
    const p = DOM.password.value.trim();

    if (!u || !p) {
        showError("សូមបញ្ចូលឈ្មោះអ្នកប្រើ និងពាក្យសម្ងាត់");
        return;
    }

    DOM.loginBtn.disabled = true;
    DOM.loginBtn.textContent = "⏳ កំពុងចូល...";

    setTimeout(() => {
        const account = ACCOUNTS.find(a => a.user === u && a.pass === p);
        if (account) {
            currentUser = account;
            DOM.loginPage.classList.add("hidden");
            DOM.dashboardPage.classList.remove("hidden");
            populateDashboard();
            setActiveTab("overview");
        } else {
            showError("ឈ្មោះ ឬ ពាក្យសម្ងាត់មិនត្រូវ!");
            DOM.loginBtn.disabled = false;
            DOM.loginBtn.textContent = "ចូលប្រព័ន្ធ →";
        }
    }, 700);
}

function handleLogout() {
    currentUser = null;
    DOM.loginPage.classList.remove("hidden");
    DOM.dashboardPage.classList.add("hidden");
    DOM.username.value = "";
    DOM.password.value = "";
}

function showError(msg) {
    DOM.errorMsg.textContent = msg;
    DOM.errorMsg.classList.remove("hidden");
    setTimeout(() => DOM.errorMsg.classList.add("hidden"), 3000);
}

function populateDashboard() {
    DOM.userName.textContent = currentUser.name;
    DOM.userRoleTag.textContent = currentUser.role === "admin" ? "admin" : currentUser.role === "director" ? "នាយិកា" : "គ្រូ";

    const roleColorClass =
        currentUser.role === "admin" ? "tag" :
        currentUser.role === "director" ? "tag-green" :
        "tag-orange";
    
    DOM.userRoleTag.className = roleColorClass;
    
    // Populate school info
    DOM.schoolName.textContent = SCHOOL_DATA.schoolInfo.name;
    DOM.schoolInfo.textContent = `${SCHOOL_DATA.schoolInfo.semester} ${SCHOOL_DATA.schoolInfo.year} · ${SCHOOL_DATA.schoolInfo.cluster} · ${SCHOOL_DATA.schoolInfo.district}`;
    DOM.reporter.textContent = SCHOOL_DATA.schoolInfo.reporter;
    
    const date = new Date(SCHOOL_DATA.schoolInfo.updatedAt);
    DOM.reportDate.textContent = formatKhmerDate(date);
}

// ═══════════════════════════════════════════════════════════════
// TAB MANAGEMENT
// ═══════════════════════════════════════════════════════════════

function setActiveTab(tabId) {
    DOM.tabs.forEach(t => t.classList.remove("tab-active"));
    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeTab) activeTab.classList.add("tab-active");

    switch (tabId) {
        case "overview":
            renderOverview();
            break;
        case "students":
            renderStudents();
            break;
        case "results":
            renderResults();
            break;
        case "staff":
            renderStaff();
            break;
        case "finance":
            if (currentUser && (currentUser.role === "admin" || currentUser.role === "director")) {
                renderFinance();
            }
            break;
    }
}

// ═══════════════════════════════════════════════════════════════
// OVERVIEW TAB
// ═══════════════════════════════════════════════════════════════

function renderOverview() {
    const stats = calculateStats();
    const { gradeData, curriculumData, financeData } = SCHOOL_DATA;

    DOM.dashContent.innerHTML = `
        <!-- KPI Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            ${kpiCard("👩‍🎓", "bg-blue-600/20 border-blue-600/40", `
                <div class="text-2xl font-bold text-blue-400">${stats.totalStudents}</div>
                <div class="text-xs font-semibold text-slate-300 mt-1">សិស្សសរុប</div>
                <div class="text-xs text-slate-400 mt-1">ស្រី ${stats.totalFemale} · ${stats.pctFemale}%</div>
            `)}
            ${kpiCard("✅", "bg-green-600/20 border-green-600/40", `
                <div class="text-2xl font-bold text-green-400">${stats.pctPass}%</div>
                <div class="text-xs font-semibold text-slate-300 mt-1">% ជាប់</div>
                <div class="text-xs text-slate-400 mt-1">ជាប់ ${stats.totalPass} · ធ្លាក់ ${stats.totalFail}</div>
            `)}
            ${kpiCard("👨‍🏫", "bg-yellow-600/20 border-yellow-600/40", `
                <div class="text-2xl font-bold text-yellow-400">${stats.totalStaff}</div>
                <div class="text-xs font-semibold text-slate-300 mt-1">បុគ្គលិកសរុប</div>
                <div class="text-xs text-slate-400 mt-1">ស្រី ${stats.femaleStaff} · ${stats.pctFemaleStaff}%</div>
            `)}
            ${kpiCard("🏛️", "bg-pink-600/20 border-pink-600/40", `
                <div class="text-2xl font-bold text-pink-400">${stats.totalClasses} / 15</div>
                <div class="text-xs font-semibold text-slate-300 mt-1">ថ្នាក់ / បន្ទប់</div>
                <div class="text-xs text-slate-400 mt-1">${SCHOOL_DATA.infrastructure.notes}</div>
            `)}
        </div>

        <!-- Charts Row 1 -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div class="card p-4 lg:col-span-2">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">ចំនួនសិស្ស + % ជាប់ (ក្រាបរួម)</h3>
                <div class="chart-container"><canvas id="bar-chart-overview"></canvas></div>
            </div>
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">ភេទ + ស្ថានភាព</h3>
                <div class="chart-container"><canvas id="pie-chart-gender"></canvas></div>
                <div class="grid grid-cols-2 gap-2 mt-3">
                    <div class="bg-gray-900 rounded-lg p-2 text-center">
                        <div class="text-xl font-bold text-green-400">${stats.totalPass}</div>
                        <div class="text-xs text-slate-400">ជាប់</div>
                    </div>
                    <div class="bg-gray-900 rounded-lg p-2 text-center">
                        <div class="text-xl font-bold text-red-400">${stats.totalFail}</div>
                        <div class="text-xs text-slate-400">ធ្លាក់</div>
                    </div>
                    <div class="bg-gray-900 rounded-lg p-2 text-center">
                        <div class="text-xl font-bold text-blue-400">${stats.totalClasses}</div>
                        <div class="text-xs text-slate-400">ថ្នាក់</div>
                    </div>
                    <div class="bg-gray-900 rounded-lg p-2 text-center">
                        <div class="text-xl font-bold text-yellow-400">${stats.totalStaff}</div>
                        <div class="text-xs text-slate-400">គ្រូ</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Data Summary Row -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <!-- Curriculum -->
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">% ការអនុវត្តកម្មវិធី</h3>
                ${curriculumData.map(s => `
                    <div class="mb-3">
                        <div class="flex justify-between text-xs mb-1">
                            <span>${s.subject}</span>
                            <span class="font-bold ${getColorByPercent(s.average)}">${s.average}%</span>
                        </div>
                        <div class="bg-slate-700 rounded progress-bar">
                            <div class="h-full rounded progress-bar ${getProgressColor(s.average)}" style="width:${s.average}%"></div>
                        </div>
                    </div>
                `).join("")}
            </div>

            <!-- Staff Distribution -->
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">ភារៈបុគ្គលិក</h3>
                ${[
                    ["នាយក/រង", "2", "1"],
                    ["សិក្ខាបន", "10", "9"],
                    ["លេខាធិការ", "1", "0"],
                    ["បណ្ណារក្ស", "1", "1"],
                    ["កសិកម្ម", "1", "0"],
                    ["ម.តេយ្យ", "2", "2"]
                ].map(([label, total, female]) => `
                    <div class="flex justify-between py-1 border-b border-slate-700 text-xs">
                        <span class="text-slate-400">${label}</span>
                        <span><b>${total}</b><span class="text-pink-400 ml-1">(${female}ស)</span></span>
                    </div>
                `).join("")}
            </div>

            <!-- Finance Summary -->
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">ហិរញ្ញប្បទាន</h3>
                ${financeData.items.map(item => `
                    <div class="py-2 border-b border-slate-700">
                        <div class="text-xs text-slate-400">${item.name}</div>
                        <div class="text-sm font-bold ${item.amount > 1000000 ? "text-blue-400" : "text-yellow-400"}">${formatCurrency(item.amount)}</div>
                    </div>
                `).join("")}
                <div class="py-2">
                    <div class="text-xs text-slate-400">សរុប</div>
                    <div class="text-sm font-bold text-green-400">${formatCurrency(financeData.total)}</div>
                </div>
                <div class="text-xs text-slate-400 mt-2">💡 ប្រភព: ${financeData.sources}</div>
            </div>
        </div>
    `;

    setTimeout(() => {
        renderBarChartOverview();
        renderPieChartGender(stats.totalStudents - stats.totalFemale, stats.totalFemale);
    }, 50);
}

// ═══════════════════════════════════════════════════════════════
// STUDENTS TAB
// ═══════════════════════════════════════════════════════════════

function renderStudents() {
    const stats = calculateStats();
    const gradeData = SCHOOL_DATA.gradeData;

    DOM.dashContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div class="card p-4 lg:col-span-2">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">ចំនួនសិស្ស + លទ្ធផល តាមថ្នាក់</h3>
                <div class="overflow-x-auto">
                    <table class="w-full text-xs">
                        <thead>
                            <tr class="text-slate-400 border-b border-slate-700">
                                ${["ថ្នាក់", "សរុប", "ស្រី", "%ស្រី", "ជាប់", "ធ្លាក់", "% ជាប់"].map(h => 
                                    `<th class="p-2 text-center">${h}</th>`
                                ).join("")}
                            </tr>
                        </thead>
                        <tbody>
                            ${gradeData.map(g => {
                                const passPct = ((g.pass / g.total) * 100).toFixed(1);
                                const femPct = ((g.female / g.total) * 100).toFixed(1);
                                return `<tr class="table-row border-b border-slate-700">
                                    <td class="p-2 text-center text-yellow-400 font-bold">${g.grade}</td>
                                    <td class="p-2 text-center font-semibold">${g.total}</td>
                                    <td class="p-2 text-center text-pink-400">${g.female}</td>
                                    <td class="p-2 text-center text-slate-400">${femPct}%</td>
                                    <td class="p-2 text-center text-green-400">${g.pass}</td>
                                    <td class="p-2 text-center ${g.fail > 0 ? "text-red-400" : "text-slate-400"}">${g.fail}</td>
                                    <td class="p-2 text-center"><span class="status-badge ${g.fail === 0 ? "status-green" : "status-red"}">${passPct}%</span></td>
                                </tr>`;
                            }).join("")}
                            <tr class="border-t-2 border-slate-600 font-bold">
                                <td class="p-2 text-center text-green-400">សរុប</td>
                                <td class="p-2 text-center">${stats.totalStudents}</td>
                                <td class="p-2 text-center text-pink-400">${stats.totalFemale}</td>
                                <td class="p-2 text-center">${stats.pctFemale}%</td>
                                <td class="p-2 text-center text-green-400">${stats.totalPass}</td>
                                <td class="p-2 text-center text-red-400">${stats.totalFail}</td>
                                <td class="p-2 text-center"><span class="status-badge status-green">${stats.pctPass}%</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">ក្រាបសរុប + ស្រី</h3>
                <div class="chart-container"><canvas id="bar-chart-students"></canvas></div>
            </div>
        </div>

        <div class="card p-4">
            <h3 class="text-xs font-semibold text-slate-300 mb-3">% ជាប់ + ស្ថានភាពតាមថ្នាក់</h3>
            <div class="flex gap-2 flex-wrap">
                ${gradeData.map(g => {
                    const pp = (g.pass / g.total) * 100;
                    const sc = pp === 100 ? "border-green-500/40" : pp >= 90 ? "border-yellow-500/40" : "border-red-500/40";
                    const tc = pp === 100 ? "text-green-400" : pp >= 90 ? "text-yellow-400" : "text-red-400";
                    return `<div class="flex-1 min-w-[120px] bg-gray-900 rounded-xl border ${sc} p-3 text-center">
                        <div class="text-xs text-slate-400 mb-1">${g.grade}</div>
                        <div class="text-2xl font-bold ${tc}">${Math.round(pp)}%</div>
                        <div class="text-xs text-slate-400 mt-1">ជាប់ ${g.pass}/${g.total}</div>
                        ${g.fail > 0 ? `<div class="mt-2"><span class="tag-red px-2 py-1 rounded text-xs">ធ្លាក់ ${g.fail}</span></div>` : ""}
                    </div>`;
                }).join("")}
            </div>
        </div>
    `;

    setTimeout(() => {
        renderBarChartStudents();
    }, 50);
}

// ═══════════════════════════════════════════════════════════════
// RESULTS TAB
// ═══════════════════════════════════════════════════════════════

function renderResults() {
    const gradeData = SCHOOL_DATA.gradeData;
    const curriculumData = SCHOOL_DATA.curriculumData;

    DOM.dashContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">% ជាប់ + ធ្លាក់ តាមថ្នាក់</h3>
                <div class="chart-container"><canvas id="bar-chart-results"></canvas></div>
            </div>
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">% ការអនុវត្តកម្មវិធីសិក្សា</h3>
                <div class="chart-container"><canvas id="bar-chart-curriculum"></canvas></div>
            </div>
        </div>

        <div class="card p-4">
            <h3 class="text-xs font-semibold text-slate-300 mb-3">ឧក្រិដ្ឋកម្ម និងសកម្មភាព</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-gray-900 rounded-lg border border-green-500/40 p-4 text-center">
                    <div class="text-3xl font-bold text-green-400">1</div>
                    <div class="text-xs font-semibold text-slate-300 mt-2">ការប្រកួតកីឡា</div>
                    <div class="text-[10px] text-slate-400 mt-1">${SCHOOL_DATA.extracurricular.sports.content}</div>
                    <div class="text-[10px] text-green-400 font-bold mt-2">${SCHOOL_DATA.extracurricular.sports.result}</div>
                </div>
                <div class="bg-gray-900 rounded-lg border border-yellow-500/40 p-4 text-center">
                    <div class="text-3xl font-bold text-yellow-400">1</div>
                    <div class="text-xs font-semibold text-slate-300 mt-2">សម្ងាត់</div>
                    <div class="text-[10px] text-slate-400 mt-1">${SCHOOL_DATA.extracurricular.arts.content}</div>
                    <div class="text-[10px] text-yellow-400 font-bold mt-2">${SCHOOL_DATA.extracurricular.arts.result}</div>
                </div>
                <div class="bg-gray-900 rounded-lg border border-blue-500/40 p-4 text-center">
                    <div class="text-2xl font-bold text-blue-400">${SCHOOL_DATA.extracurricular.inspection.cluster + SCHOOL_DATA.extracurricular.inspection.district}</div>
                    <div class="text-xs font-semibold text-slate-300 mt-2">ការលេងមើល</div>
                    <div class="text-[10px] text-slate-400 mt-1">ក្រុម ${SCHOOL_DATA.extracurricular.inspection.cluster} · ស្រុក ${SCHOOL_DATA.extracurricular.inspection.district}</div>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        renderBarChartResults();
        renderBarChartCurriculum();
    }, 50);
}

// ═════════════════════════════════════════════════════════��═════
// STAFF TAB
// ═══════════════════════════════════════════════════════════════

function renderStaff() {
    const stats = calculateStats();
    const staffList = SCHOOL_DATA.staffList;

    DOM.dashContent.innerHTML = `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            ${[
                { label: "សរុបបុគ្គលិក", value: stats.totalStaff, color: "blue" },
                { label: "ស្រីសរុប", value: stats.femaleStaff, color: "pink" },
                { label: "គ្រូបង្រៀន", value: stats.teachers, color: "green" },
                { label: "ម.តេយ្យ", value: stats.kindergarten, color: "yellow" }
            ].map(item => `
                <div class="card p-3 text-center">
                    <div class="text-3xl font-bold text-${item.color}-400">${item.value}</div>
                    <div class="text-xs text-slate-400 mt-1">${item.label}</div>
                </div>
            `).join("")}
        </div>

        <div class="card p-4">
            <h3 class="text-xs font-semibold text-slate-300 mb-3">បញ្ជីបុគ្គលិក (ឆមាសទី១ ២០២៥–២០២៦)</h3>
            <div class="overflow-x-auto">
                <table class="w-full text-xs">
                    <thead class="bg-gray-900 border-b-2 border-slate-600">
                        <tr>
                            ${["ល.រ", "ឈ្មោះ", "ភេទ", "ការសិក្សា", "ភារៈ", "ថ្នាក់", "សិស្ស", "ស្រី", "ទូរស័ព្ទ"].map(h =>
                                `<th class="p-2 text-center text-slate-400 font-semibold">${h}</th>`
                            ).join("")}
                        </tr>
                    </thead>
                    <tbody>
                        ${staffList.map(s => `
                            <tr class="table-row border-b border-slate-700">
                                <td class="p-2 text-center text-slate-400">${s.id}</td>
                                <td class="p-2 font-semibold">${s.name}</td>
                                <td class="p-2 text-center"><span class="tag ${s.gender === "ស" ? "tag-red" : ""}">${s.gender === "ស" ? "ស្រី" : "ប្រុស"}</span></td>
                                <td class="p-2 text-xs text-slate-400">${s.edu}</td>
                                <td class="p-2"><span class="tag ${getRoleTagClass(s.role)}">${s.role}</span></td>
                                <td class="p-2 text-center text-yellow-400 font-bold">${s.class !== "-" ? s.class : "—"}</td>
                                <td class="p-2 text-center">${s.total > 0 ? s.total : "—"}</td>
                                <td class="p-2 text-center text-pink-400">${s.female > 0 ? s.female : "—"}</td>
                                <td class="p-2 text-xs text-slate-400">${s.phone}</td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════
// FINANCE TAB
// ═══════════════════════════════════════════════════════════════

function renderFinance() {
    const financeData = SCHOOL_DATA.financeData;
    const totalByType = financeData.items.reduce((acc, item) => acc + item.amount, 0);

    DOM.dashContent.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">សង្ខេបចំណាយ (${financeData.period})</h3>
                <div class="space-y-3">
                    ${financeData.items.map(item => `
                        <div class="flex justify-between items-center py-2.5 border-b border-slate-700">
                            <div>
                                <div class="text-sm font-semibold text-slate-100">${item.name}</div>
                                <div class="text-xs text-slate-400">${item.description}</div>
                            </div>
                            <div class="text-right">
                                <div class="text-sm font-bold ${item.amount > 1000000 ? "text-blue-400" : "text-yellow-400"}">${formatCurrency(item.amount)}</div>
                                <div class="text-xs text-slate-400">${item.source}</div>
                            </div>
                        </div>
                    `).join("")}
                    <div class="flex justify-between items-center py-3 border-t-2 border-slate-600">
                        <div class="text-sm font-bold text-green-400">សរុប</div>
                        <div class="text-lg font-bold text-green-400">${formatCurrency(financeData.total)}</div>
                    </div>
                </div>
                <div class="bg-blue-900/20 rounded-lg p-3 mt-3 text-xs text-slate-400 border border-blue-500/30">
                    💡 ប្រភព: ${financeData.sources}
                </div>
            </div>
            <div class="card p-4">
                <h3 class="text-xs font-semibold text-slate-300 mb-3">ចំណែក% ចំណាយ</h3>
                <div class="chart-container"><canvas id="pie-chart-finance"></canvas></div>
            </div>
        </div>

        <div class="card p-4">
            <h3 class="text-xs font-semibold text-slate-300 mb-3">ព័ត៌មានលម្អិតចំណាយ</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-gray-900 rounded-lg border border-yellow-500/40 p-4">
                    <div class="text-xs font-bold text-yellow-400 mb-3">👔 សង្ហារឹម</div>
                    <div class="space-y-2 text-xs">
                        <div class="flex justify-between">
                            <span class="text-slate-400">មូលដ្ឋាន</span>
                            <span class="font-bold text-yellow-400">923,100 ៛</span>
                        </div>
                        <div class="text-slate-500">រួមបញ្ចូល: ឧបករណ៍ + កែលម្អ</div>
                    </div>
                </div>
                <div class="bg-gray-900 rounded-lg border border-blue-500/40 p-4">
                    <div class="text-xs font-bold text-blue-400 mb-3">📋 សម្ភារៈការិយាល័យ</div>
                    <div class="space-y-2 text-xs">
                        <div class="flex justify-between">
                            <span class="text-slate-400">មូលដ្ឋាន</span>
                            <span class="font-bold text-blue-400">2,358,400 ៛</span>
                        </div>
                        <div class="text-slate-500">រួមបញ្ចូល: ឯកសារ + អក្សរលេខ</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    setTimeout(() => {
        renderPieChartFinance();
    }, 50);
}

// ═══════════════════════════════════════════════════════════════
// CHART RENDERING
// ═══════════════════════════════════════════════════════════════

function getChartOptions() {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: "#94a3b8", font: { size: 10 } }
            }
        },
        scales: {
            x: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(28,51,86,.3)" } },
            y: { ticks: { color: "#94a3b8" }, grid: { color: "rgba(28,51,86,.3)" } }
        }
    };
}

function renderBarChartOverview() {
    const gradeData = SCHOOL_DATA.gradeData;
    const data = gradeData.map(g => ({
        ...g,
        passPct: Math.round((g.pass / g.total) * 100)
    }));

    if (currentChart) currentChart.destroy();
    currentChart = new Chart(document.getElementById("bar-chart-overview").getContext("2d"), {
        type: "bar",
        data: {
            labels: data.map(g => g.grade),
            datasets: [
                {
                    label: "សរុប",
                    data: data.map(g => g.total),
                    backgroundColor: "#3b82f6",
                    borderRadius: 4
                },
                {
                    label: "ស្រី",
                    data: data.map(g => g.female),
                    backgroundColor: "#ec4899",
                    borderRadius: 4
                }
            ]
        },
        options: getChartOptions()
    });
}

function renderBarChartStudents() {
    const gradeData = SCHOOL_DATA.gradeData;

    if (currentChart) currentChart.destroy();
    currentChart = new Chart(document.getElementById("bar-chart-students").getContext("2d"), {
        type: "bar",
        data: {
            labels: gradeData.map(g => g.grade),
            datasets: [
                {
                    label: "សរុប",
                    data: gradeData.map(g => g.total),
                    backgroundColor: "#3b82f6",
                    borderRadius: 4
                },
                {
                    label: "ស្រី",
                    data: gradeData.map(g => g.female),
                    backgroundColor: "#ec4899",
                    borderRadius: 4
                },
                {
                    label: "ធ្លាក់",
                    data: gradeData.map(g => g.fail),
                    backgroundColor: "#ef4444",
                    borderRadius: 4
                }
            ]
        },
        options: getChartOptions()
    });
}

function renderBarChartResults() {
    const gradeData = SCHOOL_DATA.gradeData;

    if (currentChart) currentChart.destroy();
    currentChart = new Chart(document.getElementById("bar-chart-results").getContext("2d"), {
        type: "bar",
        data: {
            labels: gradeData.map(g => g.grade),
            datasets: [
                {
                    label: "ជាប់",
                    data: gradeData.map(g => g.pass),
                    backgroundColor: "#10b981",
                    borderRadius: 4
                },
                {
                    label: "ធ្លាក់",
                    data: gradeData.map(g => g.fail),
                    backgroundColor: "#ef4444",
                    borderRadius: 4
                }
            ]
        },
        options: getChartOptions()
    });
}

function renderBarChartCurriculum() {
    const curriculumData = SCHOOL_DATA.curriculumData;

    if (currentChart) currentChart.destroy();
    currentChart = new Chart(document.getElementById("bar-chart-curriculum").getContext("2d"), {
        type: "bar",
        data: {
            labels: curriculumData.map(s => s.subject),
            datasets: [
                {
                    label: "%",
                    data: curriculumData.map(s => s.average),
                    backgroundColor: curriculumData.map(s => getProgressColor(s.average)),
                    borderRadius: 4
                }
            ]
        },
        options: {
            ...getChartOptions(),
            indexAxis: "y",
            scales: {
                x: {
                    ...getChartOptions().scales.y,
                    max: 100,
                    ticks: {
                        ...getChartOptions().scales.y.ticks,
                        callback: v => v + "%"
                    }
                },
                y: { ...getChartOptions().scales.x }
            }
        }
    });
}

function renderPieChartGender(male, female) {
    if (currentChart) currentChart.destroy();
    currentChart = new Chart(document.getElementById("pie-chart-gender").getContext("2d"), {
        type: "pie",
        data: {
            labels: ["ប្រុស", "ស្រី"],
            datasets: [
                {
                    data: [male, female],
                    backgroundColor: ["#3b82f6", "#ec4899"],
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: "#94a3b8", font: { size: 10 } } }
            }
        }
    });
}

function renderPieChartFinance() {
    const financeData = SCHOOL_DATA.financeData;

    if (currentChart) currentChart.destroy();
    currentChart = new Chart(document.getElementById("pie-chart-finance").getContext("2d"), {
        type: "pie",
        data: {
            labels: financeData.items.map(item => item.name),
            datasets: [
                {
                    data: financeData.items.map(item => item.amount),
                    backgroundColor: ["#f59e0b", "#3b82f6", "#10b981"],
                    borderWidth: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: "#94a3b8", font: { size: 10 } } }
            }
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function kpiCard(icon, classes, content) {
    return `
        <div class="kpi-card">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${classes}">${icon}</div>
            <div>${content}</div>
        </div>
    `;
}

function getColorByPercent(percent) {
    if (percent >= 50) return "text-green-400";
    if (percent > 0) return "text-yellow-400";
    return "text-red-400";
}

function getProgressColor(percent) {
    if (percent >= 50) return "bg-green-500";
    if (percent > 0) return "bg-yellow-500";
    return "bg-red-500";
}

function getRoleTagClass(role) {
    if (role === "នាយិកា" || role === "នាយករង") return "tag-orange";
    if (role === "គ្រូ" || role.includes("គ្រូ")) return "tag-green";
    return "tag";
}

function formatCurrency(amount) {
    return amount.toLocaleString("km-KH") + " ៛";
}

function formatKhmerDate(date) {
    const khmerMonths = ["មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
                         "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"];
    const khmerNumbers = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];

    function toKhmerNumber(num) {
        return num.toString().split("").map(d => khmerNumbers[d]).join("");
    }

    const day = toKhmerNumber(date.getDate());
    const month = khmerMonths[date.getMonth()];
    const year = toKhmerNumber(date.getFullYear());

    return `${day} ${month} ${year}`;
}

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
    // Page is ready
});
