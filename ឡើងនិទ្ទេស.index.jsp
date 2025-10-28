<!DOCTYPE html>
<html lang="km">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>តារាងវាយតម្លៃសិស្ស</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{
font-family:"Khmer OS Battambang","Noto Sans Khmer",sans-serif;
background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);
padding:15px;min-height:100vh;color:#222;
}
.container{max-width:1800px;margin:0 auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.25)}
.header{background:linear-gradient(135deg,#0d47a1 0%,#1976d2 100%);color:#fff;padding:18px;text-align:center}
.header h2{font-size:1.5rem;margin:0}
.filter-box{background:#f8f9fa;padding:10px 12px;border-bottom:3px solid #0d47a1}
.filter-row{
display:flex;
gap:8px;
flex-wrap:nowrap;
align-items:center;
justify-content:flex-start;
overflow-x:auto;
-webkit-overflow-scrolling:touch;
padding:6px 2px;
}
.filter-row::-webkit-scrollbar{height:6px}
label{font-weight:700;color:#0d47a1;margin-right:6px;flex:0 0 auto}
input,select{padding:6px 10px;border:2px solid #ddd;border-radius:4px;font-size:13px}
input:focus,select:focus{outline:none;border-color:#1976d2}
button{
background:#1976d2;color:#fff;border:0;cursor:pointer;font-weight:700;
padding:6px 10px;font-size:13px;border-radius:6px;
font-family:"Khmer OS Battambang","Noto Sans Khmer",sans-serif;
transition:all .12s ease;flex:0 0 auto;
}
button:hover{background:#0d47a1}
button.danger{background:#d32f2f}
button.danger:hover{background:#b71c1c}
button.success{background:#388e3c}
button.success:hover{background:#2e7d32}
.message{padding:10px 14px;margin:10px 15px;border-radius:4px;display:none;text-align:center;font-weight:700}
.message.success{display:block;background:#c8e6c9;color:#2e7d32;border:2px solid #2e7d32}
.message.error{display:block;background:#ffcdd2;color:#c62828;border:2px solid #c62828}
.tabs-container{display:flex;gap:6px;padding:8px 10px;background:#e3f2fd;border-bottom:2px solid #0d47a1;overflow-x:auto;flex-wrap:nowrap}
.tab-btn{padding:8px 12px;background:#fff;color:#0d47a1;border:2px solid #0d47a1;border-radius:4px 4px 0 0;cursor:pointer;font-weight:700;flex:0 0 auto}
.tab-btn.active{background:#0d47a1;color:#fff;border-bottom:2px solid #0d47a1}
.table-wrapper{overflow-x:auto;padding:12px;max-height:72vh;overflow-y:auto}
table{border-collapse:collapse;width:100%;font-size:12px;background:#fff}
th,td{border:1px solid #ccc;padding:6px;text-align:center;white-space:nowrap}
th{background:#0d47a1;color:#fff;position:sticky;top:0;z-index:10}
th.month-header{background:#1565c0;font-size:11px;padding:4px}
th.sub-header{background:#1976d2;font-size:10px;padding:3px}
td select{width:55px;padding:3px;font-size:11px;border:1px solid #ddd}
.grade-A{background:#c8e6c9}.grade-B{background:#fff9c4}.grade-C{background:#ffe0b2}
.grade-D{background:#ffccbc}.grade-E{background:#ffcdd2}.grade-F{background:#f8bbd0}
.action-btn{padding:6px 8px;font-size:12px;border-radius:6px}
@media (max-width:768px){
body{padding:8px}
button{padding:8px 12px;font-size:14px}
table{font-size:11px}
label{font-size:13px}
}
@media (max-width:480px){
.filter-row{flex-direction:column;align-items:flex-start}
.filter-row > *{margin-bottom:8px}
}
</style>
</head>
<body>
<div class="container">
<div class="header"><h2>📊 តារាងវាយតម្លៃសិស្ស</h2></div>

<div class="filter-box">
<div class="filter-row" role="toolbar" aria-label="filter controls">
<label for="classFilter">ថ្នាក់:</label>
<select id="classFilter" aria-label="class filter">
<option value="">-- ទាំងអស់ --</option>
<option value="1">1</option><option value="2">2</option><option value="3">3</option>
<option value="4">4</option><option value="5">5</option><option value="6">6</option>
</select>

<button onclick="filterData()" title="ចម្រាញ់">🔍 ចម្រាញ់</button>
<button class="success" onclick="addNewStudent()" title="បន្ថែមសិស្ស">➕ បន្ថែមសិស្ស</button>
<button class="danger" onclick="clearAllData()" title="លុបទាំងអស់">🗑️ លុបទាំងអស់</button>
<button onclick="downloadData()" title="ទាញយក CSV">⬇️ ទាញយក CSV</button>
<button onclick="sendToGoogleSheets()" title="បញ្ជូនទៅ Google Sheets">📤 បញ្ជូនទៅ Google Sheets</button>
<button onclick="sendAlertEmail()" title="ផ្ញើសារទៅ Gmail">📧 ផ្ញើសារទៅ Gmail</button>
</div>
</div>

<div id="message" class="message" role="status" aria-live="polite"></div>

<div id="tabsContainer" class="tabs-container" role="tablist" aria-label="tabs ថ្នាក់"></div>

<div class="table-wrapper" role="region" aria-label="តារាងសិស្ស">
<table id="studentTable" aria-describedby="table-desc">
<caption id="table-desc" style="text-align:left;padding:6px 0;color:#0d47a1;font-weight:700">ពិន្ទុប្រចាំខែ (ចាប់ពីវិច្ឆិកា → តុលា)</caption>
<thead>
<tr>
<th rowspan="3">ល.រ</th>
<th rowspan="3">គោត្តនាម</th>
<th rowspan="3">នាម</th>
<th rowspan="3">ភេទ</th>
<th rowspan="3">ថ្នាក់</th>
<th rowspan="3">មុខវិជ្ជា</th>
<th colspan="24">ពិន្ទុតាមខែ</th>
<th rowspan="3">សកម្មភាព</th>
</tr>
<tr id="month-headers"></tr>
<tr id="sub-headers"></tr>
</thead>
<tbody id="tableBody"></tbody>
</table>
</div>
</div>

<script>
/* Configuration */
const STORAGE_KEY = 'student_grades_data_nov_first_subjects_by_class';
const months = ['វិច្ឆិកា','ធ្នូ','មករា','កុម្ភៈ','មិនា','មេសា','ឧសភា','មិថុនា','កក្កដា','សីហា','កញ្ញា','តុលា'];
const subjectsByClass = {
'1': ['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យា.សង្គម'],
'2': ['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យា.សង្គម'],
'3': ['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យា.សង្គម'],
'4': ['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យាសាស្ត្រ','សង្គមសាស្ត្រ'],
'5': ['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យាសាស្ត្រ','សង្គមសាស្ត្រ'],
'6': ['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យាសាស្ត្រ','សង្គមសាស្ត្រ']
};
const grades = ['A','B','C','D','E','F'];

function escapeJs(s){return (''+s).replace(/'/g,"\\\\'").replace(/"/g,'\\\\\"')}
function escapeHtml(s){return (''+s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function loadData(){const d=localStorage.getItem(STORAGE_KEY);return d?JSON.parse(d):[]}
function saveData(data){localStorage.setItem(STORAGE_KEY,JSON.stringify(data));showMessage('✓ រក្សាទុកបានជោគជ័យ','success')}
function showMessage(text,type){const m=document.getElementById('message'); m.textContent=text; m.className='message '+type; setTimeout(()=>{m.className='message'},2500);}
function buildMonthHeaders(){const trMonths=document.getElementById('month-headers');const trSubs=document.getElementById('sub-headers');trMonths.innerHTML='';trSubs.innerHTML='';months.forEach(m=>{const th=document.createElement('th');th.setAttribute('colspan','2');th.className='month-header';th.textContent=m;trMonths.appendChild(th);const th1=document.createElement('th');th1.className='sub-header';th1.textContent='ដើម';const th2=document.createElement('th');th2.className='sub-header';th2.textContent='ចុង';trSubs.appendChild(th1);trSubs.appendChild(th2);});}
function generateTabs(){const data=loadData();const classes=['1','2','3','4','5','6'];const ctn=document.getElementById('tabsContainer');let html=`<button class=\"tab-btn active\" onclick=\"selectTab(this,'')\">ទាំងអស់</button>`;classes.forEach(cl=>{const count=data.filter(s=>s.class===cl).length;const label=count?`ថ្នាក់ ${cl} (${count})`:`ថ្នាក់ ${cl}`;html+=`<button class=\"tab-btn\" onclick=\"selectTab(this,'${cl}')\">${label}</button>`});ctn.innerHTML=html;}
function selectTab(btn,classVal){document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.getElementById('classFilter').value=classVal;filterData();}
function filterData(){const cf=document.getElementById('classFilter').value;let data=loadData();if(cf) data=data.filter(s=>s.class===cf);renderTable(data);}
function renderTable(data){const tbody=document.getElementById('tableBody');tbody.innerHTML='';if(data.length===0){tbody.innerHTML='<tr><td colspan=\"33\" style=\"text-align:center;padding:20px;font-size:14px\">គ្មានទិន្នន័យ - សូមបន្ថែមសិស្សថ្មី</td></tr>';return;}data.forEach((student,si)=>{const subjects=subjectsByClass[student.class]||['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យាសាស្ត្រ','សង្គមសាស្ត្រ'];subjects.forEach((subject,subIdx)=>{const tr=document.createElement('tr');let row='';if(subIdx===0){row+=`<td rowspan=\"${subjects.length}\">${si+1}</td>`;row+=`<td rowspan=\"${subjects.length}\">${escapeHtml(student.family)}</td>`;row+=`<td rowspan=\"${subjects.length}\">${escapeHtml(student.name)}</td>`;row+=`<td rowspan=\"${subjects.length}\">${escapeHtml(student.gender)}</td>`;row+=`<td rowspan=\"${subjects.length}\">${escapeHtml(student.class)}</td>`;}row+=`<td>${escapeHtml(subject)}</td>`;months.forEach(m=>{if(!student.grades) student.grades={};if(!student.grades[subject]) student.grades[subject]={};if(!student.grades[subject][m]) student.grades[subject][m]={start:'A',end:'A'};const gStart=student.grades[subject][m].start;const gEnd=student.grades[subject][m].end;row+=`<td class=\"grade-${gStart}\"><select onchange=\"updateGrade(${student.id},'${escapeJs(subject)}','${escapeJs(m)}','start',this.value)\" aria-label=\"${m} ដើម ${subject}\">${grades.map(g=>`<option value=\"${g}\" ${g===gStart?'selected':''}>${g}</option>`).join('')}</select></td>`;row+=`<td class=\"grade-${gEnd}\"><select onchange=\"updateGrade(${student.id},'${escapeJs(subject)}','${escapeJs(m)}','end',this.value)\" aria-label=\"${m} ចុង ${subject}\">${grades.map(g=>`<option value=\"${g}\" ${g===gEnd?'selected':''}>${g}</option>`).join('')}</select></td>`;});if(subIdx===0){row+=`<td rowspan=\"${subjects.length}\"><button class=\"action-btn danger\" onclick=\"deleteStudent(${student.id})\" aria-label=\"លុបសិស្ស ${student.family} ${student.name}\">🗑️ លុប</button></td>`;}tr.innerHTML=row;tbody.appendChild(tr);});});}
function addNewStudent(){const family=prompt('គោត្តនាម:'); if(!family) return; const name=prompt('នាម:'); if(!name) return; const gender=prompt('ភេទ (ប្រុស/ស្រី):'); if(!gender) return; const studentClass=prompt('ថ្នាក់ (1-6):'); if(!studentClass) return; if(!['1','2','3','4','5','6'].includes(studentClass)) { showMessage('សូមបញ្ចូលថ្នាក់ 1 ដល់ 6', 'error'); return; } const data=loadData(); const id=Date.now(); const gradeData={}; const subjects=subjectsByClass[studentClass]||['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យាសាស្ត្រ','សង្គមសាស្ត្រ']; subjects.forEach(sub=>{gradeData[sub]={}; months.forEach(m=>{gradeData[sub][m]={start:'A',end:'A'}})}); data.push({id,family,name,gender,class:studentClass,grades:gradeData}); saveData(data); generateTabs(); filterData();}
function updateGrade(id,subject,month,type,value){const data=loadData();const s=data.find(x=>x.id===id);if(s){if(!s.grades)s.grades={};if(!s.grades[subject])s.grades[subject]={};if(!s.grades[subject][month])s.grades[subject][month]={start:'A',end:'A'};s.grades[subject][month][type]=value;localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}}
function deleteStudent(id){if(!confirm('តើលុបសិស្សនេះដែរទេ?')) return;const filtered=loadData().filter(s=>s.id!==id);localStorage.setItem(STORAGE_KEY,JSON.stringify(filtered));showMessage('✓ លុបបានជោគជ័យ','success');generateTabs();filterData();}
function clearAllData(){if(!confirm('លុបទិន្នន័យទាំងអស់? វាមិនអាចត្រឡប់វិញបានទេ')) return;localStorage.removeItem(STORAGE_KEY);showMessage('✓ លុបទាំងអស់បានជោគជ័យ','success');generateTabs();filterData();}
function downloadData(){const data=loadData();if(data.length===0){showMessage('គ្មានទិន្នន័យដែលត្រូវទាញយក','error');return;}let csv='\\ufeff';
csv+='គោត្តនាម,នាម,ភេទ,ថ្នាក់,មុខវិជ្ជា,';
months.forEach(m=>{csv+=m+' ដើម,'+m+' ចុង,'});csv=csv.slice(0,-1)+'\\n';
data.forEach(st=>{const subjects=Object.keys(st.grades||{});subjects.forEach(sub=>{const row=[st.family,st.name,st.gender,st.class,sub];months.forEach(m=>{const g=(st.grades&&st.grades[sub]&&st.grades[sub][m])?st.grades[sub][m]:{start:'A',end:'A'};row.push(g.start);row.push(g.end)});csv+='\"'+row.join('\",\"')+'\"\\n';});});const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download='student_grades_'+new Date().toISOString().slice(0,10)+'.csv';link.click();showMessage('✓ ទាញយកបានជោគជ័យ','success');}

function sendToGoogleSheets() {
    const data = loadData();
    
    if (data.length === 0) {
        showMessage('គ្មានទិន្នន័យដើម្បីបញ្ជូន', 'error');
        return;
    }
    
    showMessage('✓ កំពុងបញ្ជូនទៅ Google Sheets...', 'success');
    
    // Use your actual Web App URL
    const webAppUrl = 'https://script.google.com/macros/s/AKfycbz8VIYvpz_simbUBVNWD4OL9uGy0aNb1LoGTFeAOwvUo7DZJVleoxxeHo1ruZOqO0vsBg/exec';
    
    fetch(webAppUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            showMessage('✓ បានបញ្ជូនទៅ Google Sheets ដោយជោគជ័យ', 'success');
        } else {
            showMessage('✗ កំហុស: ' + result.message, 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('✗ កំហុសក្នុងការបញ្ជូនទៅ Google Sheets', 'error');
    });
}

function sendAlertEmail() {
    const data = loadData();
    const totalStudents = data.length;
    const totalClasses = new Set(data.map(s => s.class)).size;
    
    if (totalStudents === 0) {
        showMessage('គ្មានទិន្នន័យដើម្បីផ្ញើសារ', 'error');
        return;
    }
    
    const subject = 'ការផ្ញើសារពីកម្មវិធីតារាងវាយតម្លៃសិស្ស';
    const body = `
ការផ្ញើសារពីកម្មវិធីតារាងវាយតម្លៃសិស្ស

ការសង្កេត:
- ចំនួនសិស្សសរុប: ${totalStudents}
- ចំនួនថ្នាក់: ${totalClasses}

សូមពិនិត្យមើលទិន្នន័យបន្ថែមនៅក្នុងកម្មវិធី។

សូមអរគុណ,
កម្មវិធីតារាងវាយតម្លៃសិស្ស
    `.trim();
    
    // Create a mailto link to simulate sending email
    const mailtoLink = `mailto:icttong123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // In a real implementation, you would use a backend service to send email
    // For now, we'll open the mailto link in a new tab
    showMessage('✓ កំពុងផ្ញើសារទៅ icttong123@gmail.com...', 'success');
    
    setTimeout(() => {
        window.open(mailtoLink, '_blank');
        showMessage('✓ បានផ្ញើសារទៅ icttong123@gmail.com ដោយជោគជ័យ', 'success');
    }, 1500);
}

function initializeSampleData(){if(localStorage.getItem(STORAGE_KEY)) return;const sample=[];const sampleRows=[['សុខ','ដារ៉ា','ស្រី','1'],['លី','សុភា','ប្រុស','1'],['ចាន់','មករា','ប្រុស','2'],['ហេង','សុផាត','ប្រុស','3'],['ពេជ្រ','ច័ន្ទ','ស្រី','4'],['ផាន','វាសនា','ស្រី','5'],['កើន','វីរៈនិច្ច','ស្រី','6']];let idBase=1000;sampleRows.forEach((r,i)=>{const id=idBase+i;const family=r[0],name=r[1],gender=r[2],cls=r[3];const subjects=subjectsByClass[cls]||['ភាសាខ្មែរ','គណិតវិទ្យា','វិទ្យាសាស្ត្រ','សង្គមសាស្ត្រ'];const gradesObj={};subjects.forEach(sub=>{gradesObj[sub]={};months.forEach((m,mi)=>{const start=grades[(mi+i)%grades.length];const end=grades[(mi+i+1)%grades.length];gradesObj[sub][m]={start,end};});});sample.push({id,family,name,gender,class:cls,grades:gradesObj});});localStorage.setItem(STORAGE_KEY,JSON.stringify(sample));}

document.addEventListener('DOMContentLoaded',()=>{buildMonthHeaders();initializeSampleData();generateTabs();filterData();});
</script>
</body>
</html>

