// Traductions et données
const DATA = {
    translations: {
        fr: {
            mainTitle: "Guide des Titres de Séjour en France",
            subtitle: "Documents justificatifs pour renouvellement et changement de statut (2026)",
            langLabel: "Langue",
            noticeTitle: "Information Importante 2026",
            civicExamTitle: "✅ Examen Civique",
            civicExamDesc: "Depuis le 1er janvier 2026, un examen civique est obligatoire pour toute première demande de titre pluriannuel ou de carte de résident.",
            civicExamDetails: "L'examen dure 45 minutes, comprend 40 questions (QCM) et nécessite 80% de bonnes réponses. L'attestation de réussite est valable à vie.",
            frenchLevelTitle: "📚 Niveau de Français",
            frenchA2: "Niveau A2 minimum requis pour carte pluriannuelle",
            frenchB1: "Niveau B1 minimum requis pour carte de résident",
            frenchB2: "Niveau B2 minimum requis pour la naturalisation",
            warningRenewal: "⚠️ Attention : Les renouvellements de titres pluriannuels ou de cartes de résident ne nécessitent PAS l'examen civique ni le nouveau niveau de français.",
            selectTitle: "Sélectionnez votre type de titre de séjour",
            statusChangeTitle: "🔄 Changement de Statut",
            backToMenu: "← Retour au menu",
            downloadList: "📥 Télécharger la liste",
            downloadInfo: "💡 Téléchargez cette liste pour l'avoir toujours avec vous",
            fees: "Frais",
            timeline: "Délais",
            timelineDesc: "Déposez votre demande entre 4 mois et 2 mois avant expiration",
            onlineProcess: "Démarche en ligne via ANEF",
            eligibilityCriteria: "Critères d'Éligibilité",
            commonDocs: "Documents Communs (tous les titres)",
            specificDocs: "Documents Spécifiques",
            criteria: "Critères",
            documentsNeeded: "Documents nécessaires",
            changeFrom: "Changement depuis",
            changeTo: "vers",
            footerText: "Guide créé pour faciliter vos démarches administratives",
            footerAnef: "Démarche en ligne via ANEF : administration-etrangers-en-france.interieur.gouv.fr"
        },
        en: {
            mainTitle: "French Residence Permit Guide",
            subtitle: "Required Documents for Renewal and Status Change (2026)",
            langLabel: "Language",
            noticeTitle: "Important Note 2026",
            civicExamTitle: "✅ Civic Exam",
            civicExamDesc: "Since January 1, 2026, a civic exam is mandatory for any first application for a multi-year permit or resident card.",
            civicExamDetails: "The exam lasts 45 minutes, includes 40 questions (MCQ) and requires 80% correct answers. The certificate is valid for life.",
            frenchLevelTitle: "📚 French Level",
            frenchA2: "A2 minimum level required for multi-year card",
            frenchB1: "B1 minimum level required for resident card",
            frenchB2: "B2 minimum level required for naturalization",
            warningRenewal: "⚠️ Warning: Renewals of multi-year permits or resident cards do NOT require the civic exam or new French level.",
            selectTitle: "Select your residence permit type",
            statusChangeTitle: "🔄 Status Change",
            backToMenu: "← Back to menu",
            downloadList: "📥 Download list",
            downloadInfo: "💡 Download this list to always have it with you",
            fees: "Fees",
            timeline: "Timeline",
            timelineDesc: "Submit your application between 4 months and 2 months before expiration",
            onlineProcess: "Online process via ANEF",
            eligibilityCriteria: "Eligibility Criteria",
            commonDocs: "Common Documents (all permits)",
            specificDocs: "Specific Documents",
            criteria: "Criteria",
            documentsNeeded: "Required documents",
            changeFrom: "Change from",
            changeTo: "to",
            footerText: "Guide created to facilitate your administrative procedures",
            footerAnef: "Online process via ANEF: administration-etrangers-en-france.interieur.gouv.fr"
        }
    },
    
    cardTypes: [
        { id: 'student', icon: '📚', nameFr: 'Carte Étudiant', nameEn: 'Student Card', color: 'linear-gradient(135deg, #3b82f6, #2563eb)', fees: '75€' },
        { id: 'worker', icon: '💼', nameFr: 'Carte Salarié', nameEn: 'Worker Card', color: 'linear-gradient(135deg, #10b981, #059669)', fees: '225€' },
        { id: 'pluriannual', icon: '📅', nameFr: 'Carte Pluriannuelle', nameEn: 'Multi-year Card', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', fees: '225€' },
        { id: 'privateLife', icon: '👨‍👩‍👧', nameFr: 'Vie Privée et Familiale', nameEn: 'Private and Family Life', color: 'linear-gradient(135deg, #ec4899, #db2777)', fees: '225€' },
        { id: 'resident', icon: '🏠', nameFr: 'Carte de Résident', nameEn: 'Resident Card', color: 'linear-gradient(135deg, #f97316, #ea580c)', fees: '225€' },
        { id: 'tempWorker', icon: '⏱️', nameFr: 'Travailleur Temporaire', nameEn: 'Temporary Worker', color: 'linear-gradient(135deg, #14b8a6, #0d9488)', fees: '225€' },
        { id: 'naturalization', icon: '🇫🇷', nameFr: 'Naturalisation', nameEn: 'Naturalization', color: 'linear-gradient(135deg, #ef4444, #3b82f6)', fees: '55€' }
    ],
    
    statusChanges: [
        { id: 'studentToWorker', icon: '📚→💼', fromFr: 'Carte Étudiant', toFr: 'Carte Salarié', fromEn: 'Student Card', toEn: 'Worker Card' },
        { id: 'workerToResident', icon: '💼→🏠', fromFr: 'Carte Salarié', toFr: 'Carte de Résident', fromEn: 'Worker Card', toEn: 'Resident Card' },
        { id: 'pluriannualToResident', icon: '📅→🏠', fromFr: 'Carte Pluriannuelle', toFr: 'Carte de Résident', fromEn: 'Multi-year Card', toEn: 'Resident Card' },
        { id: 'residentToNaturalization', icon: '🏠→🇫🇷', fromFr: 'Carte de Résident', toFr: 'Naturalisation', fromEn: 'Resident Card', toEn: 'Naturalization' }
    ]
};

// État de l'application
let currentLang = 'fr';
let currentView = 'main';
let selectedCard = null;

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelector();
    initNoticeToggle();
    renderCards();
    renderStatusChanges();
    updateTranslations();
});

// Gestion des langues
function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.dataset.lang;
            updateTranslations();
            if (currentView === 'detail') {
                renderDetailView(selectedCard.type, selectedCard.data);
            }
        });
    });
}

// Toggle notice 2026
function initNoticeToggle() {
    const notice = document.getElementById('notice2026');
    const content = document.getElementById('notice-content');
    const arrow = document.getElementById('notice-arrow');
    
    notice.addEventListener('click', () => {
        content.classList.toggle('active');
        arrow.textContent = content.classList.contains('active') ? '▲' : '▼';
    });
}

// Mise à jour des traductions
function updateTranslations() {
    const t = DATA.translations[currentLang] || DATA.translations.fr;
    
    document.getElementById('main-title').textContent = t.mainTitle;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('lang-label').textContent = t.langLabel;
    document.getElementById('notice-title').textContent = t.noticeTitle;
    document.getElementById('civic-exam-title').innerHTML = t.civicExamTitle;
    document.getElementById('civic-exam-desc').textContent = t.civicExamDesc;
    document.getElementById('civic-exam-details').textContent = t.civicExamDetails;
    document.getElementById('french-level-title').innerHTML = t.frenchLevelTitle;
    document.getElementById('french-a2').textContent = t.frenchA2;
    document.getElementById('french-b1').textContent = t.frenchB1;
    document.getElementById('french-b2').textContent = t.frenchB2;
    document.getElementById('warning-renewal').innerHTML = t.warningRenewal;
    document.getElementById('select-title').textContent = t.selectTitle;
    document.getElementById('status-change-title').innerHTML = t.statusChangeTitle;
    document.getElementById('footer-text').textContent = t.footerText;
    document.getElementById('footer-anef').textContent = t.footerAnef;
}

// Rendu des cartes
function renderCards() {
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';
    
    DATA.cardTypes.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card';
        cardEl.innerHTML = `
            <div class="card-icon" style="background: ${card.color}">${card.icon}</div>
            <div class="card-title">${currentLang === 'fr' ? card.nameFr : card.nameEn}</div>
            <div class="card-footer">
                <span>${DATA.translations[currentLang].fees}: ${card.fees}</span>
                <span>→</span>
            </div>
        `;
        cardEl.addEventListener('click', () => showDetail(card.id, card));
        grid.appendChild(cardEl);
    });
}

// Rendu des changements de statut
function renderStatusChanges() {
    const grid = document.getElementById('status-changes-grid');
    grid.innerHTML = '';
    
    DATA.statusChanges.forEach(change => {
        const card = document.createElement('div');
        card.className = 'status-change-card';
        card.innerHTML = `
            <div class="status-icon">${change.icon}</div>
            <div class="status-label">${DATA.translations[currentLang].changeFrom}</div>
            <div class="status-name">${currentLang === 'fr' ? change.fromFr : change.fromEn}</div>
            <div class="status-label">${DATA.translations[currentLang].changeTo}</div>
            <div class="status-name">${currentLang === 'fr' ? change.toFr : change.toEn}</div>
        `;
        card.addEventListener('click', () => showStatusChangeDetail(change.id, change));
        grid.appendChild(card);
    });
}

// Afficher le détail
function showDetail(type, data) {
    currentView = 'detail';
    selectedCard = { type, data };
    document.getElementById('main-view').classList.add('hidden');
    renderDetailView(type, data);
}

function showStatusChangeDetail(id, data) {
    currentView = 'detail';
    selectedCard = { type: id, data, isStatusChange: true };
    document.getElementById('main-view').classList.add('hidden');
    renderStatusChangeDetailView(id, data);
}

function backToMain() {
    currentView = 'main';
    selectedCard = null;
    document.getElementById('main-view').classList.remove('hidden');
    document.getElementById('detail-view').classList.remove('active');
    document.getElementById('detail-view').innerHTML = '';
}

// Rendu de la vue détaillée
function renderDetailView(type, data) {
    const t = DATA.translations[currentLang];
    const detailView = document.getElementById('detail-view');
    
    detailView.innerHTML = `
        <button class="back-btn" onclick="backToMain()">${t.backToMenu}</button>
        <div class="detail-card">
            <div class="detail-header">
                <div class="detail-icon" style="background: ${data.color}">${data.icon}</div>
                <div class="detail-info">
                    <div class="detail-title">${currentLang === 'fr' ? data.nameFr : data.nameEn}</div>
                    <div class="detail-subtitle">${t.commonDocs.split('(')[0]}</div>
                    <button class="download-btn" onclick="downloadList('${type}')">${t.downloadList}</button>
                </div>
            </div>
            
            <div class="info-notice">
                <span>💡</span>
                <span>${t.downloadInfo}</span>
            </div>
            
            <div class="info-boxes">
                <div class="info-box timeline">
                    <div class="info-box-icon">⏰</div>
                    <div class="info-box-label">${t.timeline}</div>
                    <div class="info-box-value">${t.timelineDesc}</div>
                </div>
                <div class="info-box online">
                    <div class="info-box-icon">💻</div>
                    <div class="info-box-label">${t.onlineProcess}</div>
                    <div class="info-box-value">administration-etrangers-en-france.interieur.gouv.fr</div>
                </div>
                <div class="info-box fees">
                    <div class="info-box-icon">💰</div>
                    <div class="info-box-label">${t.fees}</div>
                    <div class="info-box-value">${data.fees}</div>
                </div>
            </div>
            
            ${renderEligibilitySection(type)}
            ${renderCommonDocsSection()}
            ${renderSpecificDocsSection(type)}
        </div>
    `;
    
    detailView.classList.add('active');
}

function renderStatusChangeDetailView(id, data) {
    const t = DATA.translations[currentLang];
    const detailView = document.getElementById('detail-view');
    
    detailView.innerHTML = `
        <button class="back-btn" onclick="backToMain()">${t.backToMenu}</button>
        <div class="detail-card">
            <div class="detail-header">
                <div style="text-align: center; flex: 1;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">${data.icon}</div>
                    <div class="detail-title">${t.changeFrom} ${currentLang === 'fr' ? data.fromFr : data.fromEn}</div>
                    <div class="detail-subtitle" style="font-size: 1.5rem; margin-top: 0.5rem;">${t.changeTo} ${currentLang === 'fr' ? data.toFr : data.toEn}</div>
                    <button class="download-btn" onclick="downloadStatusChange('${id}')">${t.downloadList}</button>
                </div>
            </div>
            
            ${renderStatusChangeCriteria(id)}
            ${renderStatusChangeDocuments(id)}
        </div>
    `;
    
    detailView.classList.add('active');
}

// Sections de documents - simplifié pour l'exemple
function renderEligibilitySection(type) {
    const t = DATA.translations[currentLang];
    const eligibility = getEligibility(type, currentLang);
    
    return `
        <div class="doc-section">
            <h3 class="section-title eligibility">⚠️ ${t.eligibilityCriteria}</h3>
            <div class="doc-list">
                ${eligibility.map(item => `
                    <div class="doc-item eligibility">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${item}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCommonDocsSection() {
    const t = DATA.translations[currentLang];
    const docs = getCommonDocs(currentLang);
    
    return `
        <div class="doc-section">
            <h3 class="section-title common">📄 ${t.commonDocs}</h3>
            <div class="doc-list">
                ${docs.map(doc => `
                    <div class="doc-item">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${doc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderSpecificDocsSection(type) {
    const t = DATA.translations[currentLang];
    const docs = getSpecificDocs(type, currentLang);
    
    return `
        <div class="doc-section">
            <h3 class="section-title specific">📋 ${t.specificDocs}</h3>
            <div class="doc-list">
                ${docs.map(doc => `
                    <div class="doc-item specific">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${doc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderStatusChangeCriteria(id) {
    const t = DATA.translations[currentLang];
    const criteria = getStatusChangeCriteria(id, currentLang);
    
    return `
        <div class="doc-section">
            <h3 class="section-title criteria">⚡ ${t.criteria}</h3>
            <div class="doc-list">
                ${criteria.map(item => `
                    <div class="doc-item criteria">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${item}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderStatusChangeDocuments(id) {
    const t = DATA.translations[currentLang];
    const docs = getStatusChangeDocs(id, currentLang);
    
    return `
        <div class="doc-section">
            <h3 class="section-title specific">📋 ${t.documentsNeeded}</h3>
            <div class="doc-list">
                ${docs.map(doc => `
                    <div class="doc-item specific">
                        <div class="doc-icon">✅</div>
                        <div class="doc-text">${doc}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Données simplifiées - À compléter avec toutes les données
function getCommonDocs(lang) {
    const docs = {
        fr: [
            "Passeport en cours de validité (toutes les pages)",
            "3 photos d'identité récentes aux normes",
            "Justificatif de domicile de moins de 6 mois",
            "Titre de séjour actuel (recto-verso)",
            "Attestation de dépôt ANEF",
            "Justificatif de paiement des timbres fiscaux"
        ],
        en: [
            "Valid passport (all pages)",
            "3 recent ID photos meeting standards",
            "Proof of address less than 6 months old",
            "Current residence permit (both sides)",
            "ANEF deposit certificate",
            "Proof of tax stamp payment"
        ]
    };
    return docs[lang] || docs.fr;
}

function getEligibility(type, lang) {
    const eligibility = {
        student: {
            fr: [
                "Être inscrit dans un établissement d'enseignement supérieur en France",
                "Disposer de ressources suffisantes (minimum 750€/mois)",
                "Avoir une assurance maladie valide",
                "Suivre régulièrement les cours (assiduité)",
                "Progression dans les études (passage d'année, validation de crédits)"
            ],
            en: [
                "Be enrolled in a higher education institution in France",
                "Have sufficient resources (minimum €750/month)",
                "Have valid health insurance",
                "Regularly attend courses (attendance)",
                "Progress in studies (year progression, credit validation)"
            ]
        },
        worker: {
            fr: [
                "Avoir un contrat de travail en France (CDI ou CDD de plus de 3 mois)",
                "Obtenir une autorisation de travail délivrée par la DDETS",
                "Exercer un emploi conforme au contrat de travail",
                "Respecter la législation du travail française",
                "Cotiser à la sécurité sociale"
            ],
            en: [
                "Have an employment contract in France (permanent or fixed-term more than 3 months)",
                "Obtain work authorization issued by DDETS",
                "Exercise employment in accordance with the employment contract",
                "Comply with French labor legislation",
                "Contribute to social security"
            ]
        }
    };
    return eligibility[type]?.[lang] || eligibility.student.fr;
}

function getSpecificDocs(type, lang) {
    const docs = {
        student: {
            fr: [
                "Certificat de scolarité ou attestation d'inscription pour l'année en cours",
                "Justificatif de ressources suffisantes (750€/mois minimum)",
                "Attestation bancaire ou engagement de prise en charge",
                "Attestation d'assurance maladie",
                "Pour le renouvellement : relevés de notes de l'année écoulée"
            ],
            en: [
                "School certificate or registration certificate for current year",
                "Proof of sufficient resources (minimum €750/month)",
                "Bank statement or financial support commitment",
                "Health insurance certificate",
                "For renewal: previous year's grade reports"
            ]
        },
        worker: {
            fr: [
                "Contrat de travail (CDI, CDD de plus de 3 mois)",
                "3 derniers bulletins de salaire",
                "Attestation d'emploi de l'employeur",
                "Autorisation de travail ou CERFA complété par l'employeur",
                "Dernier avis d'imposition",
                "Si chômage : attestation France Travail"
            ],
            en: [
                "Employment contract (permanent or fixed-term more than 3 months)",
                "Last 3 pay slips",
                "Employment certificate from employer",
                "Work authorization or CERFA completed by employer",
                "Latest tax assessment",
                "If unemployed: France Travail certificate"
            ]
        }
    };
    return docs[type]?.[lang] || docs.student.fr;
}

function getStatusChangeCriteria(id, lang) {
    const criteria = {
        studentToWorker: {
            fr: [
                "Diplôme minimum Licence (Bac+3) ou équivalent",
                "Contrat de travail CDI ou CDD minimum 12 mois",
                "Salaire minimum 1.5x SMIC brut annuel (environ 30 000€/an)",
                "Emploi en lien avec la formation"
            ],
            en: [
                "Minimum Bachelor's degree (Bac+3) or equivalent",
                "Permanent or 12-month minimum fixed-term contract",
                "Minimum salary 1.5x annual gross minimum wage (approx. €30,000/year)",
                "Job related to studies"
            ]
        }
    };
    return criteria[id]?.[lang] || criteria.studentToWorker.fr;
}

function getStatusChangeDocs(id, lang) {
    const docs = {
        studentToWorker: {
            fr: [
                "Tous les documents 'Salarié'",
                "Diplôme obtenu en France",
                "Relevés de notes",
                "CERFA de changement de statut",
                "Avis favorable de la DDETS"
            ],
            en: [
                "All 'Worker' documents",
                "Degree obtained in France",
                "Transcripts",
                "CERFA for status change",
                "Favorable opinion from DDETS"
            ]
        }
    };
    return docs[id]?.[lang] || docs.studentToWorker.fr;
}

// Téléchargement
function downloadList(type) {
    const t = DATA.translations[currentLang];
    const card = DATA.cardTypes.find(c => c.id === type);
    const title = currentLang === 'fr' ? card.nameFr : card.nameEn;
    
    let content = `${t.mainTitle}\n\n`;
    content += `${title}\n${'='.repeat(title.length)}\n\n`;
    content += `${t.timeline}: ${t.timelineDesc}\n`;
    content += `${t.fees}: ${card.fees}\n\n`;
    
    content += `${t.eligibilityCriteria}:\n${'-'.repeat(t.eligibilityCriteria.length)}\n`;
    getEligibility(type, currentLang).forEach((item, i) => {
        content += `${i + 1}. ${item}\n`;
    });
    
    content += `\n${t.commonDocs}:\n${'-'.repeat(t.commonDocs.length)}\n`;
    getCommonDocs(currentLang).forEach((doc, i) => {
        content += `${i + 1}. ${doc}\n`;
    });
    
    content += `\n${t.specificDocs}:\n${'-'.repeat(t.specificDocs.length)}\n`;
    getSpecificDocs(type, currentLang).forEach((doc, i) => {
        content += `${i + 1}. ${doc}\n`;
    });
    
    content += `\n\n${t.onlineProcess}\n${t.footerText}`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}_documents.txt`;
    link.click();
    URL.revokeObjectURL(url);
}

function downloadStatusChange(id) {
    const t = DATA.translations[currentLang];
    const change = DATA.statusChanges.find(c => c.id === id);
    const title = `${t.changeFrom} ${currentLang === 'fr' ? change.fromFr : change.fromEn} ${t.changeTo} ${currentLang === 'fr' ? change.toFr : change.toEn}`;
    
    let content = `${t.mainTitle}\n\n`;
    content += `${title}\n${'='.repeat(title.length)}\n\n`;
    
    content += `${t.criteria}:\n${'-'.repeat(t.criteria.length)}\n`;
    getStatusChangeCriteria(id, currentLang).forEach((item, i) => {
        content += `${i + 1}. ${item}\n`;
    });
    
    content += `\n${t.documentsNeeded}:\n${'-'.repeat(t.documentsNeeded.length)}\n`;
    getStatusChangeDocs(id, currentLang).forEach((doc, i) => {
        content += `${i + 1}. ${doc}\n`;
    });
    
    content += `\n\n${t.onlineProcess}\n${t.footerText}`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '_')}_changement.txt`;
    link.click();
    URL.revokeObjectURL(url);
}
